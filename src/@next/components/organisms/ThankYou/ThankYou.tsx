import React from "react";
import {FormattedMessage} from "react-intl";

import {Button} from "@components/atoms";
import {Container} from "@components/templates";
import {checkoutMessages} from "@temp/intl";

import * as S from "./styles";
import {IProps} from "./types";

/**
 * Thank you page after completing the checkout.
 */
const ThankYou: React.FC<IProps> = ({
  orderNumber,
  continueShopping,
  orderDetails,
}: IProps) => {
  return (
    <Container data-test="thankYouView">
      <S.Wrapper>
        <S.ThankYouHeader>
          <FormattedMessage defaultMessage="Dziękujemy" />
          <br />
          <span>
            <FormattedMessage defaultMessage="za twoje zamówienie!" />
          </span>
        </S.ThankYouHeader>
        <S.Paragraph>
          <FormattedMessage defaultMessage="Twój numer zamówienia" />{" "}
          <span>{orderNumber}</span>
        </S.Paragraph>
        <S.Paragraph>
          <FormattedMessage defaultMessage="Wysłaliśmy Ci e-mail z potwierdzeniem zamówienia i powiadomimy Cię, gdy zamówienie zostanie wysłane." />
        </S.Paragraph>
        <S.Buttons>
          <Button
            testingContext="continueShoppingButton"
            onClick={continueShopping}
            color="secondary"
            fullWidth
          >
            <FormattedMessage {...checkoutMessages.continueShopping} />
          </Button>
          <Button
            testingContext="gotoOrderDetailsButton"
            onClick={orderDetails}
            fullWidth
          >
            <FormattedMessage defaultMessage="SZCZEGÓŁY ZAMÓWIENIA" />
          </Button>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  );
};

export { ThankYou };
