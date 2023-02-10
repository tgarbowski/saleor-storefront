import { useCheckout } from "@saleor/sdk";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";

import { ErrorMessage, Radio } from "@components/atoms";
import { PROVIDERS } from "@temp/core/config";
import { commonMessages } from "@temp/intl";

import { AdyenPaymentGateway, StripePaymentGateway } from "..";
import { CodPaymentGateway } from "../CodPaymentGateway";
import { PayuPaymentGateway } from "../PayuPaymentGateway";
import * as S from "./styles";
import { IProps } from "./types";

/**
 * Payment Gateways list
 */
const PaymentGatewaysList: React.FC<IProps> = ({
  paymentGateways,
  selectedPaymentGateway,
  selectedPaymentGatewayToken,
  selectPaymentGateway,
  formRef,
  formId,
  processPayment,
  submitPayment,
  submitPaymentSuccess,
  errors,
  onError,
}: IProps) => {
  const { checkout } = useCheckout();

  useEffect(() => {
    if (
      checkout?.shippingMethod?.name === "Kurier pobranie, GLS" ||
      checkout?.shippingMethod?.name === "Odbiór osobisty"
    ) {
      selectPaymentGateway("salingo.payments.cod");
      selectedPaymentGateway = "salingo.payments.cod";
    } else {
      selectPaymentGateway("salingo.payments.payu");
      selectedPaymentGateway = "salingo.payments.payu";
    }
  }, [checkout?.shippingMethod?.name]);

  return (
    <S.Wrapper>
      {paymentGateways.map(({ id, name, config }, index) => {
        const checked = selectedPaymentGateway === id;

        if (
          checkout?.shippingMethod?.name === "Kurier pobranie, GLS" ||
          checkout?.shippingMethod?.name === "Odbiór osobisty"
        ) {
          switch (name) {
            case PROVIDERS.COD.label:
              return (
                <div key={index}>
                  <S.Tile checked={checked}>
                    <Radio
                      data-test="checkoutPaymentGatewayCodInput"
                      name="payment-method"
                      value="cod"
                      checked={checked}
                      onChange={() =>
                        selectPaymentGateway && selectPaymentGateway(id)
                      }
                      customLabel
                    >
                      <span data-test="checkoutPaymentGatewayCodName">
                        <FormattedMessage {...commonMessages.cod} />
                      </span>
                    </Radio>
                  </S.Tile>
                  {checked && (
                    <CodPaymentGateway
                      formRef={formRef}
                      formId={formId}
                      processPayment={token => processPayment(id, token)}
                      initialStatus={selectedPaymentGatewayToken}
                    />
                  )}
                </div>
              );
            default:
              return null;
          }
        } else {
          switch (name) {
            case PROVIDERS.STRIPE.label:
              return (
                <div key={index}>
                  <S.Tile checked={checked}>
                    <Radio
                      data-test="checkoutPaymentGatewayStripeInput"
                      name="payment-method"
                      value="stripe"
                      checked={checked}
                      onChange={() =>
                        selectPaymentGateway && selectPaymentGateway(id)
                      }
                      customLabel
                    >
                      <span data-test="checkoutPaymentGatewayStripeName">
                        {name}
                      </span>
                    </Radio>
                  </S.Tile>
                  {checked && (
                    <StripePaymentGateway
                      config={config}
                      formRef={formRef}
                      formId={formId}
                      processPayment={(token, cardData) =>
                        processPayment(id, token, cardData)
                      }
                      submitPayment={submitPayment}
                      submitPaymentSuccess={submitPaymentSuccess}
                      errors={errors}
                      onError={onError}
                    />
                  )}
                </div>
              );

            case PROVIDERS.ADYEN.label:
              return (
                <div key={index}>
                  <S.Tile checked={checked}>
                    <Radio
                      data-test="checkoutPaymentGatewayAdyenInput"
                      name="payment-method"
                      value="adyen"
                      checked={checked}
                      onChange={() =>
                        selectPaymentGateway && selectPaymentGateway(id)
                      }
                      customLabel
                    >
                      <span data-test="checkoutPaymentGatewayAdyenName">
                        {name}
                      </span>
                    </Radio>
                  </S.Tile>
                  {checked && (
                    <AdyenPaymentGateway
                      config={config}
                      formRef={formRef}
                      scriptConfig={PROVIDERS.ADYEN.script}
                      styleConfig={PROVIDERS.ADYEN.style}
                      processPayment={() => processPayment(id)}
                      submitPayment={submitPayment}
                      submitPaymentSuccess={submitPaymentSuccess}
                      errors={errors}
                      onError={onError}
                    />
                  )}
                </div>
              );

            case PROVIDERS.PAYU.label:
              return (
                <div key={index}>
                  <S.Tile checked={checked}>
                    <Radio
                      data-test="checkoutPaymentGatewayPayUInput"
                      name="payment-method"
                      value="payU"
                      checked={checked}
                      onChange={() =>
                        selectPaymentGateway && selectPaymentGateway(id)
                      }
                      customLabel
                    >
                      <span data-test="checkoutPaymentGatewayPayUName">
                        {name}
                      </span>
                    </Radio>
                  </S.Tile>
                  {checked && (
                    <PayuPaymentGateway
                      config={config}
                      formRef={formRef}
                      scriptConfig={PROVIDERS.ADYEN.script}
                      styleConfig={PROVIDERS.ADYEN.style}
                      processPayment={() => processPayment(id)}
                      submitPayment={submitPayment}
                      submitPaymentSuccess={submitPaymentSuccess}
                      errors={errors}
                      onError={onError}
                    />
                  )}
                </div>
              );
            default:
              return null;
          }
        }
      })}
      {!selectedPaymentGateway && errors && <ErrorMessage errors={errors} />}
    </S.Wrapper>
  );
};

export { PaymentGatewaysList };
