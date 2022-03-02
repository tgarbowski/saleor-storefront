import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

import { paths } from "@paths";

import Button from "../Button";

import "./scss/index.scss";

interface NotFoundProps {
  message?: string;
}

const NotFound: NextPage<NotFoundProps> = () => {
  const currentPath = window.location.pathname.split("/");
  return (
      <div className="not-found-page">
        {currentPath[1] === "product" ? (
          <h2 className="not-found-page__header">
            <FormattedMessage defaultMessage="Ta oferta nie istnieje :(" />
          </h2>
        ) : currentPath[1] === "category" ? (
          <h2 className="not-found-page__header">
            <FormattedMessage defaultMessage="Niestety nie znalezliśmy tej kategorii" />
          </h2>
        ) : (
          <h2 className="not-found-page__header">
            <FormattedMessage defaultMessage="Nie znalezliśmy strony której szukasz" />
          </h2>
        )}
      <div className="not-found-page__ruler" />
      <div className="not-found-page__message">
        <p>
          <FormattedMessage defaultMessage="Nie możemy znaleźć strony, której szukasz!" />{" "}
        </p>
        <p>
          <FormattedMessage defaultMessage="Być może błędnie wpisałeś adres lub strona mogła zostać przeniesiona." />{" "}
        </p>
        <p>
          <FormattedMessage defaultMessage="Przepraszamy za błąd i mamy nadzieję, że będziesz miał dobry dzień." />
        </p>
      </div>
      <div className="not-found-page__button">
        <Link href={paths.home}>
          <a>
            <Button testingContext="404pageGotoHomeButton" secondary>
              <FormattedMessage defaultMessage="Wróć na stronę główną" />
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
