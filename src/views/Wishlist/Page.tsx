import { BaseCategory } from "@saleor/sdk/lib/fragments/gqlTypes/BaseCategory";
import { CategoryDetails } from "@saleor/sdk/lib/fragments/gqlTypes/CategoryDetails";
import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { ProductList } from "@components/organisms";
import { WishlistEmpty } from "@components/templates";
import { Attribute } from "@graphql/gqlTypes/Attribute";
import { FeaturedProducts } from "@utils/ssr";

import "./scss/index.scss";

export interface CategoryData {
  details: CategoryDetails;
  ancestors: BaseCategory[];
  attributes: Attribute[];
  featuredProducts: FeaturedProducts;
}

interface PageProps {
  displayLoader: boolean;
  hasNextPage: boolean;
  products: ProductList_products_edges_node[];
  onLoadMore: () => void;
}

export const Page: React.FC<PageProps> = ({
  products,
  displayLoader,
  hasNextPage,
  onLoadMore,
}) => {
  const hasProducts = products.length > 0;

  return (
    <div className="wishlist-content">
      <div className="container wishlist-wrapper">
        <div className="content">
          {!displayLoader && !hasProducts ? (
            <WishlistEmpty />
          ) : (
            <div className="wishlist-products-wrapper">
              <h1
                data-test="wishlistPageTitle"
                className="wishlist-products-wrapper-title"
              >
                <FormattedMessage defaultMessage="Twoja lista życzeń" />
              </h1>
              <ProductList
                products={products}
                canLoadMore={hasNextPage}
                loading={displayLoader}
                onLoadMore={onLoadMore}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
