import React, { useMemo } from "react";

import { IWishlistFilters } from "@types";

import { MetaWrapper } from "../../components";
import { Page } from "./Page";
import { useWishlistQuery } from "./queries";

export const WishlistView: React.FC = () => {
  const wishlistData = localStorage.getItem("data_wishlist");
  const wishlist = wishlistData ? JSON.parse(wishlistData)?.lines : null;

  const ids = !wishlist?.length ? [""] : wishlist;
  const filters: IWishlistFilters = {
    ids,
  };

  const { data, loadMore, loading } = useWishlistQuery(filters);
  const [products, pageInfo] = useMemo(
    () => [
      data?.products?.edges.map(e => e.node) || [],
      data?.products?.pageInfo,
    ],
    [data]
  );

  const handleLoadMore = () =>
    loadMore(
      (prev, next) => ({
        products: {
          ...prev.products,
          edges: [...prev.products.edges, ...next.products.edges],
          pageInfo: next.products.pageInfo,
        },
      }),
      pageInfo.endCursor
    );

  return (
    <MetaWrapper
      meta={{
        title: "Lista życzeń",
        type: "product.wishlist",
      }}
    >
      <Page
        products={products}
        displayLoader={loading}
        hasNextPage={!!pageInfo?.hasNextPage}
        onLoadMore={handleLoadMore}
      />
    </MetaWrapper>
  );
};
