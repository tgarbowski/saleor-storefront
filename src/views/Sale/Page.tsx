import { SaleDetails } from "@saleor/sdk/lib/fragments/gqlTypes/SaleDetails";
import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import React, { useState } from "react";

import { FilterSidebar, ProductList } from "@components/organisms";
import { Attribute } from "@graphql/gqlTypes/Attribute";
import { IFilters } from "@types";
import { SortOptions } from "@utils/collections";

import { ProductListHeader } from "../../@next/components/molecules";
import { getActiveFilterAttributes } from "../Category/utils";

import "../Category/scss/index.scss";

export interface SaleData {
  details: SaleDetails;
  attributes: Attribute[];
}

interface PageProps {
  activeFilters: number;
  activeSortOption: string;
  sale: SaleData;
  displayLoader: boolean;
  filters: IFilters;
  hasNextPage: boolean;
  numberOfProducts: number;
  products: ProductList_products_edges_node[];
  sortOptions: SortOptions;
  clearFilters: () => void;
  onLoadMore: () => void;
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onOrder: (order: { value?: string; label: string }) => void;
}

export const Page: React.FC<PageProps> = ({
  activeFilters,
  activeSortOption,
  sale: { details, attributes },
  displayLoader,
  hasNextPage,
  clearFilters,
  onLoadMore,
  products,
  filters,
  onOrder,
  numberOfProducts,
  sortOptions,
  onAttributeFiltersChange,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="sale">
      <div className="container">
        <FilterSidebar
          show={showFilters}
          hide={() => setShowFilters(false)}
          onAttributeFiltersChange={onAttributeFiltersChange}
          attributes={attributes}
          filters={filters}
        />
        <ProductListHeader
          activeSortOption={activeSortOption}
          openFiltersMenu={() => setShowFilters(true)}
          numberOfProducts={numberOfProducts}
          activeFilters={activeFilters}
          activeFiltersAttributes={getActiveFilterAttributes(
            filters?.attributes,
            attributes
          )}
          clearFilters={clearFilters}
          sortOptions={sortOptions}
          onChange={onOrder}
          onCloseFilterAttribute={onAttributeFiltersChange}
        />
        <ProductList
          products={products}
          canLoadMore={hasNextPage}
          loading={displayLoader}
          onLoadMore={onLoadMore}
        />
      </div>
    </div>
  );
};
