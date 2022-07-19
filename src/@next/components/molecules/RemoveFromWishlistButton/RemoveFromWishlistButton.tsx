import React from "react";
import { FormattedMessage } from "react-intl";

import { HeartIconSmall } from "@styles/CreditCardIcon";

import * as S from "./styles";

export interface IRemoveFromWishlistButton {
  onSubmit: () => void;
}

export const RemoveFromWishlistButton: React.FC<IRemoveFromWishlistButton> = ({
  onSubmit,
}) => {
  return (
    <S.RemoveFromWishlistBtn onClick={onSubmit}>
      <S.RemoveFromWishlistIcon path={HeartIconSmall} />
      <FormattedMessage defaultMessage="Usuń z ulubionych" />
    </S.RemoveFromWishlistBtn>
  );
};
RemoveFromWishlistButton.displayName = "RemoveFromWishlistButton";
export default RemoveFromWishlistButton;
