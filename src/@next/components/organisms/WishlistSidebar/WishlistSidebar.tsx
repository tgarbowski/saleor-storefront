import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import { Button, Icon, Loader, OfflinePlaceholder } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { CardHeader } from "@components/molecules";
import { useHandlerWhenClickedOutside, useNetworkStatus } from "@hooks";

import { Overlay, WishlistRow } from "..";
import * as S from "./styles";

export declare type IItemsWishlist = IWishlistModelLine[] | null | undefined;

export interface Wishlist_lines_variant_pricing_price_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface Wishlist_lines_variant_pricing_price_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface Wishlist_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: Wishlist_lines_variant_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: Wishlist_lines_variant_pricing_price_net;
}

export interface Wishlist_lines_variant_pricing_priceUndiscounted_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface Wishlist_lines_variant_pricing_priceUndiscounted_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}
export interface Wishlist_lines_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: Wishlist_lines_variant_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: Wishlist_lines_variant_pricing_priceUndiscounted_net;
}

export interface Wishlist_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: Wishlist_lines_variant_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: Wishlist_lines_variant_pricing_price | null;
}
export interface Wishlist_lines_variant_product_thumbnail {
  __typename: "Image";
  url: string;
  alt: string | null;
}

export interface Wishlist_lines_variant_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}
export interface Wishlist_lines_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  thumbnail: Wishlist_lines_variant_product_thumbnail | null;
  productType: Wishlist_lines_variant_product_productType;
  thumbnail2x: Wishlist_lines_variant_product_thumbnail2x | null;
}

export interface Wishlist_lines_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface IWishlistModelPriceValue {
  amount: number;
  currency: string;
}
export interface IWishlistModelLineTotalPrice {
  gross: IWishlistModelPriceValue;
  net: IWishlistModelPriceValue;
}

export interface IWishlistModelLineVariant {
  id: string;
  name?: string;
  sku?: string;
  product?: Wishlist_lines_variant_product;
  pricing?: Wishlist_lines_variant_pricing | null;
}

export interface IWishlistModelLine {
  quantity: number;
  id?: string;
  variant: IWishlistModelLineVariant;
  totalPrice?: IWishlistModelLineTotalPrice | null;
}

export interface IWishlistModelProps {
  itemsWishlist: IWishlistModelLine[];
}

export const useWishlist = () => {
  const [itemsWishlist, setItemsWishlist] = useState<
    IWishlistModelLine | undefined
  >(undefined);

  useEffect(() => {
    setItemsWishlist({
      quantity: 1,
      id: "123",
      variant: {
        id: "igor",
      },
    });
  }, [itemsWishlist]);

  return itemsWishlist;
};

const generateWishlist = (
  itemsWishlist: IItemsWishlist,
  removeItem: (variantId: string) => any
) => {
  return itemsWishlist?.map(({ id, variant, quantity }, index) => (
    <WishlistRow
      type="condense"
      key={id ? `id-${id}` : `idx-${index}`}
      index={index}
      quantity={quantity}
      id={variant?.product?.id || ""}
      slug={variant.product?.slug || ""}
      name={variant?.product?.name || ""}
      onRemove={() => removeItem(variant.id)}
      thumbnail={{
        ...variant?.product?.thumbnail,
        alt: variant?.product?.thumbnail?.alt || "",
      }}
      sku={variant.sku}
      unitPrice={<TaxedMoney taxedMoney={variant?.pricing?.price} />}
    />
  ));
};

export interface IWishlistSidebar {
  itemsWishlist: IItemsWishlist;
  removeItem: (variantId: string) => any;
  hide: () => void;
  show: boolean;
  target?: HTMLElement | null;
  goToWishlist: () => void;
}

const WishlistSidebar: React.FC<IWishlistSidebar> = ({
  itemsWishlist,
  removeItem,
  hide,
  show,
  target,
  goToWishlist,
}: IWishlistSidebar) => {
  const { online } = useNetworkStatus();

  const { setElementRef } = useHandlerWhenClickedOutside(() => {
    hide();
  });

  const missingVariants = () => {
    return itemsWishlist?.find(item => !item.variant);
  };

  useEffect(() => {
    console.log(itemsWishlist);
  }, []);

  return (
    <Overlay
      position="right"
      duration={0}
      show={show}
      hide={hide}
      target={target}
      testingContext="wishlistOverlay"
    >
      <S.Wrapper ref={setElementRef()}>
        <CardHeader
          divider
          onHide={hide}
          prefix={<Icon name="heart" size={64} />}
        >
          <span>
            <FormattedMessage defaultMessage="Lista życzeń" />
          </span>
        </CardHeader>
        <S.Content>
          {!online ? (
            <S.EmptyCart>
              <OfflinePlaceholder />
            </S.EmptyCart>
          ) : itemsWishlist?.length ? (
            missingVariants() ? (
              <Loader />
            ) : (
              <S.Cart>{generateWishlist(itemsWishlist, removeItem)}</S.Cart>
            )
          ) : (
            <S.EmptyCart>
              <S.EmptyCartTitle>
                <FormattedMessage
                  defaultMessage="Twoja lista życzeń jest pusta"
                  description="wishlist sidebar title"
                />
              </S.EmptyCartTitle>
              <S.EmptyCartDescription>
                <FormattedMessage
                  defaultMessage="Nie dodałeś nic do swojej listy życzeń. Jesteśmy pewni, że znajdziesz coś ciekawego u nas w sklepie."
                  description="wishlist sidebar description"
                />
              </S.EmptyCartDescription>
            </S.EmptyCart>
          )}
        </S.Content>
        {online && !!itemsWishlist?.length && (
          <S.Footer>
            <Button
              name="gotoWishlistView"
              testingContext="gotoWishlistViewButton"
              color="secondary"
              fullWidth
              onClick={goToWishlist}
            >
              <FormattedMessage
                defaultMessage="Moja lista życzeń"
                description="button"
              />
            </Button>
          </S.Footer>
        )}
      </S.Wrapper>
    </Overlay>
  );
};

export { WishlistSidebar };
