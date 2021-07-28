import gql from "graphql-tag";

export const generatePaymentUrl = gql`
  mutation generatePaymentUrl($checkoutId: ID!) {
    generatePaymentUrl(
      gateway: "mirumee.payments.payu"
      checkoutId: $checkoutId
    ) {
      paymentUrl
    }
  }
`;
