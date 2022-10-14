import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

import { paths } from "@paths";
import { NotFoundPageImage, NotFoundProductImage } from "@styles/pictures";

import Button from "../Button";

import "./scss/index.scss";

interface NotFoundProps {
  message?: string;
}

const NotFound: NextPage<NotFoundProps> = () => {
  const currentPath = window.location.pathname.split("/");
  return (
    <div className="not-found-page">
      <div className="not-found-page-container">
        <div className="not-found-page-container-left">
          <h3 className="not-found-page-container-text">Oops!</h3>
          {currentPath[1] === "product" ? (
            <>
              <h2 className="not-found-page-container-text-second">
                Ten produkt nie istnieje lub został przeniesiony
              </h2>
              <p className="not-found-page-container-paragraph">
                Być może błędnie wpisałeś adres produktu lub produkt nie
                istnieje.
              </p>
            </>
          ) : currentPath[1] === "category" ? (
            <>
              <h2 className="not-found-page-container-text-second">
                Ta kategoria nie istnieje lub została przeniesiona
              </h2>
              <p className="not-found-page-container-paragraph">
                Być może błędnie wpisałeś adres kategorii lub ona nie istnieje.
              </p>
            </>
          ) : currentPath[1] === "sale" ? (
            <>
              <h2 className="not-found-page-container-text-second">
                Ta wyprzedaż nie istnieje lub została przeniesiona
              </h2>
              <p className="not-found-page-container-paragraph">
                Być może błędnie wpisałeś adres wyprzedaży lub ona nie istnieje.
              </p>
            </>
          ) : (
            <>
              <h2 className="not-found-page-container-text-second">
                Nie mogliśmy znaleźć strony, której szukasz
              </h2>
              <p className="not-found-page-container-paragraph">
                Być może błędnie wpisałeś adres lub strona mogła zostać
                przeniesiona.
              </p>
            </>
          )}
          <div className="not-found-page-container-button">
            <Link href={paths.home}>
              <a>
                <Button testingContext="404pageGotoHomeButton" third>
                  <FormattedMessage defaultMessage="Wróć na stronę główną" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="not-found-page-container-right">
          {currentPath[1] === "product" ? (
            <img
              src={NotFoundProductImage}
              alt=""
              className="not-found-product-img"
            />
          ) : currentPath[1] === "category" ? (
            <img
              src={NotFoundProductImage}
              alt=""
              className="not-found-product-img"
            />
          ) : currentPath[1] === "sale" ? (
            <img
              src={NotFoundProductImage}
              alt=""
              className="not-found-product-img"
            />
          ) : (
            <img
              src={NotFoundPageImage}
              alt=""
              className="not-found-page-img"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
