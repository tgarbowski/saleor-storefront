import "jest-styled-components";

import { shallow } from "enzyme";
import React from "react";

import { IFilterAttribute } from "@types";

import { FilterSidebar } from ".";
import { DEFAULT_PROPS } from "./testData";

const hide = jest.fn();
const onAttributeFiltersChange = jest.fn();
describe("<FilterSidebar />", () => {
  it("exists", () => {
    const wrapper = shallow(
      <FilterSidebar
      name="" values={[]} onValueClick={(value: IFilterAttribute): void => {
        throw new Error("Function not implemented.");
      } } {...DEFAULT_PROPS}
      hide={hide}
      onAttributeFiltersChange={onAttributeFiltersChange}      />
    );

    expect(wrapper.exists()).toEqual(true);
  });
});
