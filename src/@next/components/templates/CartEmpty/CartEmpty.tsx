import React from "react";
import { FormattedMessage } from "react-intl";

import { Container } from "../Container";
import * as S from "./styles";
import { IProps } from "./types";

/**
 * Template for empty cart page.
 */
const CartEmpty: React.FC<IProps> = ({ button }: IProps) => {
  return (
    <Container>
      <S.Wrapper>
        <S.TitleFirstLine>
          <FormattedMessage defaultMessage="Twój koszyk" />
        </S.TitleFirstLine>
        <S.TitleSecondLine>
          <FormattedMessage defaultMessage="jest pusty" />
        </S.TitleSecondLine>
        <S.HR />
        <S.Subtitle>
          <FormattedMessage defaultMessage="Może jeszcze nie dokonałeś wyboru" />
        </S.Subtitle>
        <S.ContinueButton>{button}</S.ContinueButton>
      </S.Wrapper>
    </Container>
  );
};

export { CartEmpty };
