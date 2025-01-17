import * as React from "react";
import { FormattedMessage } from "react-intl";

import { ProductList } from "@components/organisms";

import { ProductDetails_product_category_products_edges } from "./gqlTypes/ProductDetails";

const OtherProducts: React.FC<{
  products: ProductDetails_product_category_products_edges[];
}> = ({ products }) => (
  <div className="product-page__other-products">
    <div className="container">
      <h4 className="product-page__other-products__title">
        <FormattedMessage defaultMessage="Inne produkty w tej kategorii" />
      </h4>
      <ProductList products={products.map(({ node }) => node)} />
    </div>
  </div>
);

export default OtherProducts;
