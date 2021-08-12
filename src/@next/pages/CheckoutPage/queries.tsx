import gql from "graphql-tag";
import { TypedQuery } from "../../../core/queries";
import { PaymentUrl, ProductUrlVariables } from "./gqlTypes/paymentUrl";

const generatePaymentUrl = gql`
  query generatePaymentUrl($paymentId: ID!) {
    generatePaymentUrl(paymentId: $paymentId) {
      paymentUrl
    }
  }
`;

export const TypedGeneratePaymentUrl = TypedQuery<
  PaymentUrl,
  ProductUrlVariables
>(generatePaymentUrl);
