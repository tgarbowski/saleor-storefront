import React, { useMemo } from "react";

import { IWishlistFilters } from "@types";

import { MetaWrapper } from "../../components";
import { Page } from "./Page";
import { useWishlistQuery } from "./queries";

export const WishlistView: React.FC = () => {
  const wishlist = JSON.parse(localStorage.getItem("data_wishlist"));
  const filters: IWishlistFilters = {
    ids: wishlist.lines,
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
        description: "TESTdescription",
        title: "TEST",
        type: "product.category",
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
