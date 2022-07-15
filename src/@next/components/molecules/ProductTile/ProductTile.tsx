import React from "react";

import { NewProductTag } from "@components/atoms";
import { OnSaleTag } from "@components/atoms/OnSaleTag";
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({
  product,
  products,
}: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  const undiscountedPrice =
    product.pricing &&
    product.pricing.priceRangeUndiscounted &&
    product.pricing.priceRangeUndiscounted.start
      ? product.pricing.priceRangeUndiscounted.start
      : undefined;

  const isOnSale = product.pricing?.onSale;

  return (
    <S.Wrapper>
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
      {isOnSale && (
        <OnSaleTag>
          <p>Przecena</p>
        </OnSaleTag>
      )}
      {product?.collections &&
        product?.collections?.map((collection: any) =>
          collection.name === "Najnowsze produkty" ? (
            <NewProductTag>
              <p>Nowy produkt</p>
            </NewProductTag>
          ) : null
        )}
    </S.Wrapper>
  );
};
