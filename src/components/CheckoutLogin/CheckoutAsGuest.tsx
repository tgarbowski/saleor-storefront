import React from "react";
import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";
import { Button, OverlayTheme, OverlayType } from "..";
import { OverlayContextInterface } from "../Overlay";

const CheckoutAsGuest: React.FC<{
  overlay: OverlayContextInterface;
  checkoutUrl: string;
}> = ({ overlay, checkoutUrl }) => (
  <div className="checkout-login__guest">
    <h3 className="checkout__header">
      <FormattedMessage defaultMessage="Kontynuuj jako gość" />
    </h3>
    <p>
      <FormattedMessage defaultMessage="Jeśli nie chcesz rejestrować konta, nie martw się. Możesz dokonać zakupów jako gość. Dbamy o Ciebie tak samo, jak o każdego zarejestrowanego użytkownika." />
    </p>
    <Link to={checkoutUrl}>
      <Button testingContext="continueAsGuestButton">
        <FormattedMessage defaultMessage="Kontynuuj jako gość" />
      </Button>
    </Link>

    <p>
      <FormattedMessage defaultMessage="albo możesz" />{" "}
      <span
        data-test="showRegisterOverlay"
        className="u-link"
        onClick={() => overlay.show(OverlayType.register, OverlayTheme.right)}
      >
        <FormattedMessage defaultMessage="utwórz konto" />
      </span>
    </p>
  </div>
);

export default CheckoutAsGuest;
