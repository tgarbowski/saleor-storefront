import gql from "graphql-tag";
import { TypedQuery } from "../../../core/queries";
import { PaymentUrl, ProductUrlVariables } from "./gqlTypes/paymentUrl";

const generatePaymentUrl = gql`
  query generatePaymentUrl($checkoutId: ID!) {
    generatePaymentUrl(checkoutId: $checkoutId) {
      paymentUrl
    }
  }
`;

export const TypedGeneratePaymentUrl = TypedQuery<
  PaymentUrl,
  ProductUrlVariables
>(generatePaymentUrl);
