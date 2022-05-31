import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { IFilterAttribute } from "@types";

import { FilterSidebar } from ".";
import { DEFAULT_PROPS } from "./testData";

let portalRoot = document.getElementById("portal-root");
if (!portalRoot) {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal-root");
  document.body.appendChild(portalRoot);
}

storiesOf("@components/organisms/FilterSidebar", module)
  .addParameters({ component: FilterSidebar })
  .add("default", () => (
    <FilterSidebar
      name="" values={[]} onValueClick={(value: IFilterAttribute): void  => {
        throw new Error("Function not implemented.");
      } } target={portalRoot}
      {...DEFAULT_PROPS}
      hide={action("hide")}
      onAttributeFiltersChange={action("onAttributesFiltersChange")}    />
  ));
