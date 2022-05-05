import { ICheckoutModelLine } from "@saleor/sdk/lib/helpers";
import {
  ProductDetails_product_pricing,
  ProductDetails_product_variants,
  ProductDetails_product_variants_pricing,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

import { CustomPopup } from "@components/atoms/CustomPopup/CustomPopup";
import CreditCardIcon from "@styles/CreditCardIcon";
import ShippingIcon from "@styles/ShippingIcon";
import { apiUrl, channelSlug } from "@temp/constants";
import { commonMessages } from "@temp/intl";
import { IProductVariantsAttributesSelectedValues } from "@types";

import AddToCartButton from "../../molecules/AddToCartButton";
import QuantityInput from "../../molecules/QuantityInput";
import ProductVariantPicker from "../ProductVariantPicker";
import Accordion from "./Accordion";
import {
  canAddToCart,
  getAvailableQuantity,
  getProductPrice,
} from "./stockHelpers";
import * as S from "./styles";

const LOW_STOCK_QUANTITY: number = 5;

export interface IAddToCartSection {
  productId: string;
  productVariants: ProductDetails_product_variants[];
  name: string;
  productPricing: ProductDetails_product_pricing;
  items: ICheckoutModelLine[];
  queryAttributes: Record<string, string>;
  isAvailableForPurchase: boolean | null;
  availableForPurchase: string | null;
  variantId: string;
  setVariantId(variantId: string): void;
  onAddToCart(variantId: string, quantity?: number): void;
  onAttributeChangeHandler(slug: string | null, value: string): void;
}

const AddToCartSection: React.FC<IAddToCartSection> = ({
  availableForPurchase,
  isAvailableForPurchase,
  items,
  name,
  productPricing,
  productVariants,
  queryAttributes,
  onAddToCart,
  onAttributeChangeHandler,
  setVariantId,
  variantId,
}) => {
  const intl = useIntl();
  const [quantity, setQuantity] = useState<number>(1);
  const [variantStock, setVariantStock] = useState<number>(0);
  const [variantPricing, setVariantPricing] =
    useState<ProductDetails_product_variants_pricing | null>(null);

  const availableQuantity = getAvailableQuantity(
    items,
    variantId,
    variantStock
  );
  const isOutOfStock = !!variantId && variantStock === 0;
  const noPurchaseAvailable = !isAvailableForPurchase && !availableForPurchase;
  const purchaseAvailableDate =
    !isAvailableForPurchase &&
    availableForPurchase &&
    Date.parse(availableForPurchase);
  const isNoItemsAvailable = !!variantId && !isOutOfStock && !availableQuantity;
  const isLowStock =
    !!variantId &&
    !isOutOfStock &&
    !isNoItemsAvailable &&
    availableQuantity < LOW_STOCK_QUANTITY;

  const disableButton = !canAddToCart(
    items,
    !!isAvailableForPurchase,
    variantId,
    variantStock,
    quantity
  );

  const renderErrorMessage = (message: string, testingContextId: string) => (
    <S.ErrorMessage
      data-test="stockErrorMessage"
      data-testId={testingContextId}
    >
      {message}
    </S.ErrorMessage>
  );

  const onVariantPickerChange = (
    _selectedAttributesValues?: IProductVariantsAttributesSelectedValues,
    selectedVariant?: ProductDetails_product_variants
  ): undefined => {
    if (!selectedVariant) {
      setVariantId("");
      setVariantPricing(null);
      setVariantStock(0);
      return;
    }
    setVariantId(selectedVariant.id);
    setVariantPricing(selectedVariant?.pricing);
    setVariantStock(selectedVariant?.quantityAvailable);
  };
  const accordionItems = [
    {
      title: (
        <S.AccordionItemBox>
          <div>
            <p>Sposoby płatności</p>
          </div>
          <div>
            <img src={CreditCardIcon} alt="" />
          </div>
        </S.AccordionItemBox>
      ),
      content: (
        <S.AccordionContent>
          <ul>
            <S.AccordionListItem>Payu</S.AccordionListItem>
          </ul>
        </S.AccordionContent>
      ),
    },
    {
      title: (
        <S.AccordionItemBox>
          <div>
            <p>Sposoby dostawy</p>
          </div>
          <div>
            <img src={ShippingIcon} alt="" />
          </div>
        </S.AccordionItemBox>
      ),
      content: (
        <S.AccordionContent>
          <ul>
            <S.AccordionListItem>Kurier Inpost</S.AccordionListItem>
            <S.AccordionListItem>Paczkomaty Inpost 24/7</S.AccordionListItem>
            <S.AccordionListItem>Kurier DPD</S.AccordionListItem>
          </ul>
        </S.AccordionContent>
      ),
    },
  ];

  useEffect(() => {
    setVariantStock(productVariants[0].quantityAvailable);
  }, [productVariants[0].quantityAvailable]);

  const [addToCartPopUp, setAddToCartPopUp] = useState<boolean>(false);

  const tryAddToCart = () => {
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        query: `
        query  ProductVariant($id: ID!, $channel: String){
          productVariant(id:$id channel:$channel){
            quantityAvailable
          }
        }
        `,
        variables: {
          id: variantId,
          channel: channelSlug,
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(data =>
      data.json().then(data => {
        if (data.data.productVariant.quantityAvailable !== 0) {
          onAddToCart(variantId, quantity);
        } else {
          setAddToCartPopUp(true);
        }
      })
    );
  };

  return (
    <S.AddToCartSelection>
      <S.ProductNameHeader data-test="productName">{name}</S.ProductNameHeader>
      {isOutOfStock ? (
        renderErrorMessage(
          intl.formatMessage(commonMessages.outOfStock),
          "outOfStock"
        )
      ) : (
        <S.ProductPricing>
          {getProductPrice(productPricing, variantPricing)}
        </S.ProductPricing>
      )}
      {noPurchaseAvailable &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.noPurchaseAvailable),
          "notAvailable"
        )}
      {purchaseAvailableDate &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.purchaseAvailableOn, {
            date: new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }).format(purchaseAvailableDate),
            time: new Intl.DateTimeFormat("default", {
              hour: "numeric",
              minute: "numeric",
            }).format(purchaseAvailableDate),
          }),
          "timeRestrictedAvailability"
        )}
      {isLowStock &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.lowStock),
          "lowStockWarning"
        )}
      {isNoItemsAvailable &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.noItemsAvailable),
          "noItemsAvailable"
        )}
      <S.VariantPicker>
        <ProductVariantPicker
          productVariants={productVariants}
          onChange={onVariantPickerChange}
          selectSidebar
          queryAttributes={queryAttributes}
          onAttributeChangeHandler={onAttributeChangeHandler}
        />
      </S.VariantPicker>
      <S.QuantityInput>
        <QuantityInput
          quantity={quantity}
          maxQuantity={availableQuantity}
          disabled={isOutOfStock || isNoItemsAvailable}
          onQuantityChange={setQuantity}
          hideErrors={!variantId || isOutOfStock || isNoItemsAvailable}
          testingContext="addToCartQuantity"
        />
      </S.QuantityInput>
      <AddToCartButton onSubmit={tryAddToCart} disabled={disableButton} />
      {addToCartPopUp && (
        <CustomPopup
          modalText="Nie można dodać produktu do koszyka. Wygląda na to, że produkt
        został wykupiony"
          title="Informacja"
          buttonText="Zamknij okno"
          onClose={() => {
            window.location.reload();
          }}
        />
      )}
      <Accordion items={accordionItems} />
    </S.AddToCartSelection>
  );
};
AddToCartSection.displayName = "AddToCartSection";
export default AddToCartSection;
