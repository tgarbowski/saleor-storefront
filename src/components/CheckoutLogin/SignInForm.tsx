import React from "react";
import { FormattedMessage } from "react-intl";
import { LoginForm } from "..";
import ForgottenPassword from "../OverlayManager/Login/ForgottenPassword";

const SignInForm: React.FC<{
  onForgottenPasswordClick: () => void;
}> = ({ onForgottenPasswordClick }) => (
  <>
    <h3 className="checkout__header">
      <FormattedMessage defaultMessage="Użytkownik zarejestrowany" />
    </h3>
    <LoginForm />
    <ForgottenPassword onClick={onForgottenPasswordClick} />
  </>
);

export default SignInForm;
