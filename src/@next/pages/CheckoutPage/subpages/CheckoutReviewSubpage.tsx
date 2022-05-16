import { OrderStatus, useCheckout } from "@saleor/sdk";
import React, {
  forwardRef,
  RefForwardingComponent,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import { CheckoutReview } from "@components/organisms";
import { statuses as dummyStatuses } from "@components/organisms/DummyPaymentGateway";
import { apiUrl, paymentGatewayNames } from "@temp/constants";
import { IFormError } from "@types";

import {
  CheckoutStep,
  SubpageBaseProps,
  SubpageCompleteHandler,
} from "../utils";

export interface ISubmitCheckoutData {
  id: string;
  orderNumber: string;
  token: string;
  orderStatus: OrderStatus;
}

interface CheckoutReviewSubpageProps extends SubpageBaseProps {
  selectedPaymentGatewayToken?: string;
  paymentGatewayFormRef: React.RefObject<HTMLFormElement>;
  payuUrl?: string;
  noteRef?: any;
}

const CheckoutReviewSubpageWithRef: RefForwardingComponent<
  SubpageCompleteHandler,
  CheckoutReviewSubpageProps
> = (
  {
    selectedPaymentGatewayToken,
    paymentGatewayFormRef,
    changeSubmitProgress,
    onSubmitSuccess,
    payuUrl,
    noteRef,
  },
  ref
) => {
  const { checkout, payment, completeCheckout } = useCheckout();

  const [errors, setErrors] = useState<IFormError[]>([]);
  const [nip, setNip] = useState<string>("");

  const checkoutShippingAddress = checkout?.shippingAddress
    ? {
        ...checkout?.shippingAddress,
        phone: checkout?.shippingAddress?.phone || undefined,
      }
    : undefined;

  const checkoutBillingAddress = checkout?.billingAddress
    ? {
        ...checkout?.billingAddress,
        phone: checkout?.billingAddress?.phone || undefined,
      }
    : undefined;

  const getPaymentMethodDescription = () => {
    if (payment?.gateway === paymentGatewayNames.dummy) {
      return `Dummy: ${
        dummyStatuses.find(
          status => status.token === selectedPaymentGatewayToken
        )?.label
      }`;
    }
    if (payment?.gateway === paymentGatewayNames.adyen) {
      return `Adyen payments`;
    }
    if (payment?.gateway === "salingo.payments.cod") {
      return `Płatność przy odbiorze`;
    }
    if (payment?.gateway === "salingo.payments.payu") {
      return `Płatność PayU`;
    }
    return ``;
  };

  useImperativeHandle(ref, () => async () => {
    changeSubmitProgress(true);
    let data;
    let dataError;
    if (payment?.gateway === paymentGatewayNames.adyen) {
      paymentGatewayFormRef.current?.dispatchEvent(
        new Event("submitComplete", { cancelable: true })
      );
    } else if (payment?.gateway === paymentGatewayNames.stripe) {
      paymentGatewayFormRef.current?.dispatchEvent(
        new Event("submitComplete", { cancelable: true })
      );
    } else {
      const response = await completeCheckout();
      data = response.data;
      dataError = response.dataError;
      changeSubmitProgress(false);
      const errors = dataError?.error;
      if (errors) {
        setErrors(errors);
      } else {
        setErrors([]);
        onSubmitSuccess(CheckoutStep.Review, {
          id: data?.order?.id,
          orderStatus: data?.order?.status,
          orderNumber: data?.order?.number,
          token: data?.order?.token,
        });
        if (payment?.gateway === paymentGatewayNames.payu) {
          setTimeout(() => {
            window.open(payuUrl, "_blank", "noopener,noreferrer");
            // @ts-ignore
          }, 2000);
        }
      }
    }
  });

  useEffect(() => {
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        query: `
        query CheckoutMetadata($token: UUID!) {
          checkout(token: $token){
            shippingAddress{
              vatId
            }
          }
        }
        `,
        variables: {
          token: checkout?.token,
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(data =>
      data.json().then(json => {
        setNip(json.data.checkout.shippingAddress.vatId);
      })
    );
  }, []);

  return (
    <CheckoutReview
      shippingAddress={checkoutShippingAddress}
      billingAddress={checkoutBillingAddress}
      shippingMethodName={checkout?.shippingMethod?.name}
      paymentMethodName={getPaymentMethodDescription()}
      email={checkout?.email}
      errors={errors}
      noteRef={noteRef}
      nip={nip}
    />
  );
};

const CheckoutReviewSubpage = forwardRef(CheckoutReviewSubpageWithRef);

export { CheckoutReviewSubpage };
