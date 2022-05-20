import { OrderStatus } from "@saleor/sdk";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ThankYou } from ".";

storiesOf("@components/organisms/ThankYou", module)
  .addParameters({ component: ThankYou })
  .add("default", () => (
    <ThankYou
      shippingMethod="Kurier GLS, pobranie"
      orderStatus={OrderStatus.UNFULFILLED}
      orderNumber="#341414"
      continueShoppingUrl="/"
      orderDetailsUrl="/order/xyz"
    />
  ))
  .add("with order unfulfilled", () => (
    <ThankYou
      shippingMethod="Kurier GLS, pobranie"
      orderStatus={OrderStatus.UNFULFILLED}
      orderNumber="#341414"
      continueShoppingUrl="/"
      orderDetailsUrl="/order/xyz"
    />
  ))
  .add("with order unconfirmed", () => (
    <ThankYou
      shippingMethod="Kurier GLS, pobranie"
      orderStatus={OrderStatus.UNCONFIRMED}
      orderNumber="#341414"
      continueShoppingUrl="/"
      orderDetailsUrl="/order/xyz"
    />
  ));
