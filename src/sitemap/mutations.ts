import gql from "graphql-tag";

export const generatePaymentUrl = gql`
  mutation generatePaymentUrl($paymentId: ID!) {
    generatePaymentUrl(
      gateway: "salingo.payments.payu"
      paymentId: $paymentId
    ) {
      paymentUrl
    }
  }
`;
