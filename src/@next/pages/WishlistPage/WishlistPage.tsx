import { IWishlistModelLine } from "@saleor/sdk/lib/helpers";
import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import { ProductList } from "@components/organisms";

interface PageProps {
  hasNextPage: boolean;
  products: ProductList_products_edges_node[];
  numberOfProducts: number;
  onLoadMore: () => void;
  wishlist: IWishlistModelLine[];
  removeItem: (variantId: string) => any;
  displayLoader: boolean;
}

export const WishlistPage: React.FC<PageProps> = ({
  hasNextPage,
  products,
  numberOfProducts,
  wishlist,
  removeItem,
  onLoadMore,
  displayLoader,
}) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const hasProducts = wishlist?.length > 0;

  useEffect(() => {
    const wishlistItems = JSON.parse(
      localStorage.getItem("data_wishlist") || "{}"
    );
    if (wishlistItems) {
      setWishlistItems(wishlistItems);
    }
    console.log(wishlistItems);
  }, []);

  return (
    <div className="wishlist">
      <h1 data-test="wishlistPageTitle">
        <FormattedMessage defaultMessage="Twoja lista życzeń" />
      </h1>
      <div className="container">
        {!displayLoader && !hasProducts ? (
          <h3 className="NotFoundProductsTitle">
            Twoja lista życzeń jest pusta
          </h3>
        ) : (
          <ProductList
            products={products}
            canLoadMore={hasNextPage}
            loading={displayLoader}
            onLoadMore={onLoadMore}
          />
        )}
      </div>
    </div>
  );
};
