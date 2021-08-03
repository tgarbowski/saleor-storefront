import React from "react";
import { FormattedMessage } from "react-intl";

import { Container } from "@components/templates";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Thank you page after completing the checkout.
 */
const FailurePayment: React.FC<IProps> = ({}: IProps) => {
  return (
    <Container data-test="thankYouView">
      <S.Wrapper>
        <S.ThankYouHeader>
          <FormattedMessage defaultMessage="Niestety nie udało się" />
          <br />
          <span>
            <FormattedMessage defaultMessage="Transakcja nie powiodła się" />
          </span>
        </S.ThankYouHeader>
        <S.Paragraph>
          <FormattedMessage defaultMessage="Spróbuj jeszcze raz." />
        </S.Paragraph>
      </S.Wrapper>
    </Container>
  );
};

export { FailurePayment };
