import { styled } from "@styles";
import UnderConstructionImage, { CloudMainImage, CloudMainSmallImageFirst, CloudMainSmallImageSecond } from '@styles/UnderConstructionImage';

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
  font-size: 39px;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 26px;
  font-family: 'Bittermilk',sans-serif;
  @media (max-width: 1172px) {
    position: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
`;

export const TopInformationShopTitle = styled.span`
  color: #84D9D8;
`;

export const TopInformationLogo = styled.img`
  object-fit: cover;
  width: 11rem;
  height: 9rem;
  margin-bottom: 35px;
  position: absolute;
  right: 62px;
  top: 13px;
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
  width: 231px;
  height: 220px;
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
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(-45deg);
  max-width: 212px;  
  font-family: 'Bittermilk', sans-serif;
  line-height: 35px;
`;

export const CloudMainSmallSecond = styled.div`
  background-image: url('${CloudMainSmallImageSecond}');
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  width: 184px;
  height: 183px;
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
  font-size: 21px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  max-width: 154px;
  font-family: 'Bittermilk',sans-serif;
  line-height: 35px;
`;


export const CloudInfoMain = styled.main`
  background-image: url('${CloudMainImage}');
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
  width: 795px;
  height: 360px;
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
  font-size: 48px;
  font-family: 'Bittermilk', sans-serif;
  line-height: 35px;
  @media (max-width: 1172px) {
    font-size: 40px;
  }
`;

export const MainContentSub = styled.p`
  color: #fff;
  font-size: 27px;
  margin-top: 22px;
  text-align: center;
  font-family: 'Bittermilk',sans-serif;
  line-height: 50px;
  width: 684px;
  @media (max-width: 1172px) {
    width: unset;
    max-width: 738px;
  }
`;

export const MainContentSmallText = styled.span`
  color: #fff;
  font-family: 'Bittermilk', sans-serif;
  font-size: 27px;
  line-height: 35px;
  margin-top: 16px;
`;

export const MainContentSubDate = styled.span`
  color: #222;
  font-weight: bold;
  font-size: 34px;
`;

export const SocialLinksBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 52px;
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