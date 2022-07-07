import { IPricingModel, IWishlistModelLine } from "@saleor/sdk/lib/helpers";
import { ProductDetails } from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";

import { IProduct } from "@types";

export interface IProps {
  products: IProduct[];
  canLoadMore?: boolean;
  loading?: boolean;
  onLoadMore?: () => void;
  /**
   * Used as marker for writing e2e tests. Use unique ID to differentiate
   * multiple elements in the same view from each other
   */
  testingContextId?: string;
}
