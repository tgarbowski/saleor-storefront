import React from "react";

import {
  F4UUnderConstructionLogoImage,
  FacebookSmallIcn,
  InstagramSmallIcn,
} from "@styles/pictures";

import * as S from "./styles";

export const UnderConstruction = () => {
  return (
    <S.UnderConstructionWrapper>
      <S.TopInformationTitle>
        Baw się Modą z
        <S.TopInformationShopTitle>Fashion4you</S.TopInformationShopTitle>
      </S.TopInformationTitle>
      <S.TopInformationLogo
        src={F4UUnderConstructionLogoImage}
        alt="fashion4you"
      />

      <S.CloudMainSmallFirst>
        <S.CloudMainSmallFirstText>
          Kupuj ubrania w super atrakcyjnych cenach
        </S.CloudMainSmallFirstText>
      </S.CloudMainSmallFirst>

      <S.CloudInfoMain>
        <S.MainContentTitle>Będziemy z Wami już niedługo.</S.MainContentTitle>
        <S.MainContentSub>
          Zapraszamy już{" "}
          <S.MainContentSubDate>1 Czerwca 2022r.</S.MainContentSubDate>, na
          wielkie otwarcie sklepu z jakościową odzieżą używaną ONLINE.
        </S.MainContentSub>
        <S.MainContentSmallText>
          Pozdrawiamy - zespół Fashion4You
        </S.MainContentSmallText>
      </S.CloudInfoMain>

      <S.CloudMainSmallSecond>
        <S.CloudMainSmallSecondText>
          Bądź EKO i daj drugie życie stylowym ubraniom
        </S.CloudMainSmallSecondText>
      </S.CloudMainSmallSecond>

      <S.SocialLinksBlock>
        <S.SocialLinksTitle>Znajdziesz nas na:</S.SocialLinksTitle>
        <S.SocialLinkBlock href="https://www.facebook.com/Fashion4you-107849631906695">
          <S.SocialLinkImg src={FacebookSmallIcn} alt="" />
          <S.SocialLinkText>/fashion4youpl</S.SocialLinkText>
        </S.SocialLinkBlock>
        <S.SocialLinkBlock href="https://instagram.com/fashion4you_goeco">
          <S.SocialLinkImg src={InstagramSmallIcn} alt="" />
          <S.SocialLinkText>/fashion4you</S.SocialLinkText>
        </S.SocialLinkBlock>
      </S.SocialLinksBlock>
    </S.UnderConstructionWrapper>
  );
};
