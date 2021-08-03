import gql from "graphql-tag";

export const generatePaymentUrl = gql`
  mutation generatePaymentUrl($paymentId: ID!) {
    generatePaymentUrl(
      gateway: "mirumee.payments.payu"
      paymentId: $paymentId
    ) {
      paymentUrl
    }
  }
`;
