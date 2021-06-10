import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../..";

const Empty: React.FC<{ overlayHide(): void }> = ({ overlayHide }) => (
  <div className="cart__empty">
    <h4>
      <FormattedMessage defaultMessage="Twój koszyk jest pusty" />
    </h4>
    <p>
      <FormattedMessage defaultMessage="Nie dodałeś nic do swojego koszyka. Jesteśmy pewni, że znajdziesz coś w naszym sklepie " />
    </p>
    <div className="cart__empty__action">
      <Button
        testingContext="emptyCartHideOverlayButton"
        secondary
        onClick={overlayHide}
      >
        <FormattedMessage defaultMessage="Kontynuuj zakupy" />
      </Button>
    </div>
  </div>
);

export default Empty;
