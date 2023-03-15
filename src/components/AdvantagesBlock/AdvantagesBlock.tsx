import * as React from "react";

import { CreditIcon, ParcelIcon, ShippedIcon } from "@styles/icons";

import { AdvantagesBlockItem } from "./AdvantagesBlockItem";

export const AdvantagesBlock = () => {
  return (
    <section className="advantages-block-section">
      <div className="advantages-block-section-wrapper container">
        <h2 className="advantages-block-section-wrapper-title">
          Zapewniamy najlepszą obsługę <span>klienta</span>
        </h2>
        <p className="advantages-block-section-wrapper-text">
          Nasi doświadczeni specjaliści są zawsze gotowi, by odpowiedzieć na
          Twoje pytanie, rozwiązać problemy i pomóc Ci w zakupach.
        </p>
      </div>
      <div className="advantages-block-section-container container">
        <AdvantagesBlockItem
          title="Szybka wysyłka"
          text="Oferujemy szybką i sprawną wysyłkę"
          image={ShippedIcon}
        />
        <AdvantagesBlockItem
          title="Bezpieczne płatności"
          text="Akceptujemy płatności popularnym PayU"
          image={CreditIcon}
        />
        <AdvantagesBlockItem
          title="Zwroty"
          text="Masz 14 dni na zmianę zdania"
          image={ParcelIcon}
        />
      </div>
    </section>
  );
};
