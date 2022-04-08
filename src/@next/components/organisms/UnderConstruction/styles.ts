import { styled } from "@styles";

export const UnderConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  @media (max-width: 980px) {
    padding: 0 20px;
  }
`;

export const UnderConstructionTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  max-width: 1033px;
  word-break: break-word;
  display: inherit;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    font-size: 42px;
    line-height: 120%;
  }
`;

export const UnderConstructionTitleColor = styled.p`
  color: #65c947;
  margin-left: 18px;
  @media (max-width: 980px) {
    margin: 14px 0 0 0;
  }
`;

export const UnderConstructionText = styled.p`
  font-size: 30px;
  font-weight: 600;
  width: 100%;
  word-break: break-word;
  text-align: center;
  max-width: 1033px;
  line-height: 130%;
  margin-top: 24px;
  @media (max-width: 980px) {
    font-size: 18px;
  }
`;

export const UnderConstructionTextSmall = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 25px;
`;

export const UnderConstructionLogo = styled.img`
  object-fit: cover;
  width: 17rem;
  height: 13rem;
  margin-bottom: 35px;
  @media (max-width: 980px) {
    width: 100%;
    height: 6rem;
    max-width: 13rem;
    margin-bottom: 17px;
  }
`;

export const UnderConstructionPeopleImg = styled.img`
  @media (max-width: 980px) {
    object-fit: cover;
    width: 100%;
  }
`;
