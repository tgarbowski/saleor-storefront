import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { paths } from "@paths";
import { channelSlug } from "@temp/constants";
import { commonMessages } from "@temp/intl";

import { Button, Form, TextField } from "..";
import { ResetPasswordRequest } from "./gqlTypes/ResetPasswordRequest";
import { TypedPasswordResetRequestMutation } from "./queries";

import "./scss/index.scss";

const PasswordResetRequestForm: React.FC = () => {
  const intl = useIntl();

  const disableSubmit = (loading: boolean, data: ResetPasswordRequest) =>
    loading || data?.requestPasswordReset.errors.length === 0;

  const buttonMessage = (loading: boolean, data: ResetPasswordRequest) => {
    if (loading) {
      return intl.formatMessage(commonMessages.loading);
    }
    if (data?.requestPasswordReset.errors.length === 0) {
      return intl.formatMessage({
        defaultMessage: "Sprawdź swoją skrzynkę odbiorczą",
      });
    }
    return intl.formatMessage({ defaultMessage: "Zresetuj hasło" });
  };

  return (
    <div className="password-reset-form">
      <p>
        <FormattedMessage defaultMessage="Podaj nam swój adres e-mail, abyśmy mogli udostępnić Ci link do zresetowania hasła" />
      </p>
      <TypedPasswordResetRequestMutation>
        {(passwordReset, { loading, data }) => {
          return (
            <Form
              errors={data?.requestPasswordReset.errors || []}
              onSubmit={(event, { email }) => {
                event.preventDefault();
                passwordReset({
                  variables: {
                    email,
                    redirectUrl: `${location.origin}${paths.passwordReset}`,
                    channel: channelSlug,
                  },
                });
              }}
            >
              <TextField
                name="email"
                autoComplete="email"
                label={intl.formatMessage(commonMessages.eMail)}
                type="email"
                required
              />
              <div className="password-reset-form__button">
                <Button
                  testingContext="submit"
                  aria-label="submit"
                  type="submit"
                  {...(disableSubmit(loading, data) && { disabled: true })}
                >
                  {buttonMessage(loading, data)}
                </Button>
              </div>
            </Form>
          );
        }}
      </TypedPasswordResetRequestMutation>
    </div>
  );
};

export default PasswordResetRequestForm;
