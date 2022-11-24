import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

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
      <FormattedMessage defaultMessage="Jeśli nie chcesz rejestrować konta, nie martw się. Możesz dokonać zakupów jako gość. Dbamy o Ciebie tak samo, jak o każdego zarejestrowanego użytkownika" />
    </p>
    <Link href={checkoutUrl}>
      <a>
        <Button
          testingContext="continueAsGuestButton"
          aria-label="continueAsGuestButton"
        >
          <FormattedMessage defaultMessage="Kontynuuj jako gość" />
        </Button>
      </a>
    </Link>

    <p>
      <FormattedMessage defaultMessage="albo" />{" "}
      <span
        data-test="showRegisterOverlay"
        className="u-link"
        onClick={() => overlay.show(OverlayType.register, OverlayTheme.right)}
      >
        <FormattedMessage defaultMessage="załóż konto" />
      </span>
    </p>
  </div>
);

export default CheckoutAsGuest;
