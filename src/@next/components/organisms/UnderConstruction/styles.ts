import {createGlobalStyle} from 'styled-components';

import { styled } from "@styles";
import UnderConstructionImage, { CloudMainImage, CloudMainSmallImageFirst, CloudMainSmallImageSecond } from '@styles/UnderConstructionImage';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Gill Sans Ultra Bold';
    src: url("../../fonts/Gill-Sans-MT-Ultra-Bold") format('truetype')
  }
  @font-face {
    font-family: 'Bittermilk';
    src: url("../../fonts/Bittermilk") format('truetype')
  }
  @font-face {
    font-family: 'Archivo bold';
    src: url("../../fonts/archivo-bold") format('truetype')
  }
  @font-face {
    font-family: 'Archivo regular';
    src: url("../../fonts/archivo-regular") format('truetype')
  }
`;

export const UnderConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  background-image: url('${UnderConstructionImage}');
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  position: relative;
  justify-content: center;
`;

export const UnderConstructionImageBlock = styled.div`
  position: relative;
  display: block;
`;

export const UnderConstructionImageFirst = styled.img`
  position: absolute;
  top: -100px;
  right: 200px;
  display: block;
  width: 100%;
`;

export const TopInformationTitle = styled.h1`
  font-size: 66px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 43px;
  font-family: 'Bittermilk', sans-serif;
  @media (max-width: 1172px) {
    position: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }
`;

export const TopInformationShopTitle = styled.span`
  color: #84D9D8;
`;

export const TopInformationLogo = styled.img`
  object-fit: cover;
  width: 17rem;
  height: 13rem;
  margin-bottom: 35px;
  position: absolute;
  right: 62px;
  top: 48px;
  @media (max-width: 1172px) {
    width: 10rem;
    height: 7rem;
    position: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const CloudMainSmallFirst = styled.div`
  background-image: url('${CloudMainSmallImageFirst}');
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  width: 283px;
  height: 270px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 40px;
  top: 40px;
  @media (max-width: 1172px) {
    display: none;
  }
`;

export const CloudMainSmallFirstText = styled.div`
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(-45deg);
  max-width: 257px;
  font-family: 'Bittermilk', sans-serif;
  line-height: 35px;
`;

export const CloudMainSmallSecond = styled.div`
  background-image: url('${CloudMainSmallImageSecond}');
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  width: 255px;
  height: 253px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 36px;
  bottom: 10px;
  @media (max-width: 1172px) {
    display: none;
  }
`;

export const CloudMainSmallSecondText = styled.div`
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(45deg);
  max-width: 225px;
  font-family: 'Bittermilk', sans-serif;
  line-height: 35px;
`;


export const CloudInfoMain = styled.main`
  background-image: url('${CloudMainImage}');
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  width: 977px;
  height: 442px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 84px;
  @media (max-width: 1172px) {
    background-image: none;
    margin-top: 0;
    height: unset;
    width: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    padding: 0 10px;
  }
`;

export const MainContentTitle = styled.h2`
  color: #fff;
  font-size: 59px;
  font-family: 'Bittermilk', sans-serif;
  line-height: 35px;
  @media (max-width: 1172px) {
    font-size: 40px;
  }
`;

export const MainContentSub = styled.p`
  color: #fff;
  font-size: 32px;
  margin-top: 22px;
  text-align: center;
  font-family: 'Bittermilk', sans-serif;
  line-height: 50px;
`;

export const MainContentSmallText = styled.span`
  color: #fff;
  font-family: 'Bittermilk', sans-serif;
  font-size: 30px;
  line-height: 35px;
  margin-top: 16px;
`;

export const MainContentSubDate = styled.span`
  color: #222;
  font-weight: bold;
  font-size: 40px;
`;

export const SocialLinksBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 120px;
  @media (max-width: 1172px) {
    margin-top: 42px;
    position: unset;
    left: 0;
    bottom: 0;
  }
`;

export const SocialLinksTitle = styled.div`
  background: #84D9D8;
  padding: 12px 36px;
  border-radius: 0 45px 45px 0;
  color: #104F5C;
  font-family: 'Archivo bold', sans-serif;
  font-weight: bold;
  @media (max-width: 1172px) {
    border-radius: 45px;
  }
`;

export const SocialLinkText = styled.p`
  color: #fff;
  font-family: 'Archivo regular', sans-serif;
`;

export const SocialLinkImg = styled.img`
  object-fit: cover;
`;

export const SocialLinkBlock = styled.a`
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;