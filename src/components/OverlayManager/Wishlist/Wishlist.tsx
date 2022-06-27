import { useCart, useCheckout } from "@saleor/sdk";
import { useRouter } from "next/router";
import * as React from "react";

import { WishlistSidebar } from "@components/organisms";
import { paths } from "@paths";

import { OverlayContextInterface } from "../..";

const Wishlist: React.FC<{ overlay: OverlayContextInterface }> = ({
  overlay,
}) => {
  const { push } = useRouter();
  const { checkout } = useCheckout();
  const {
    items,
    updateItem,
    removeItem,
    subtotalPrice,
    shippingPrice,
    discount,
    totalPrice,
  } = useCart();

  const shippingTaxedPrice =
    checkout?.shippingMethod?.id && shippingPrice
      ? {
          gross: shippingPrice,
          net: shippingPrice,
        }
      : null;
  const promoTaxedPrice = discount && {
    gross: discount,
    net: discount,
  };

  return (
    <WishlistSidebar
      show
      updateItem={updateItem}
      removeItem={removeItem}
      hide={overlay.hide}
      items={items}
      subtotalPrice={subtotalPrice}
      shippingTaxedPrice={shippingTaxedPrice}
      promoTaxedPrice={promoTaxedPrice}
      totalPrice={totalPrice}
      goToWishlist={() => {
        push(paths.wishlist);
        overlay.hide();
      }}
    />
  );
};

export default Wishlist;
