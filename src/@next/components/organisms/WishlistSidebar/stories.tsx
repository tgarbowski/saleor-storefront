import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { ITEMS_WISHLIST } from "./fixtures";
import { WishlistSidebar } from "./WishlistSidebar";

let portalRoot = document.getElementById("portal-root");
if (!portalRoot) {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal-root");
  document.body.appendChild(portalRoot);
}

const removeItem = action("remove item");
const hide = action("hide");
const goToWishlist = action("go to wishlist");

storiesOf("@components/organisms/WishlistSidebar", module)
  .addParameters({ component: WishlistSidebar })
  .addDecorator(story => <IntlProvider locale="en">{story()}</IntlProvider>)
  .add("default", () => (
    <WishlistSidebar
      itemsWishlist={ITEMS_WISHLIST}
      removeItem={removeItem}
      target={portalRoot}
      show
      hide={hide}
      goToWishlist={goToWishlist}
    />
  ))
  .add("empty", () => (
    <WishlistSidebar
      itemsWishlist={ITEMS_WISHLIST}
      removeItem={removeItem}
      target={portalRoot}
      show
      hide={hide}
      goToWishlist={goToWishlist}
    />
  ));
