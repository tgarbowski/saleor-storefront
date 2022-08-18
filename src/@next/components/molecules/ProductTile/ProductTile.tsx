import React from "react";

import { NewProductTag } from "@components/atoms";
import { OnSaleTag } from "@components/atoms/OnSaleTag";
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  const undiscountedPrice = product?.pricing?.priceRangeUndiscounted?.start;

  const isOnSale = product.pricing?.onSale;

  const salePercentage = (price: any, undiscountedPrice: any) => {
    let salePercentageNumber = 0;
    let discountPercent = 0;
    if (price && undiscountedPrice) {
      salePercentageNumber =
        (100 * price.net.amount) / undiscountedPrice.net.amount;
      discountPercent = 100 % -salePercentageNumber;
      return <p>-{Math.round(discountPercent)}%</p>;
    }
  };

  return (
    <S.Wrapper>
      {isOnSale ? (
        <OnSaleTag>{salePercentage(price, undiscountedPrice)}</OnSaleTag>
      ) : (
        product?.collections &&
        product?.collections?.map((collection: any) =>
          collection.name === "Najnowsze produkty" ? (
            <NewProductTag>
              <p>Nowy produkt</p>
            </NewProductTag>
          ) : null
        )
      )}
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />
      </S.Image>
      <S.Title data-test="productTile">{product.name}</S.Title>
      <S.PriceWrapper>
        <S.UndiscountedPrice data-test="productPrice">
          {isOnSale && <TaxedMoney taxedMoney={undiscountedPrice} />}
        </S.UndiscountedPrice>
        <S.Price data-test="productPrice">
          <TaxedMoney taxedMoney={price} />
        </S.Price>
      </S.PriceWrapper>
    </S.Wrapper>
  );
};
