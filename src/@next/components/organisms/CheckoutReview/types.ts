import { IAddress, IFormError } from "@types";

export interface IProps {
  shippingAddress?: IAddress | null;
  billingAddress?: IAddress | null;
  shippingMethodName?: string;
  paymentMethodName?: string;
  customerNote?: string;
  email?: string;
  errors?: IFormError[];
  noteRef?: any;
  nip?: string;
  isTermsAccepted?: boolean;
  handleTermsChange: (terms: boolean) => void;
  pages: any;
}
