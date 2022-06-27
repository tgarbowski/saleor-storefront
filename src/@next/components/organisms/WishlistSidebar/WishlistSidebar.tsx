import { IItems } from "@saleor/sdk/lib/api/Cart/types";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Button, Icon, Loader, OfflinePlaceholder } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { CardHeader } from "@components/molecules";
import { useHandlerWhenClickedOutside, useNetworkStatus } from "@hooks";
import { ITaxedMoney } from "@types";

import { Overlay, WishlistRow } from "..";
import * as S from "./styles";

const generateWishlist = (
  items: IItems,
  removeItem: (variantId: string) => any
) => {
  return items?.map(({ id, variant, totalPrice }, index) => (
    <WishlistRow
      type="condense"
      key={id ? `id-${id}` : `idx-${index}`}
      index={index}
      id={variant?.product?.id || ""}
      slug={variant.product?.slug || ""}
      name={variant?.product?.name || ""}
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
  items: IItems;
  removeItem: (variantId: string) => any;
  updateItem: (variantId: string, quantity: number) => any;
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
  items,
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
    return items?.find(item => !item.variant || !item.totalPrice);
  };

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
          ) : items?.length ? (
            missingVariants() ? (
              <Loader />
            ) : (
              <S.Cart>{generateWishlist(items, removeItem)}</S.Cart>
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
        {online && !!items?.length && (
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
