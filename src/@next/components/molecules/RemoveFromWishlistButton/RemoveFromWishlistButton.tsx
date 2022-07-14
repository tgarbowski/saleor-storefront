import React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "@components/atoms";

export interface IRemoveFromWishlistButton {
  onSubmit: () => void;
}

export const RemoveFromWishlistButton: React.FC<IRemoveFromWishlistButton> = ({
  onSubmit,
}) => {
  return (
    <Button
      fullWidth
      testingContext="RemoveFromWishlistButton"
      onClick={onSubmit}
      color="primary"
    >
      <FormattedMessage defaultMessage="Usuń z ulubionych" />
    </Button>
  );
};
RemoveFromWishlistButton.displayName = "RemoveFromWishlistButton";
export default RemoveFromWishlistButton;
