import React from "react";
import {FormattedMessage} from "react-intl";

import {Container} from "@components/templates";

import * as S from "./styles";
import {IProps} from "./types";

/**
 * Thank you page after completing the checkout.
 */

const CorrectPayment: React.FC<IProps> = ({}: IProps) => {
  return (
    <Container data-test="thankYouView">
      <S.Wrapper>
        <S.ThankYouHeader>
          <FormattedMessage defaultMessage="Dziękujemy" />
          <br />
          <span>
            <FormattedMessage defaultMessage="Transakcja zakończyła się pomyślnie" />
          </span>
        </S.ThankYouHeader>
        <S.Paragraph>
          <FormattedMessage defaultMessage="Oczekuj przesyłki w najbliższych dniach roboczych." />
        </S.Paragraph>
      </S.Wrapper>
    </Container>
  );
};

export { CorrectPayment };
