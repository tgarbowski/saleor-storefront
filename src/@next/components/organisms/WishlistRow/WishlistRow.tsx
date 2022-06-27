import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { ErrorMessage, Icon, IconButton, Input } from "@components/atoms";
import { CachedImage } from "@components/molecules";
import { paths } from "@paths";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

export const WishlistRow: React.FC<IProps> = ({
  index,
  totalPrice,
  unitPrice,
  name,
  sku,
  quantity,
  maxQuantity,
  thumbnail,
  attributes = [],
  onRemove,
  id,
  slug,
  type = "responsive",
}: IProps) => {
  const [tempQuantity, setTempQuantity] = useState<string>(quantity.toString());
  const [isTooMuch, setIsTooMuch] = useState(false);
  const intl = useIntl();

  const handleBlurQuantityInput = () => {
    let newQuantity = parseInt(tempQuantity, 10);

    if (isNaN(newQuantity) || newQuantity <= 0) {
      newQuantity = quantity;
    } else if (newQuantity > maxQuantity) {
      newQuantity = maxQuantity;
    }

    if (quantity !== newQuantity) {
      onQuantityChange(newQuantity);
    }

    const newTempQuantity = newQuantity.toString();
    if (tempQuantity !== newTempQuantity) {
      setTempQuantity(newTempQuantity);
    }

    setIsTooMuch(false);
  };

  useEffect(() => {
    setTempQuantity(quantity.toString());
  }, [quantity]);

  const handleQuantityChange = (evt: React.ChangeEvent<any>) => {
    const newQuantity = parseInt(evt.target.value, 10);

    setTempQuantity(evt.target.value);

    setIsTooMuch(!isNaN(newQuantity) && newQuantity > maxQuantity);
  };

  const quantityErrors = isTooMuch
    ? [
        {
          message: intl.formatMessage(commonMessages.maxQtyIs, { maxQuantity }),
        },
      ]
    : undefined;

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
        <S.Attributes wishlistRowType={type} data-test="itemAttributes">
          {attributes.map(({ attribute, values }, attributeIndex) => (
            <S.SingleAttribute key={attribute.id}>
              <span
                data-test="itemSingleAttribute"
                data-test-id={attributeIndex}
              >
                <S.LightFont>{attribute.name}:</S.LightFont>{" "}
                {values.map(value => value.name).join(", ")}
              </span>
            </S.SingleAttribute>
          ))}
        </S.Attributes>
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
        <p data-test="unitPrice">{unitPrice}</p>
      </S.UnitPrice>
    </S.Wrapper>
  );
};
