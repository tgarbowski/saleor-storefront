import { SaleDetails } from "@saleor/sdk/lib/fragments/gqlTypes/SaleDetails";
import { ProductList_products_edges_node } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import "../Category/scss/index.scss";

export interface SaleData {
  details: SaleDetails;
}

interface PageProps {
  sale: SaleData;
  products: ProductList_products_edges_node[];
}

export const Page: React.FC<PageProps> = ({ sale: { details }, products }) => {
  const hasProducts = products.length > 0;
  const [showFilters, setShowFilters] = useState(false);
  const intl = useIntl();

  return (
    <div className="collection">
      <div className="container">{products}</div>
    </div>
  );
};
