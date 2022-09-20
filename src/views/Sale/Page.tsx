import { SaleDetails } from "@saleor/sdk/lib/fragments/gqlTypes/SaleDetails";
import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";

import { FilterSidebar, ProductList } from "@components/organisms";
import { Attribute } from "@graphql/gqlTypes/Attribute";
import { commonMessages } from "@temp/intl";
import { IFilters } from "@types";
import { SortOptions } from "@utils/collections";
import { FeaturedProducts } from "@utils/ssr";

import { ProductListHeader } from "../../@next/components/molecules";
import {
  Breadcrumbs,
  extractBreadcrumbs,
  ProductsFeatured,
} from "../../components";
import { getActiveFilterAttributes } from "../Category/utils";

import "../Category/scss/index.scss";
import { apiUrl } from "@temp/constants";

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
  const hasProducts = products.length > 0;
  const [showFilters, setShowFilters] = useState(false);
  const intl = useIntl();

  // useEffect(() => {
  //   fetch(apiUrl, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       query: `
  //       query{
  //         sales(first:20){
  //           edges{
  //             node{
  //               id
  //               name
  //               startDate
  //               endDate
  //               discountValue
  //               products(first:10){
  //                 edges{
  //                   node{
  //                     id
  //                     name
  //                     sku
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //       `,
  //     }),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }).then(data =>
  //     data.json().then(data => {
  //       console.log(data);
  //     })
  //   );
  // }, []);

  // useEffect(() => {
  //   fetch(apiUrl, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       query: `
  //       query{
  //         sales(first:20){
  //           edges{
  //             node{
  //               id
  //               name
  //               startDate
  //               endDate
  //               discountValue
  //               products(first:10){
  //                 edges{
  //                   node{
  //                     id
  //                     name
  //                     sku
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //       `,
  //     }),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }).then(data =>
  //     data.json().then(data => {
  //       console.log(data);
  //     })
  //   );
  // }, []);

  return (
    <div className="sale">
      <div className="container">
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
