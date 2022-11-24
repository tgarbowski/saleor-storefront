import { useWishlist } from "@saleor/sdk";
import { ProductDetails } from "@saleor/sdk/lib/fragments/gqlTypes/ProductDetails";
import { ICheckoutModelLine } from "@saleor/sdk/lib/helpers";
import {
  ProductDetails_product_pricing,
  ProductDetails_product_variants,
  ProductDetails_product_variants_pricing,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useIntl } from "react-intl";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import { NewProductTag } from "@components/atoms";
import { CustomPopup } from "@components/atoms/CustomPopup/CustomPopup";
import { OnSaleTag } from "@components/atoms/OnSaleTag";
import { TaxedMoney } from "@components/containers";
import { CreditCardIcon, ShippingIcon } from "@styles/icons";
import { apiUrl, channelSlug } from "@temp/constants";
import { commonMessages } from "@temp/intl";
import { IProductVariantsAttributesSelectedValues } from "@types";

import AddToCartButton from "../../molecules/AddToCartButton";
import AddToWishlistButton from "../../molecules/AddToWishlistButton";
import QuantityInput from "../../molecules/QuantityInput";
import RemoveFromWishlistButton from "../../molecules/RemoveFromWishlistButton";
import ProductVariantPicker from "../ProductVariantPicker";
import Accordion from "./Accordion";
import {
  canAddToCart,
  getAvailableQuantity,
  getProductPrice,
} from "./stockHelpers";
import * as S from "./styles";

export interface IAddToCartSection {
  productId: string;
  productVariants: ProductDetails_product_variants[];
  name: string;
  productPricing: ProductDetails_product_pricing;
  items: ICheckoutModelLine[];
  wishlist: string[];
  queryAttributes: Record<string, string>;
  isAvailableForPurchase: boolean | null;
  availableForPurchase: string | null;
  variantId: string;
  product: ProductDetails;
  setVariantId(variantId: string): void;
  onAddToCart(variantId: string, quantity?: number): void;
  onAddToWishlist(productId: string): void;
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
  onAddToWishlist,
  onAttributeChangeHandler,
  setVariantId,
  variantId,
  product,
}) => {
  const intl = useIntl();
  const [quantity, setQuantity] = useState<number>(1);
  const [variantStock, setVariantStock] = useState<number>(0);
  const [variantPricing, setVariantPricing] =
    useState<ProductDetails_product_variants_pricing | null>(null);

  const shareUrl = window?.location.href ?? "";

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

  const disableButton = !canAddToCart(
    items,
    !!isAvailableForPurchase,
    variantId,
    variantStock,
    quantity
  );

  const isOnSale = productPricing.onSale;

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
            <img src={CreditCardIcon} alt="credit card icon" />
          </div>
        </S.AccordionItemBox>
      ),
      content: (
        <S.AccordionContent>
          <ul>
            <S.AccordionListItem>Payu</S.AccordionListItem>
            <S.AccordionListItem>Płatność za pobraniem</S.AccordionListItem>
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
            <img src={ShippingIcon} alt="shipping icon" />
          </div>
        </S.AccordionItemBox>
      ),
      content: (
        <S.AccordionContent>
          <ul>
            <S.AccordionListItem>Paczkomaty Inpost 24/7</S.AccordionListItem>
            <S.AccordionListItem>Kurier DPD</S.AccordionListItem>
            <S.AccordionListItem>Kurier GLS, pobranie</S.AccordionListItem>
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

  const [disableButtonWishlist, setDisableButtonWishlist] = useState(false);

  const { addItem: addWishlistItem, removeItem: removeWishlistItem } =
    useWishlist();
  const wishlistData = localStorage.getItem("data_wishlist");
  const wishlist = wishlistData ? JSON.parse(wishlistData)?.lines : null;

  const tryAddToWishlist = () => {
    if (product) {
      addWishlistItem(product.id);
      setDisableButtonWishlist(true);
    }
  };

  useEffect(() => {
    if (wishlist) {
      setDisableButtonWishlist(
        !!wishlist.filter((id: string) => id === product?.id).length
      );
    }
  }, [wishlist]);
  const imageURL = "";
  const productName = product.name;

  const undiscountedPrice =
    product.pricing &&
    product.pricing.priceRangeUndiscounted &&
    product.pricing.priceRangeUndiscounted.start
      ? product.pricing.priceRangeUndiscounted.start
      : undefined;

  return (
    <S.AddToCartSelection>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{productName}</title>
        <meta property="og:url" content={shareUrl} />
        <meta
          property="og:image"
          content={imageURL !== "" ? `${product.thumbnail}` : ""}
        />
      </Helmet>
      <S.ProductNameHeader data-test="productName">{name}</S.ProductNameHeader>
      {isOutOfStock ? (
        renderErrorMessage(
          intl.formatMessage(commonMessages.outOfStock),
          "outOfStock"
        )
      ) : (
        <S.PriceWrapper>
          <S.UndiscountedPrice data-test="productPrice">
            {isOnSale && <TaxedMoney taxedMoney={undiscountedPrice} />}
          </S.UndiscountedPrice>
          <S.Price>{getProductPrice(productPricing, variantPricing)}</S.Price>
        </S.PriceWrapper>
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
      {isNoItemsAvailable &&
        renderErrorMessage(
          intl.formatMessage(commonMessages.noItemsAvailable),
          "noItemsAvailable"
        )}
      <S.TagWrapper style={{ marginBottom: "40px" }}>
        {isOnSale ? (
          <OnSaleTag style={{ marginLeft: 0 }}>
            <p>Przecena</p>
          </OnSaleTag>
        ) : (
          product?.collections &&
          product?.collections?.map((collection: any) =>
            collection.name === "Nowości" ? (
              <NewProductTag style={{ marginLeft: 0 }}>
                <p>Nowy produkt</p>
              </NewProductTag>
            ) : null
          )
        )}
      </S.TagWrapper>
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
      {disableButtonWishlist ? (
        <RemoveFromWishlistButton
          onSubmit={() => {
            if (product) {
              removeWishlistItem(product.id);
              setDisableButtonWishlist(false);
            }
          }}
        />
      ) : (
        <AddToWishlistButton onSubmit={tryAddToWishlist} />
      )}

      <S.SocialSharingWrapper>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <EmailShareButton url={shareUrl}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </S.SocialSharingWrapper>
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
