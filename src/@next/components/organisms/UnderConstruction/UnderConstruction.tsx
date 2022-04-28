import React from 'react';

import Logo from '@styles/Logo';
import UnderConstructionImg from '@styles/UnderConstructionImage';
import { SOCIAL_MEDIA } from '@temp/core/config';

import SocialMediaIcon from '../../../../components/SocialMediaIcon/index';
import * as S from './styles';

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
      <S.SocialMediaSection>
        {SOCIAL_MEDIA.map(medium => (
          <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
        ))}
      </S.SocialMediaSection>
      <S.UnderConstructionPeopleImg src={UnderConstructionImg} alt="" />
    </S.UnderConstructionWrapper>
  );
};
