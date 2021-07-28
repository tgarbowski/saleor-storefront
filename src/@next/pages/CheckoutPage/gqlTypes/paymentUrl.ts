export interface PaymentUrl_GeneratePaymentUrl{
  paymentUrl: string;
}


export interface PaymentUrl{
  generatePaymentUrl: PaymentUrl_GeneratePaymentUrl;
}


export interface ProductUrlVariables {
    checkoutId: string | undefined;
  }