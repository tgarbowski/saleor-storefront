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

  const isOnSale = product.pricing?.onSale;

  return (
    <S.Wrapper>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />
      </S.Image>
      <S.Title data-test="productTile">{product.name}</S.Title>
      <S.Price data-test="productPrice">
        <TaxedMoney taxedMoney={price} />
      </S.Price>
      {isOnSale && (
        <OnSaleTag>
          <p>Przecena</p>
        </OnSaleTag>
      )}
      {product &&
        product.collections.map((collection: any) => {
          const isNewProduct = () => {
            if (collection.name === "Najnowsze produkty") {
              return (
                <NewProductTag>
                  <p>Nowy produkt</p>
                </NewProductTag>
              );
            }
          };

          return isNewProduct();
        })}
    </S.Wrapper>
  );
};
