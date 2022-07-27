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
  const [oldProductsData, setOldProductsData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wasSkipped, setWasSkipped] = useState(true);

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
      if (
        productsJson.categoryId === category?.id &&
        productsJson.locationHref === window.location.href
      ) {
        return productsJson.products;
      }
    }
    return null;
  };

  const { data, loadMore, loading } = useProductsQuery(
    filters,
    {
      categoryId: category?.id,
    },
    !!(!isLoaded || wasSkipped),
    oldProductsData?.pageInfo?.endCursor || null
  );
  const [products, pageInfo, numberOfProducts] = useMemo(
    () => [
      data?.products?.edges.map(e => e.node) || [],
      data?.products?.pageInfo,
      data?.products?.totalCount || 0,
    ],
    [data]
  );

  useEffect(() => {
    setOldProductsData(getLocalStorageProducts());
    setIsLoaded(true);
  }, []);
  useEffect(() => {
    if (isLoaded && !oldProductsData?.edges?.length) {
      setWasSkipped(false);
    }
  }, [isLoaded, oldProductsData]);
  useEffect(() => {
    if (!loading && data) {
      if (oldProductsData?.edges?.length) {
        const productsData = JSON.stringify({
          products: {
            edges: [...oldProductsData?.edges, ...data?.products.edges],
            pageInfo: data.products.pageInfo,
          },
          categoryId: category?.id,
          locationHref: window.location.href,
        });
        localStorage.setItem("product_data", productsData);
      } else {
        const productsData = JSON.stringify({
          products: data?.products,
          categoryId: category?.id,
          locationHref: window.location.href,
        });
        localStorage.setItem("product_data", productsData);
      }
    }
  }, [loading, data]);

  const handleClearFilters = () => {
    setAttributeFilters({});
    setOldProductsData(null);
  };

  const handleFiltersChange = filtersChangeHandler(
    filters,
    attributeFilters,
    setAttributeFilters,
    setOldProductsData
  );

  const handleOrderChange = (value: { value?: string; label: string }) => {
    setSort(value.value);
    setOldProductsData(null);
  };

  const handleLoadMore = () => {
    if (
      wasSkipped &&
      oldProductsData?.edges?.length &&
      !pageInfo?.hasNextPage
    ) {
      setWasSkipped(false);
    } else {
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
    }
  };
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
              {oldProductsData?.edges?.length ? (
                <Page
                  clearFilters={handleClearFilters}
                  category={category}
                  products={[
                    ...oldProductsData.edges.map(e => e.node),
                    ...products,
                  ]}
                  displayLoader={loading}
                  hasNextPage={
                    !!pageInfo?.hasNextPage ||
                    (oldProductsData?.pageInfo?.hasNextPage && wasSkipped)
                  }
                  numberOfProducts={numberOfProducts}
                  activeSortOption={filters.sortBy}
                  filters={filters}
                  onAttributeFiltersChange={handleFiltersChange}
                  onLoadMore={handleLoadMore}
                  activeFilters={Object.keys(filters?.attributes || {}).length}
                  onOrder={handleOrderChange}
                />
              ) : (
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
              )}
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
