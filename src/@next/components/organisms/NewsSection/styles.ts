import { styled } from "@styles";

export const NewsSection = styled.div`
  width: 100%;
`;

export const NewsSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
  height: 100vh;
`;

export const NewsSectionContentLeft = styled.div`
  width: 50%;
`;

export const NewsSectionContentRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const LeftSectionItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
`;

export const LeftSectionItemLeft = styled.div`
  width: 100%;
`;

export const LeftSectionItemRightLink = styled.a`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 4rem;
  background-color: white;
  padding: 3rem;
  gap: 1.5rem;
`;

export const NewsHeading = styled.h2`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;

export const NewsItemText = styled.p`
  font-size: 18px;
  color: gray;
  word-break: break-word;
`;

export const NewsItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LeftSectionItemLeftImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const NewsItem = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export const NewsItemLeft = styled.div`
  width: 100vh;
  vertical-align: middle;
  transition: 0.5s all ease-in-out;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const NewsItemRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsHeadingPrimary = styled.a`
  font-size: 28px;
  word-break: break-word;
  width: 100%;
  max-width: 524px;
  font-weight: 700;
  line-height: 2rem;
`;

export const NewsHeadingSecondary = styled.a`
  font-size: 24px;
  word-break: break-word;
  width: 100%;
  max-width: 325px;
  font-weight: 700;
  line-height: 2rem;
`;

export const NewsHeadingThird = styled.h2`
  font-size: 42px;
  word-break: break-word;
  width: 100%;
  max-width: 524px;
  font-weight: 700;
  line-height: 2rem;
`;

export const NewsSectionSmallContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 3rem;
  padding-bottom: 8rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 1339px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
  }
  @media (min-width: 782px) {
    flex-wrap: nowrap;
  }
`;

export const NewsSectionSmall = styled.div`
  width: 100%;
  @media (max-width: 1339px) {
    padding: 0.2rem;
  }
`;

export const NewsSmallItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const NewsSmallItemImg = styled.img`
  width: 100%;
  height: 337px;
  object-fit: cover;
`;

export const NewsSmallHeadingSecondary = styled.a`
  font-size: 24px;
  word-break: break-word;
  width: 100%;
  max-width: 100%;
  font-weight: 700;
  line-height: 2rem;

  transition: 0.4s all ease-in-out;

  &:hover {
    transition: 0.4s all ease-in-out;
    color: ${props => props.theme.colors.primary};
  }
`;

export const NewsSmallButton = styled.a`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  transition: 0.4s all ease-in-out;

  &:hover {
    transition: 0.4s all ease-in-out;
    color: ${props => props.theme.colors.primary};
  }
`;