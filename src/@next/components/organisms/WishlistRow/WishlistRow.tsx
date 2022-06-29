import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { IconButton } from "@components/atoms";
import { CachedImage } from "@components/molecules";
import { paths } from "@paths";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

export const WishlistRow: React.FC<IProps> = ({
  index,
  unitPrice,
  name,
  sku,
  thumbnail,
  onRemove,
  id,
  slug,
  type = "responsive",
}: IProps) => {
  const intl = useIntl();

  const productUrl = generatePath(paths.product, { slug });

  return (
    <S.Wrapper wishlistRowType={type} data-test="cartRow" data-test-id={sku}>
      <S.Photo wishlistRowType={type}>
        <Link href={productUrl}>
          <a>
            <CachedImage data-test="itemImage" {...thumbnail} />
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
        <p data-test="totalPrice">{totalPrice}</p>
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
