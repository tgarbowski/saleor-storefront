import { OrderStatus } from "@saleor/sdk";
import Link from "next/link";
import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import { Button } from "@components/atoms";
import { Container } from "@components/templates";
import { checkoutMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

export const messages = defineMessages({
  unfulfilled: {
    defaultMessage:
      "Wysłaliśmy Ci e-mail z potwierdzeniem zamówienia i powiadomimy Cię, gdy zamówienie zostanie wysłane.",
    description: "thank you subtitle",
  },
  unconfirmed: {
    defaultMessage:
      "Twoje zamówienie zostało złożone, ale potrzebuje naszego potwierdzenia. Wyślemy Ci e-mail kiedy to się stanie.",
    description: "thank you subtitle",
  },
});

/**
 * Thank you page after completing the checkout.
 */
const ThankYou: React.FC<IProps> = ({
  orderStatus,
  orderNumber,
  continueShoppingUrl,
  orderDetailsUrl,
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
          <FormattedMessage defaultMessage="Numer twojego zamówienia" />{" "}
          <span>{orderNumber}</span>
        </S.Paragraph>
        <S.Paragraph>
          <FormattedMessage
            {...(orderStatus === OrderStatus.UNCONFIRMED
              ? messages.unconfirmed
              : messages.unfulfilled)}
          />
        </S.Paragraph>
        <S.Buttons>
          <Link href={continueShoppingUrl}>
            <Button
              testingContext="continueShoppingButton"
              color="secondary"
              fullWidth
            >
              <FormattedMessage {...checkoutMessages.continueShopping} />
            </Button>
          </Link>
          <Link href={orderDetailsUrl}>
            <Button testingContext="gotoOrderDetailsButton" fullWidth>
              <FormattedMessage defaultMessage="SZCZEGÓŁY ZAMÓWIENIA" />
            </Button>
          </Link>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  );
};

export { ThankYou };
