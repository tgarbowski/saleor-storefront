import React from "react";
import { FormattedMessage } from "react-intl";

import { ErrorMessage } from "@components/atoms";
import { AddressSummary } from "@components/molecules";
import { checkoutMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Review order view showed in checkout.
 */

const CheckoutReview: React.FC<IProps> = ({
  shippingAddress,
  billingAddress,
  shippingMethodName,
  paymentMethodName,
  email,
  errors,
  noteRef,
  nip,
}) => {
  return (
    <S.Wrapper data-test="sectionTitle">
      <S.Title data-test="checkoutPageSubtitle">
        <FormattedMessage {...checkoutMessages.reviewOrder} />
      </S.Title>
      <S.Grid>
        <section data-test="shippingAddressSection">
          <S.SubTitle>
            <FormattedMessage {...checkoutMessages.shippingAddress} />
          </S.SubTitle>
          <S.Divider />
          {shippingMethodName === "Odbiór osobisty" ? (
            <AddressSummary address={shippingAddress} />
          ) : (
            <AddressSummary address={shippingAddress} email={email} />
          )}
        </section>
        <section data-test="billingAddressSection">
          <S.SubTitle>
            <FormattedMessage defaultMessage="Adres rozliczeniowy" />
          </S.SubTitle>
          <S.Divider />
          <AddressSummary address={billingAddress} email={email} />
        </section>
        <section>
          <S.SubTitle>
            <FormattedMessage defaultMessage="Sposób wysyłki" />
          </S.SubTitle>
          <S.Divider />
          <S.TextSummary data-test="shippingMethodName">
            {shippingMethodName}
          </S.TextSummary>
        </section>
        <section>
          <S.SubTitle>
            <FormattedMessage defaultMessage="Metoda płatności" />
          </S.SubTitle>
          <S.Divider />
          <S.TextSummary data-test="paymentMethodName">
            {paymentMethodName}
          </S.TextSummary>
        </section>
        <S.CustomerNoteContainer>
          {/* <S.SubTitle>
            <FormattedMessage defaultMessage="Notatka do zamówienia" />
          </S.SubTitle> */}
          <S.Divider />
          <S.TextSummary data-test="paymentMethodName">
            {noteRef.current}
          </S.TextSummary>
        </S.CustomerNoteContainer>
      </S.Grid>
      <S.ErrorMessages>
        <ErrorMessage errors={errors} />
      </S.ErrorMessages>
    </S.Wrapper>
  );
};

export { CheckoutReview };
