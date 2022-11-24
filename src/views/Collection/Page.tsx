import { CollectionDetails } from "@saleor/sdk/lib/fragments/gqlTypes/CollectionDetails";
import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import Link from "next/link";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import { FilterSidebar, ProductList } from "@components/organisms";
import { Attribute } from "@graphql/gqlTypes/Attribute";
import { paths } from "@paths";
import { IFilters } from "@types";
import { SortOptions } from "@utils/collections";
import { FeaturedProducts } from "@utils/ssr";

import { ProductListHeader } from "../../@next/components/molecules";
import { Breadcrumbs, Button, extractBreadcrumbs } from "../../components";
import { getActiveFilterAttributes } from "../Category/utils";

import "./scss/index.scss";

export interface CollectionData {
  details: CollectionDetails;
  attributes: Attribute[];
  featuredProducts: FeaturedProducts;
}

interface PageProps {
  activeFilters: number;
  activeSortOption: string;
  collection: CollectionData;
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
  collection: { details, attributes, featuredProducts },
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

  const hasProducts = products.length < 1;

  return (
    <div className="collection">
      <div className="container">
        <Breadcrumbs breadcrumbs={extractBreadcrumbs(details)} />
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

        {!displayLoader && hasProducts ? (
          <div className="notfound-products">
            <h3 className="NotFoundProductsTitle">
              Przepraszamy, ale nie znalezliśmy produktów w tej kolekcji.
            </h3>
            <Link href={paths.home}>
              <a>
                <Button testingContext="promoButton" aria-label="promoButton">
                  <FormattedMessage defaultMessage="Sprawdź inne kolekcje" />
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
