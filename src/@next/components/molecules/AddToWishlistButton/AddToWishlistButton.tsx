import React from "react";
import { FormattedMessage } from "react-intl";

import { HeartIconSmall } from "@styles/CreditCardIcon";

import * as S from "./styles";

export interface IAddToWishlistButton {
  onSubmit: () => void;
}

export const AddToWishlistButton: React.FC<IAddToWishlistButton> = ({
  onSubmit,
}) => {
  return (
    <S.AddToWishlistBtn onClick={onSubmit}>
      <S.AddToWishlistIcon path={HeartIconSmall} />
      <FormattedMessage defaultMessage="Dodaj do ulubionych" />
    </S.AddToWishlistBtn>
  );
};
AddToWishlistButton.displayName = "AddToWishlistButton";
export default AddToWishlistButton;
