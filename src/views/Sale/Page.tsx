import { SaleDetails } from "@saleor/sdk/lib/fragments/gqlTypes/SaleDetails";
import {
  ProductList_products_edges,
  ProductList_products_edges_node,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import Link from "next/link";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "@components/atoms";
import { FilterSidebar, ProductList } from "@components/organisms";
import { Attribute } from "@graphql/gqlTypes/Attribute";
import { paths } from "@paths";
import { IFilters } from "@types";
import { SortOptions } from "@utils/collections";

import { ProductListHeader } from "../../@next/components/molecules";
import { getActiveFilterAttributes } from "../Category/utils";

import "./scss/index.scss";

export interface SaleData {
  details: SaleDetails;
  attributes: Attribute[];
  products: ProductList_products_edges[];
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
  sale,
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
          attributes={sale?.attributes}
          filters={filters}
        />
        <ProductListHeader
          activeSortOption={activeSortOption}
          openFiltersMenu={() => setShowFilters(true)}
          numberOfProducts={numberOfProducts}
          activeFilters={activeFilters}
          activeFiltersAttributes={getActiveFilterAttributes(
            filters?.attributes,
            sale?.attributes
          )}
          clearFilters={clearFilters}
          sortOptions={sortOptions}
          onChange={onOrder}
          onCloseFilterAttribute={onAttributeFiltersChange}
        />

        {products?.length < 1 ? (
          <div className="notfound-products">
            <h3 className="NotFoundProductsTitle">
              Przepraszamy, ale nie znalezliśmy produktów w tej wyprzedaży.
            </h3>
            <Link href={paths.home}>
              <a>
                <Button testingContext="promoButton">
                  <FormattedMessage defaultMessage="Sprawdź inne wyprzedaże" />
                </Button>
              </a>
            </Link>
          </div>
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
