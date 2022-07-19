import * as React from "react";
import ReactSVG from "react-svg";

import {
  CreditIcon,
  DashedRectangleImg,
  ParcelIcon,
  ShippedIcon,
} from "@styles/icons";

import { FooterUspItem } from "./FooterUspItem";

export const FooterUsp = () => {
  return (
    <section className="footer-usp-section">
      <ReactSVG
        path={DashedRectangleImg}
        className="footer-usp-dashed-image--1"
      />
      <ReactSVG
        path={DashedRectangleImg}
        className="footer-usp-dashed-image--2"
      />
      <ReactSVG
        path={DashedRectangleImg}
        className="footer-usp-dashed-image--3"
      />
      <div className="container footer-usp-section-container">
        <FooterUspItem
          title="SZYBKA WYSYŁKA"
          text="Oferujemy szybką i sprawną wysyłkę"
          image={ShippedIcon}
        />
        <FooterUspItem
          title="BEZPIECZNE PŁATNOŚCI"
          text="Akceptujemy płatności popularnym PayU"
          image={CreditIcon}
        />
        <FooterUspItem
          title="ZWROTY"
          text="Masz 14 dni na zmianę zdania"
          image={ParcelIcon}
        />
      </div>
    </section>
  );
};
