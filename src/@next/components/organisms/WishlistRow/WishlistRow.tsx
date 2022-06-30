import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { generatePath } from "react-router";

import { IconButton } from "@components/atoms";
import { CachedImage } from "@components/molecules";
import { paths } from "@paths";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

export const WishlistRow: React.FC<IProps> = ({
  unitPrice,
  name,
  sku,
  thumbnail,
  quantity,
  onRemove,
  id,
  slug,
  type = "responsive",
}: IProps) => {
  const productUrl = generatePath(paths.product, { slug });

  return (
    <S.Wrapper wishlistRowType={type} data-test="cartRow" data-test-id={sku}>
      <S.Photo wishlistRowType={type}>
        <Link href={productUrl}>
          <a>
            <CachedImage data-test="itemImage" {...thumbnail} />
            {quantity}
          </a>
        </Link>
      </S.Photo>
      <S.Description wishlistRowType={type}>
        <Link href={productUrl}>
          <a>
            <S.Name data-test="itemName">{name}</S.Name>
          </a>
        </Link>
        <S.Sku>
          <S.LightFont>
            <FormattedMessage {...commonMessages.sku} />:{" "}
            <span data-test="itemSKU">{sku || "-"}</span>
          </S.LightFont>
        </S.Sku>
      </S.Description>
      <S.Trash>
        <IconButton
          testingContext="removeButton"
          testingContextId={sku}
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
