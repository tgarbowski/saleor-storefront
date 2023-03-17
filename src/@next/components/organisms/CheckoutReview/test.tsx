import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";

import { CheckoutReview } from ".";

describe("<CheckoutReview />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <CheckoutReview
        // eslint-disable-next-line react/jsx-no-bind, func-names
        handleTermsChange={function (terms: boolean): void {
          throw new Error("Function not implemented.");
        }}
        pages={undefined}
      />
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
