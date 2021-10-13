import React from "react";
import { FormattedMessage } from "react-intl";

const ForgottenPassword: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => (
  <>
    <div className="login__content__password-reminder">
      <p>
        <FormattedMessage defaultMessage="Zapomniałe(a)ś swoje hasło?" />{" "}
        <span
          className="u-link"
          onClick={onClick}
          data-test="accountOverlayForgottenPasswordLink"
        >
          <FormattedMessage defaultMessage="Kliknij tutaj" />
        </span>
      </p>
    </div>
  </>
);

export default ForgottenPassword;
