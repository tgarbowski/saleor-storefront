import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import {
  ITEMS,
  PROMO_PRICE,
  SHIPPING_PRICE,
  SUBTOTAL_PRICE,
  TOTAL_PRICE,
} from "./fixtures";
import { WishlistSidebar } from "./WishlistSidebar";

let portalRoot = document.getElementById("portal-root");
if (!portalRoot) {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal-root");
  document.body.appendChild(portalRoot);
}

const removeItem = action("remove item");
const updateItem = action("update item");
const hide = action("hide");
const goToWishlist = action("go to wishlist");

storiesOf("@components/organisms/WishlistSidebar", module)
  .addParameters({ component: WishlistSidebar })
  .addDecorator(story => <IntlProvider locale="en">{story()}</IntlProvider>)
  .add("default", () => (
    <WishlistSidebar
      items={ITEMS}
      removeItem={removeItem}
      updateItem={updateItem}
      totalPrice={TOTAL_PRICE}
      subtotalPrice={SUBTOTAL_PRICE}
      shippingTaxedPrice={SHIPPING_PRICE}
      promoTaxedPrice={PROMO_PRICE}
      target={portalRoot}
      show
      hide={hide}
      goToWishlist={goToWishlist}
    />
  ))
  .add("empty", () => (
    <WishlistSidebar
      items={[]}
      removeItem={removeItem}
      updateItem={updateItem}
      totalPrice={TOTAL_PRICE}
      subtotalPrice={SUBTOTAL_PRICE}
      shippingTaxedPrice={SHIPPING_PRICE}
      promoTaxedPrice={PROMO_PRICE}
      target={portalRoot}
      show
      hide={hide}
      goToWishlist={goToWishlist}
    />
  ));
