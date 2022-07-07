import { ProductDetails } from "@saleor/sdk/lib/fragments/gqlTypes/ProductDetails";
import { ICheckoutModelLine, IPricingModel } from "@saleor/sdk/lib/helpers";

export interface IProps {
  product: ProductDetails;
  add: (variantId: string, quantity: number) => any;
  addToWishlist: (
    variantId: string,
    slug: string,
    thumbnail: string,
    thumbnail2x: string,
    pricing: IPricingModel
  ) => any;
  items: ICheckoutModelLine[];
  wishlist: string[];
}
