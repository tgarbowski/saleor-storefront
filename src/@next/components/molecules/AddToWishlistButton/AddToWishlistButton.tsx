import React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "@components/atoms";

export interface IAddToWishlistButton {
  onSubmit: () => void;
}

export const AddToWishlistButton: React.FC<IAddToWishlistButton> = ({
  onSubmit,
}) => {
  return (
    <Button
      fullWidth
      testingContext="addToWishlistButton"
      onClick={onSubmit}
      color="primary"
    >
      <FormattedMessage defaultMessage="Dodaj do ulubionych" />
    </Button>
  );
};
AddToWishlistButton.displayName = "AddToWishlistButton";
export default AddToWishlistButton;
