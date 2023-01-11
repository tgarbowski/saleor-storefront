import { useCart } from "@saleor/sdk";
import { IItems } from "@saleor/sdk/lib/api/Cart/types";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ReactSVG from "react-svg";

import {
  Button,
  CartCostsSummary,
  Loader,
  OfflinePlaceholder,
} from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { CardHeader } from "@components/molecules";
import { useHandlerWhenClickedOutside, useNetworkStatus } from "@hooks";
import { ITaxedMoney } from "@types";

import { CartRow, Overlay } from "..";
import * as S from "./styles";

import cartImg from "images/cart.svg";

const generateCart = (
  items: IItems,
  removeItem: (variantId: string) => any,
  updateItem: (variantId: string, quantity: number) => any
) => {
  return items?.map(({ id, variant, quantity, totalPrice }, index) => (
    <CartRow
      type="condense"
      key={id ? `id-${id}` : `idx-${index}`}
      index={index}
      id={variant?.product?.id || ""}
      slug={variant.product?.slug || ""}
      name={variant?.product?.name || ""}
      maxQuantity={variant.quantityAvailable || quantity}
      quantity={quantity}
      onRemove={() => removeItem(variant.id)}
      onQuantityChange={quantity => updateItem(variant.id, quantity)}
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

export interface ICartSidebar {
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
  continueShopping: () => void;
  goToCart: () => void;
  proceedToCheckout: () => void;
}

const CartSidebar: React.FC<ICartSidebar> = ({
  items,
  updateItem,
  totalPrice,
  shippingTaxedPrice,
  promoTaxedPrice,
  subtotalPrice,
  hide,
  show,
  target,
  continueShopping,
  goToCart,
  proceedToCheckout,
}: ICartSidebar) => {
  const { online } = useNetworkStatus();
  const { removeItem } = useCart();

  const { setElementRef } = useHandlerWhenClickedOutside(() => {
    hide();
  });

  const missingVariants = () => {
    return items?.find(item => !item.variant || !item.totalPrice);
  };

  useEffect(() => {
    if (items?.length === 0) {
      localStorage.removeItem("data_checkout");
      localStorage.removeItem("data_payment");
    }
  }, [items]);

  return (
    <Overlay
      position="right"
      duration={0}
      show={show}
      hide={hide}
      target={target}
      testingContext="cartOverlay"
    >
      <S.Wrapper ref={setElementRef()}>
        <CardHeader divider onHide={hide} prefix={<ReactSVG path={cartImg} />}>
          <span>
            <FormattedMessage defaultMessage="Koszyk" />
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
              <S.Cart>
                {items && generateCart(items, removeItem, updateItem)}
              </S.Cart>
            )
          ) : (
            <S.EmptyCart>
              <S.EmptyCartTitle>
                <FormattedMessage
                  defaultMessage="Twój koszyk jest pusty"
                  description="cart sidebar title"
                />
              </S.EmptyCartTitle>
              <S.EmptyCartDescription>
                <FormattedMessage
                  defaultMessage="Nie dodałeś nic do swojego koszyka. Jesteśmy pewni, że znajdziesz coś ciekawego u nas w sklepie."
                  description="cart sidebar description"
                />
              </S.EmptyCartDescription>
              <Button
                aria-label="continueShopping"
                name="continueShopping"
                testingContext="emptyCartHideOverlayButton"
                color="secondary"
                fullWidth
                onClick={continueShopping}
              >
                <FormattedMessage
                  defaultMessage="Kontynuuj zakupy"
                  description="button"
                />
              </Button>
            </S.EmptyCart>
          )}
        </S.Content>
        {online && !!items?.length && (
          <S.Footer>
            <CartCostsSummary
              subtotalPrice={subtotalPrice}
              totalPrice={totalPrice}
              shippingPrice={shippingTaxedPrice}
              discountPrice={promoTaxedPrice}
            />
            <Button
              aria-label="gotoCartView"
              name="gotoCartView"
              testingContext="gotoCartViewButton"
              color="secondary"
              fullWidth
              onClick={goToCart}
            >
              <FormattedMessage
                defaultMessage="Mój koszyk"
                description="button"
              />
            </Button>
            <Button
              aria-label="gotoCheckout"
              name="gotoCheckout"
              testingContext="gotoCheckoutButton"
              color="primary"
              fullWidth
              onClick={proceedToCheckout}
            >
              <FormattedMessage
                defaultMessage="Kontynuuj do kasy"
                description="button"
              />
            </Button>
          </S.Footer>
        )}
      </S.Wrapper>
    </Overlay>
  );
};

export { CartSidebar };
