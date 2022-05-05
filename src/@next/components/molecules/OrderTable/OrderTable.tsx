import Link from "next/link";
import React from "react";
import { FormattedDate, FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { TaxedMoney } from "@components/containers";
import { paths } from "@paths";
import { commonMessages, translateOrderStatus } from "@temp/intl";

import { Thumbnail } from "..";
import * as S from "./styles";
import { IProps } from "./types";

export const OrderTable: React.FC<IProps> = ({ orders, isGuest }: IProps) => {
  const intl = useIntl();

  return (
    <S.Wrapper>
      <table>
        <S.TableHead>
          <tr>
            <S.IndexNumber>
              <FormattedMessage defaultMessage="Numer zamówienia" />
            </S.IndexNumber>
            <S.ProductsOrdered>
              <FormattedMessage defaultMessage="Zamówione produkty" />
            </S.ProductsOrdered>
            <S.DateOfOrder>
              <FormattedMessage defaultMessage="Data zamówienia" />
            </S.DateOfOrder>
            <S.Value>
              <FormattedMessage defaultMessage="Wartość" />
            </S.Value>
            <S.Status>
              <FormattedMessage {...commonMessages.status} />
            </S.Status>
          </tr>
        </S.TableHead>
        {orders.map(
          ({ created, token, number, lines, total, statusDisplay }) => {
            const date = new Date(created);
            return (
              <Link
                href={generatePath(
                  isGuest ? paths.guestOrderDetail : paths.accountOrderDetail,
                  { token }
                )}
                key={number!}
              >
                <S.Row
                  data-test="orderEntry"
                  data-test-id={number!}
                  key={number!}
                >
                  <S.IndexNumber>{number!}</S.IndexNumber>
                  <S.ProductsOrdered>
                    {lines.slice(0, 5).map(line => (
                      // <Link
                      //   href={generatePath(paths.product, {
                      //     slug: line!.variant!.product.slug,
                      //   })}
                      //   key={line!.variant!.product.id}
                      // >
                      //   <a>
                      //     <Thumbnail source={line!} />
                      //   </a>
                      // </Link>
                      <Thumbnail source={line!} />
                    ))}
                  </S.ProductsOrdered>
                  <S.DateOfOrder>
                    <FormattedDate value={date} />
                  </S.DateOfOrder>
                  <S.Value>
                    <TaxedMoney taxedMoney={total} />
                  </S.Value>
                  <S.Status>
                    {translateOrderStatus(statusDisplay!, intl)}
                  </S.Status>
                </S.Row>
              </Link>
            );
          }
        )}
      </table>
    </S.Wrapper>
  );
};
