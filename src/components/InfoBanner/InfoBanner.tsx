import React from "react";

import "./scss/index.scss";

export const InfoBanner = () => {
  return (
    <section className="marketing-bar-global">
      <div className="marketing-bar-content">
        <div className="marketing-bar-content-description">
          UŻYJ NASZEGO KODU{" "}
          <strong className="marketing-bar-content-description-bold">
            DOSTAWA0
          </strong>{" "}
          ABY OTRZYMAĆ DARMOWĄ DOSTAWĘ DLA ZAMÓWIEŃ POWYŻEJ 100ZŁ.
        </div>
      </div>
    </section>
  );
};
