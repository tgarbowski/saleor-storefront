import "jest-styled-components";

import { ProductDetails } from "@saleor/sdk/lib/fragments/gqlTypes/ProductDetails";
import { mount, shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@styles";

import { ProductDescription } from ".";
import { attributes, descriptionJSON } from "./fixtures";
import * as S from "./styles";

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

describe("<ProductDescription />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <ProductDescription
        attributes={attributes}
        description={descriptionJSON}
        product={productDetails}
      />
    );

    expect(wrapper.exists()).toEqual(true);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <ProductDescription
            attributes={attributes}
            description={descriptionJSON}
            product={productDetails}
          />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show product attributes when clicking on attributes tab", () => {
    const wrapper = mount(
      <ProductDescription
        attributes={attributes}
        description={descriptionJSON}
        product={productDetails}
      />
    );

    wrapper.find(S.TabTitle).at(1).simulate("click");

    attributes.forEach(attribute =>
      expect(wrapper.text()).toContain(attribute.attribute.name)
    );
  });
});
