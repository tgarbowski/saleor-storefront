import { storiesOf } from "@storybook/react";
import React from "react";

import { ProductDescription } from ".";
import { attributes, descriptionJSON } from "./fixtures";
import { ProductDetails } from "@saleor/sdk/lib/fragments/gqlTypes/ProductDetails";

const productDetails: ProductDetails = {
  __typename: "Product",
  id: "1",
  name: "Product 1",
  slug: "product-1",
  seoDescription: "Product 1 description",
  isAvailableForPurchase: true,
  availableForPurchase: "2023-06-30",
  seoTitle: "Product 1",
  thumbnail: null,
  thumbnail2x: null,
  pricing: null,
  description: "Product 1 description",
  category: null,
  images: null,
  attributes: [],
  variants: null,
  isAvailable: true,
  collections: null,
  sales: null,
};

storiesOf("@components/molecules/ProductDescription", module)
  .addParameters({ component: ProductDescription })
  .add("default", () => (
    <ProductDescription
      attributes={attributes}
      description={descriptionJSON}
      product={productDetails}
    />
  ));
