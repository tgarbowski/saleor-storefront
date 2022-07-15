import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";

import { WishlistEmpty } from ".";

describe("<WishlistEmpty />", () => {
  it("exists", () => {
    const wrapper = shallow(<WishlistEmpty />);

    expect(wrapper.exists()).toEqual(true);
  });
});
