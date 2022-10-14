import { NextPage } from "next";
import * as React from "react";
import { useEffect, useState } from "react";
import { StringParam, useQueryParam } from "use-query-params";

import { OfflinePlaceholder } from "@components/atoms";
import { IFilters } from "@types";
import { FilterQuerySet, SORT_OPTIONS } from "@utils/collections";

import { MetaWrapper, NotFound } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { PRODUCTS_PER_PAGE } from "../../core/config";
import { useProductsQuery } from "../Category/queries";
import { filtersChangeHandler } from "../Category/utils";
import { Page, SaleData } from "./Page";

export type SaleViewProps = {
  params: { id: string } | undefined;
  data: ({ id: string } & SaleData) | undefined | null;
};

export const SaleView: NextPage<SaleViewProps> = ({ data: sale }) => {
  const [sort, setSort] = useQueryParam("sortBy", StringParam);
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
        productsJson.saleId === sale?.id &&
        productsJson.locationHref === window.location.href
      ) {
        return {
          products: productsJson.products,
          locationHref: productsJson.locationHref,
        };
      }
    }
    return null;
  };

  const { data, loadMore, loading } = useProductsQuery(
    filters,
    {
      saleId: sale?.id,
    },
    !!(!isLoaded || wasSkipped),
    oldProductsData?.products?.pageInfo?.endCursor || null
  );
  const [products, pageInfo, numberOfProducts] = React.useMemo(
    () => [
      data?.products?.edges.map(e => e.node) || [],
      data?.products?.pageInfo,
      data?.products?.totalCount || 0,
    ],
    [data]
  );

  useEffect(() => {
    if (oldProductsData) {
      if (oldProductsData?.locationHref !== window.location.href) {
        setOldProductsData(null);
        setWasSkipped(false);
        setIsLoaded(true);
      }
    }
  });

  useEffect(() => {
    setOldProductsData(getLocalStorageProducts());
    setIsLoaded(true);
  }, []);
  useEffect(() => {
    if (isLoaded && !oldProductsData?.products?.edges?.length) {
      setWasSkipped(false);
    }
  }, [isLoaded, oldProductsData]);
  useEffect(() => {
    if (!loading && data) {
      if (oldProductsData?.products?.edges?.length) {
        const productsData = JSON.stringify({
          products: {
            edges: [
              ...oldProductsData?.products?.edges,
              ...data?.products.edges,
            ],
            pageInfo: data.products.pageInfo,
          },
          saleId: sale?.id,
          locationHref: window.location.href,
        });
        localStorage.setItem("product_data", productsData);
      } else {
        const productsData = JSON.stringify({
          products: data?.products,
          saleId: sale?.id,
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
      oldProductsData?.products?.edges?.length &&
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
          sale ? (
            <MetaWrapper
              meta={{
                type: "product.sale",
              }}
            >
              {oldProductsData?.products?.edges?.length ? (
                <Page
                  numberOfProducts={numberOfProducts}
                  clearFilters={handleClearFilters}
                  sale={sale}
                  displayLoader={loading}
                  hasNextPage={
                    !!pageInfo?.hasNextPage ||
                    (oldProductsData?.products?.pageInfo?.hasNextPage &&
                      wasSkipped)
                  }
                  sortOptions={SORT_OPTIONS}
                  activeSortOption={filters.sortBy}
                  filters={filters}
                  products={[
                    ...oldProductsData.products?.edges.map(e => e.node),
                    ...products,
                  ]}
                  onAttributeFiltersChange={handleFiltersChange}
                  onLoadMore={handleLoadMore}
                  activeFilters={Object.keys(filters?.attributes || {}).length}
                  onOrder={handleOrderChange}
                />
              ) : (
                <Page
                  numberOfProducts={numberOfProducts}
                  clearFilters={handleClearFilters}
                  sale={sale}
                  displayLoader={loading}
                  hasNextPage={!!pageInfo?.hasNextPage}
                  sortOptions={SORT_OPTIONS}
                  activeSortOption={filters.sortBy}
                  filters={filters}
                  products={products}
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
