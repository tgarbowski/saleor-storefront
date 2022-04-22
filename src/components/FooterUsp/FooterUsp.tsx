import { ShippedIcon, CreditIcon, ParcelIcon, DashedRectangleImg } from "@styles/FooterUspIcons";
import * as React from "react";
import { FooterUspItem } from "./FooterUspItem";
import ReactSVG from "react-svg";

import "./scss/index.scss";

export const FooterUsp = () => {
    return (
        <section className="footer-usp-section">
          <ReactSVG path={DashedRectangleImg} className="footer-usp-dashed-image--1"/>
          <ReactSVG path={DashedRectangleImg} className="footer-usp-dashed-image--2"/>
          <ReactSVG path={DashedRectangleImg} className="footer-usp-dashed-image--3"/>
          <div className="container footer-usp-section-container">
            <FooterUspItem 
              title="SZYBKA WYSYŁKA"
              text="OFERUJEMY SZYBKĄ I MIĘDZYNARODOWĄ WYSYŁKĘ"
              image={ShippedIcon}
            />
            <FooterUspItem 
              title="BEZPIECZNE PŁATNOŚCI"
              text="AKCEPTUJEMY PŁATNOŚCI POPULARNYM PAYU"
              image={CreditIcon}
            />
            <FooterUspItem 
              title="ZWROTY"
              text="MASZ 14 DNI NA ZMIANĘ ZDANIA"
              image={ParcelIcon}
            />
          </div>
        </section>
      );
    };
