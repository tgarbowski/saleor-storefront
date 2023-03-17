import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { generatePath } from "react-router";

import { ErrorMessage } from "@components/atoms";
import { AddressSummary } from "@components/molecules";
import { shopInfoQuery, useTypedQuery } from "@graphql/queries";
import { paths } from "@paths";
import { shopName } from "@temp/constants";
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
  isTermsAccepted,
  handleTermsChange,
}) => {
  const { data } = useTypedQuery(shopInfoQuery);
  const companyAddress = data?.shop?.companyAddress || null;

  const pageSlugF4U = `regulamin`;
  const pageSlugC4U = `regulamin-c4u`;

  const pageLink = generatePath(paths.page, {
    slug: shopName === "FASHION4YOU" ? pageSlugF4U : pageSlugC4U,
  });

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
            <>
              <S.Wrapper data-test="addressTile">
                <p style={{ color: "red" }}>
                  *Po odbiór osobisty, prosimy zgłosić się pod podany adres:
                </p>
                <br />
                <p>Nazwa firmy: {companyAddress.companyName}</p>
                <p>{companyAddress.streetAddress1}</p>
                <p>{companyAddress.city}</p>
                <p>{companyAddress.postalCode}</p>
                <p>{companyAddress.phone}</p>
              </S.Wrapper>
            </>
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
      <S.TermsSection>
        <S.TermsSectionInput>
          <S.CheckboxInput
            checked={isTermsAccepted}
            onChange={() => handleTermsChange(!isTermsAccepted)}
          />
          <p>
            Potwierdzam, że zapoznałem/am się z treścią
            <Link href={pageLink} key="regulamin">
              <a
                href={pageLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginLeft: "0.3rem",
                  marginRight: "0.3rem",
                  textDecoration: "underline",
                }}
              >
                regulaminu
              </a>
            </Link>
            sklepu oraz akceptuję jego postanowienia.
          </p>
        </S.TermsSectionInput>
        <S.ErrorMessages>
          <ErrorMessage errors={errors} />
        </S.ErrorMessages>
      </S.TermsSection>
    </S.Wrapper>
  );
};

export { CheckoutReview };
