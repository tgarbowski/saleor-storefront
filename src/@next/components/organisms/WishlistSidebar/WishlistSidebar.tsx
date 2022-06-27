import { IItems } from "@saleor/sdk/lib/api/Cart/types";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";

import { Button, Icon, Loader, OfflinePlaceholder } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { CardHeader } from "@components/molecules";
import { useHandlerWhenClickedOutside, useNetworkStatus } from "@hooks";
import { ITaxedMoney } from "@types";

import { Overlay, WishlistRow } from "..";
import * as S from "./styles";

const generateWishlist = (
  itemsWishlist: IItems,
  removeItem: (variantId: string) => any
) => {
  return itemsWishlist?.map(({ id, variant, quantity, totalPrice }, index) => (
    <WishlistRow
      type="condense"
      key={id ? `id-${id}` : `idx-${index}`}
      index={index}
      id={variant?.product?.id || ""}
      slug={variant.product?.slug || ""}
      name={variant?.product?.name || ""}
      maxQuantity={variant.quantityAvailable || quantity}
      quantity={quantity}
      onRemove={() => removeItem(variant.id)}
      thumbnail={{
        ...variant?.product?.thumbnail,
        alt: variant?.product?.thumbnail?.alt || "",
      }}
      totalPrice={<TaxedMoney taxedMoney={totalPrice} />}
      unitPrice={<TaxedMoney taxedMoney={variant?.pricing?.price} />}
      sku={variant.sku}
      attributes={variant.attributes?.map(attribute => {
        return {
          attribute: {
            id: attribute.attribute.id,
            name: attribute.attribute.name || "",
          },
          values: attribute.values.map(value => {
            return {
              id: value?.id,
              name: value?.name || "",
              value: value?.value,
            };
          }),
        };
      })}
    />
  ));
};

export interface IWishlistSidebar {
  itemsWishlist: IItems;
  removeItem: (variantId: string) => any;
  totalPrice?: ITaxedMoney | null;
  shippingTaxedPrice?: ITaxedMoney | null;
  promoTaxedPrice?: ITaxedMoney | null;
  subtotalPrice?: ITaxedMoney | null;
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
            <S.Cart>{generateWishlist(itemsWishlist, removeItem)}</S.Cart>
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
