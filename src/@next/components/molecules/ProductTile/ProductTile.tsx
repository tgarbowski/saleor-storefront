import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";
import { HeartIconSmall } from "@styles/CreditCardIcon";
import { useWishlist } from "@saleor/sdk";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  const { addItem: addWishlistItem } = useWishlist();
  const tryAddToWishlist = () => {
    if (product) {
      addWishlistItem(product.id);
    }
  };

  return (
    <S.Wrapper>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />

        <S.WishlistIconLink onClick={tryAddToWishlist}>
          <S.WishlistIcon path={HeartIconSmall} />
        </S.WishlistIconLink>
      </S.Image>
      <S.Title data-test="productTile">{product.name}</S.Title>
      <S.Price data-test="productPrice">
        <TaxedMoney taxedMoney={price} />
      </S.Price>
    </S.Wrapper>
  );
};
