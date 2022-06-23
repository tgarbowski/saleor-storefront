import gql from "graphql-tag";

import { TypedQuery } from "../../../core/queries";
import { PaymentUrl, ProductUrlVariables } from "./gqlTypes/paymentUrl";

export const generatePaymentUrl = gql`
  query generatePaymentUrl($paymentId: ID!) {
    generatePaymentUrl(paymentId: $paymentId) {
      paymentUrl
    }
  }
`;

export const PayuRedirectUrl = `
  query generatePaymentUrl($paymentId: ID!, $channel: String!) {
    generatePaymentUrl(paymentId: $paymentId, channel: $channel) {
      paymentUrl
    }
  }`;

export const TypedGeneratePaymentUrl = TypedQuery<
  PaymentUrl,
  ProductUrlVariables
>(generatePaymentUrl);