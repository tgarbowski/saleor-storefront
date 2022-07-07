import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { generatePath } from "react-router";

import { IconButton } from "@components/atoms";
import { paths } from "@paths";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

export const WishlistRow: React.FC<IProps> = ({
  unitPrice,
  onRemove,
  id,
  slug,
  type = "responsive",
}: IProps) => {
  const productUrl = generatePath(paths.product, { slug });

  return (
    <S.Wrapper wishlistRowType={type} data-test="cartRow">
      <S.Photo wishlistRowType={type}>
        <Link href={productUrl}>sss</Link>
      </S.Photo>
      <S.Trash>
        <IconButton
          testingContext="removeButton"
          size={22}
          name="trash"
          onClick={onRemove}
        />
      </S.Trash>

      <S.TotalPrice wishlistRowType={type}>
        <S.PriceLabel wishlistRowType={type}>
          <S.LightFont>
            <FormattedMessage {...commonMessages.totalPrice} />:
          </S.LightFont>
        </S.PriceLabel>
      </S.TotalPrice>
      <S.UnitPrice wishlistRowType={type}>
        <S.PriceLabel wishlistRowType={type}>
          <S.LightFont>
            <FormattedMessage {...commonMessages.price} />:
          </S.LightFont>
        </S.PriceLabel>
        {unitPrice}
      </S.UnitPrice>
    </S.Wrapper>
  );
};
