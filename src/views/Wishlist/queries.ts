import {
  ProductList,
  ProductListVariables,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import { productList } from "@saleor/sdk/lib/queries/products";

import { useTypedQuery } from "@graphql";
import { channelSlug } from "@temp/constants";
import { PRODUCTS_PER_PAGE } from "@temp/core/config";
import { IWishlistFilters } from "@types";

export const useWishlistQuery = (filters: IWishlistFilters) => {
  const variables: ProductListVariables = {
    filter: {
      ids: filters.ids,
    },
    channel: channelSlug,
    first: PRODUCTS_PER_PAGE,
  };

  return useTypedQuery<ProductList, ProductListVariables>(productList, {
    variables,
    fetchPolicy: "cache-and-network",
  });
};
