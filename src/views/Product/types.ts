import { ProductDetails } from "@saleor/sdk/lib/fragments/gqlTypes/ProductDetails";
import { ICheckoutModelLine } from "@saleor/sdk/lib/helpers";

import { IWishlistModelLine } from "@components/organisms/WishlistSidebar/WishlistSidebar";

export interface IProps {
  product: ProductDetails;
  add: (variantId: string, quantity: number) => any;
  addToWishlist: (variantId: string) => any;
  items: ICheckoutModelLine[];
  itemsWishlist: IWishlistModelLine[],
}
