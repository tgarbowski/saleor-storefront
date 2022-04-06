import React from "react";

import Logo from "@styles/Logo";
import UnderConstructionImg from "@styles/UnderConstructionImage";

import * as S from "./styles";

export const UnderConstruction = () => {
  return (
    <S.UnderConstructionWrapper>
      <S.UnderConstructionLogo src={Logo} alt="" />
      <S.UnderConstructionTitle>
        Będziemy z Wami już{" "}
        <S.UnderConstructionTitleColor>niedługo.</S.UnderConstructionTitleColor>
      </S.UnderConstructionTitle>
      <S.UnderConstructionText>
        Zapraszamy już w Maju, na wielkie otwarcie sklepu z jakościową odzieżą
        używaną ONLINE.
      </S.UnderConstructionText>
      <S.UnderConstructionTextSmall>
        Pozdrawiamy - zespół Fashion4You
      </S.UnderConstructionTextSmall>
      <S.UnderConstructionPeopleImg src={UnderConstructionImg} alt="" />
    </S.UnderConstructionWrapper>
  );
};
