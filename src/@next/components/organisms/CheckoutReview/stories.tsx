import { storiesOf } from "@storybook/react";
import React from "react";

import { CheckoutReview } from ".";

storiesOf("@components/organisms/CheckoutReview", module)
  .addParameters({ component: CheckoutReview })
  .add("default", () => (
    <CheckoutReview
      // eslint-disable-next-line react/jsx-no-bind, func-names
      handleTermsChange={function (terms: boolean): void {
        throw new Error("Function not implemented.");
      }}
      pages={undefined}
    />
  ));
