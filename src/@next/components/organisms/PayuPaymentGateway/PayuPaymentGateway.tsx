import { CompleteCheckout_checkoutComplete_order } from "@saleor/sdk/lib/mutations/gqlTypes/CompleteCheckout";
import React, { useEffect, useRef, useState } from "react";
import { defineMessages, IntlShape, useIntl } from "react-intl";

import { ErrorMessage } from "@components/atoms";
import { IFormError, IPaymentGatewayConfig } from "@types";

export const payuNotNegativeConfirmationStatusCodes = [
  "Authorised",
  "AuthenticationFinished",
  "AuthenticationNotRequired",
  "Pending",
  "Received",
  "PresentToShopper",
];

const messageDescription = "payu payment gateway error";

export const payuErrorMessages = defineMessages({
  unknownPayment: {
    defaultMessage: "Unknown payment submission error occured.",
    description: messageDescription,
  },
  invalidPaymentSubmission: {
    defaultMessage: "Invalid payment submission.",
    description: messageDescription,
  },
  cannotHandlePaymentConfirmation: {
    defaultMessage:
      "Payment gateway did not provide payment confirmation handler.",
    description: messageDescription,
  },
  paymentMalformedConfirmationData: {
    defaultMessage:
      "Payment needs confirmation but data required for confirmation received from the server is malformed.",
    description: messageDescription,
  },
  paymentNoConfirmationData: {
    defaultMessage:
      "Payment needs confirmation but data required for confirmation not received from the server.",
    description: messageDescription,
  },
});

export const payuConfirmationErrorMessages = defineMessages({
  error: {
    defaultMessage: "Error processing payment occured.",
    description: messageDescription,
  },
  refused: {
    defaultMessage:
      "The payment was refused. Try the payment again using a different payment method or card.",
    description: messageDescription,
  },
  cancelled: {
    defaultMessage: "Payment was cancelled.",
    description: messageDescription,
  },
  general: {
    defaultMessage: "Payment confirmation went wrong.",
    description: messageDescription,
  },
});

export function translatepayuConfirmationError(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Error":
      return intl.formatMessage(payuConfirmationErrorMessages.error);
    case "Refused":
      return intl.formatMessage(payuConfirmationErrorMessages.refused);
    case "Cancelled":
      return intl.formatMessage(payuConfirmationErrorMessages.cancelled);
    default:
      return intl.formatMessage(payuConfirmationErrorMessages.general);
  }
}

interface IResourceConfig {
  src: string;
  integrity: string;
  crossOrigin: string;
}

interface payuSubmitState {
  data?: any;
  isValid?: boolean;
}
interface payuSubmitDropin {
  handleAction?: (data?: any) => any;
}
interface payuError {
  error?: string;
}

export interface IProps {
  /**
   * Payment gateway client configuration.
   */
  config: IPaymentGatewayConfig[];
  /**
   * Form reference on which payment might be submitted.
   */
  formRef?: React.RefObject<HTMLFormElement>;
  /**
   * Payment gateway script resource configuration.
   */
  scriptConfig: IResourceConfig;
  /**
   * Payment gateway CSS styling resource configuration.
   */
  styleConfig: IResourceConfig;
  /**
   * Method called after the form is submitted.
   */
  processPayment: () => void;
  /**
   * Method to call on gateway payment submission.
   */
  submitPayment: (data: {
    confirmationData: any;
    confirmationNeeded: boolean;
  }) => Promise<any>;
  /**
   * Method called after succesful gateway payment submission. This is the case when no confirmation is needed.
   */
  submitPaymentSuccess: (
    order?: CompleteCheckout_checkoutComplete_order
  ) => void;
  /**
   * Errors returned by the payment gateway.
   */
  errors?: IFormError[];
  /**
   * Method called when gateway error occured.
   */
  onError: (errors: IFormError[]) => void;
}

const PayuPaymentGateway: React.FC<IProps> = ({
  config,
  formRef,
  scriptConfig,
  styleConfig,
  processPayment,
  submitPayment,
  submitPaymentSuccess,
  errors,
  onError,
}: IProps) => {
  const intl = useIntl();

  const payuClientKey = config?.find(
    ({ field }) => field === "client_key"
  )?.value;
  const payuConfig = config?.find(({ field }) => field === "config")?.value;
  const parsedpayuConfig = payuConfig && JSON.parse(payuConfig);

  const [dropin, setDropin] = useState<any>();
  const gatewayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (payuClientKey && parsedpayuConfig && !dropin && gatewayRef.current) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = styleConfig.src;
      link.integrity = styleConfig.integrity;
      link.crossOrigin = styleConfig.crossOrigin;
      document.body.appendChild(link);

      const script = document.createElement("script");
      script.src = scriptConfig.src;
      script.integrity = scriptConfig.integrity;
      script.crossOrigin = scriptConfig.crossOrigin;
      script.async = true;
      script.onload = initpayuGatewayHandlers; // Wait until the script is loaded before initiating payuCheckout
      document.body.appendChild(script);
    }
  }, [payuClientKey, parsedpayuConfig, gatewayRef.current]);
  const initpayuGatewayHandlers = () => {
    const configuration = payuClientKey &&
      payuConfig && {
        locale: navigator.language,
        environment: "test",
        clientKey: payuClientKey,
        paymentMethodsResponse: parsedpayuConfig,
        showPayButton: false,
        onSubmit: onSubmitpayuForm,
        onAdditionalDetails: onSubmitpayuForm,
        onError: onpayuError,
      };

    const checkout = configuration && new window.AdyenCheckout(configuration);
    const dropinElement = checkout?.create("dropin");

    if (dropinElement && !dropin && gatewayRef.current) {
      dropinElement?.mount(gatewayRef.current);
      setDropin(dropinElement);
    }
  };

  const onSubmitpayuForm = async (
    state?: payuSubmitState,
    dropin?: payuSubmitDropin
  ) => {
    if (!state?.isValid) {
      onError([
        new Error(
          intl.formatMessage(payuErrorMessages.invalidPaymentSubmission)
        ),
      ]);
    } else {
      const payment = await submitPayment(state?.data);

      if (payment.errors?.length) {
        onError(payment.errors);
      } else if (!payment?.confirmationNeeded) {
        submitPaymentSuccess(payment?.order);
      } else if (!dropin?.handleAction) {
        onError([
          new Error(
            intl.formatMessage(
              payuErrorMessages.cannotHandlePaymentConfirmation
            )
          ),
        ]);
      } else if (!payment?.confirmationData) {
        onError([
          new Error(
            intl.formatMessage(payuErrorMessages.paymentNoConfirmationData)
          ),
        ]);
      } else {
        let paymentAction;
        try {
          paymentAction = JSON.parse(payment.confirmationData);
        } catch (parseError) {
          onError([
            new Error(
              intl.formatMessage(
                payuErrorMessages.paymentMalformedConfirmationData
              )
            ),
          ]);
        }
        try {
          dropin.handleAction(paymentAction);
        } catch (error) {
          onError([new Error(error)]);
        }
      }
    }
  };

  const onpayuError = (error?: payuError) => {
    if (error?.error) {
      onError([{ message: error.error }]);
    } else {
      onError([
        new Error(intl.formatMessage(payuErrorMessages.unknownPayment)),
      ]);
    }
  };

  useEffect(() => {
    if (dropin) {
      (formRef?.current as any)?.addEventListener("submitComplete", () => {
        dropin.submit();
      });
    }
  }, [formRef, dropin]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    processPayment();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div ref={gatewayRef} />
      <ErrorMessage errors={errors} />
    </form>
  );
};

export { PayuPaymentGateway };
