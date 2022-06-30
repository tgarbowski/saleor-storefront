import { ICheckoutModelLine } from "@saleor/sdk/lib/helpers";
import {
  ProductDetails_product_pricing,
  ProductDetails_product_variants_pricing,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";
import isEqual from "lodash/isEqual";
import * as React from "react";

import { TaxedMoney } from "../../containers";
import { IWishlistModelLine } from "../WishlistSidebar/WishlistSidebar";

/**
 * Renders formatted price for chosen variant or product.
 * Price ranges and discounts are additionally formatted available.
 */
export const getProductPrice = (
  productPricingRange: ProductDetails_product_pricing,
  variantPricing?: ProductDetails_product_variants_pricing | null
) => {
  const { start, stop } = productPricingRange.priceRange;
  if (isEqual(start, stop)) {
    return <TaxedMoney taxedMoney={start} />;
  }
  return (
    <>
      <TaxedMoney taxedMoney={start} /> - <TaxedMoney taxedMoney={stop} />
    </>
  );
};

export const canAddToCart = (
  items: ICheckoutModelLine[],
  isAvailableForPurchase: boolean,
  variantId: string,
  variantStock: number,
  quantity: number
): boolean => {
  const cartItem = items?.find(item => item.variant.id === variantId);
  const syncedQuantityWithCart = cartItem
    ? quantity + (cartItem?.quantity || 0)
    : quantity;
  return (
    isAvailableForPurchase &&
    quantity > 0 &&
    !!variantId &&
    variantStock >= syncedQuantityWithCart
  );
};

export const canAddToWishlist = (
  itemsWishlist: IWishlistModelLine[],
  variantId: string,
  variantStock: number,
  quantity: number
): boolean => {
  const wishlistItem = itemsWishlist?.find(
    item => item.variant.id === variantId
  );
  const syncedQuantityWithWishlist = wishlistItem
    ? quantity + (wishlistItem?.quantity || 0)
    : quantity;
  return (
    quantity > 0 && !!variantId && variantStock >= syncedQuantityWithWishlist
  );
};

/**
 * Returns how many items you can add to the cart. Takes in account quantity already in cart.
 */
export const getAvailableQuantity = (
  items: ICheckoutModelLine[],
  variantId: string,
  variantStock: number
): number => {
  const cartItem = items?.find(item => item.variant.id === variantId);
  const quantityInCart = cartItem?.quantity || 0;
  return variantStock - quantityInCart;
};
