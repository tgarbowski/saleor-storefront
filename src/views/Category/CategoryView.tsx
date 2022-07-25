import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import { StringParam, useQueryParam } from "use-query-params";

import { OfflinePlaceholder } from "@components/atoms";
import { IFilters } from "@types";
import { FilterQuerySet } from "@utils/collections";

import { MetaWrapper, NotFound } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { PRODUCTS_PER_PAGE } from "../../core/config";
import { CategoryData, Page } from "./Page";
import { useProductsQuery } from "./queries";
import { filtersChangeHandler } from "./utils";

export type CategoryViewProps = {
  params: { slug: string } | undefined;
  data: ({ id: string } & CategoryData) | undefined | null;
};

export const CategoryView: NextPage<CategoryViewProps> = ({
  data: category,
}) => {
  const [sort = "-updated_at", setSort] = useQueryParam("sortBy", StringParam);
  const [attributeFilters, setAttributeFilters] = useQueryParam(
    "filters",
    FilterQuerySet
  );

  const filters: IFilters = {
    attributes: attributeFilters,
    pageSize: PRODUCTS_PER_PAGE,
    priceGte: null,
    priceLte: null,
    sortBy: sort || null,
  };

  const getLocalStorageProducts = () => {
    const productsData = localStorage.getItem("product_data");
    if (productsData) {
      const productsJson = JSON.parse(productsData);
      if (productsJson.categoryId === category?.id) {
        return productsJson.products;
      }
    }
    return null;
  };

  const [oldProductsData, setOldProductsData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setOldProductsData(getLocalStorageProducts());
    setIsLoaded(true);
  }, []);

  const { data, loadMore, loading } = useProductsQuery(
    filters,
    {
      categoryId: category?.id,
    },
    !isLoaded,
    oldProductsData?.pageInfo?.endCursor
  );
  const [products, pageInfo, numberOfProducts] =
    isLoaded &&
    useMemo(
      () =>
        oldProductsData?.categoryId === category.id
          ? [
              oldProductsData?.edges
                ? [
                    ...oldProductsData?.edges?.map(e => e.node),
                    ...data?.products?.edges.map(e => e.node),
                  ]
                : data?.products?.edges.map(e => e.node) || [],
              data?.products?.pageInfo,
              data?.products?.totalCount || 0,
            ]
          : [
              data?.products?.edges.map(e => e.node) || [],
              data?.products?.pageInfo,
              data?.products?.totalCount || 0,
            ],
      [data]
    );

  useEffect(() => {
    if (!loading && data) {
      const productsData = JSON.stringify({
        products: data?.products,
        categoryId: category?.id,
      });
      localStorage.setItem("product_data", productsData);
    }
  }, [loading, data]);

  const handleClearFilters = () => setAttributeFilters({});

  const handleFiltersChange = filtersChangeHandler(
    filters,
    attributeFilters,
    setAttributeFilters
  );

  const handleOrderChange = (value: { value?: string; label: string }) =>
    setSort(value.value);

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
    <NetworkStatus>
      {isOnline =>
        isOnline ? (
          category ? (
            <MetaWrapper
              meta={{
                description: category.details.seoDescription,
                title: category.details.seoTitle,
                type: "product.category",
              }}
            >
              <Page
                clearFilters={handleClearFilters}
                category={category}
                products={products}
                displayLoader={loading}
                hasNextPage={!!pageInfo?.hasNextPage}
                numberOfProducts={numberOfProducts}
                activeSortOption={filters.sortBy}
                filters={filters}
                onAttributeFiltersChange={handleFiltersChange}
                onLoadMore={handleLoadMore}
                activeFilters={Object.keys(filters?.attributes || {}).length}
                onOrder={handleOrderChange}
              />
            </MetaWrapper>
          ) : (
            <NotFound />
          )
        ) : (
          <OfflinePlaceholder />
        )
      }
    </NetworkStatus>
  );
};
