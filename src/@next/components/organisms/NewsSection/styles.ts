import { styled } from "@styles";

export const News = styled.div`
  margin-top: 8rem;
`;

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
  margin-bottom: 6.4rem;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 3.2rem;
  }
`;

export const NewsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 3.2rem !important;
`;

export const NewsHeading = styled.h2`
  max-width: 645px;
  font-size: 38px;
  line-height: 42px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 0.8rem;

  @media (max-width: $large-screen) {
    max-width: unset;
    text-align: center;
    font-size: 34px;
  }
`;

export const NewsSubtitle = styled.p`
  max-width: 705px;
  color: #4e595a;
  text-align: center;
`;

export const NewsItemText = styled.p`
  font-size: 16px;
  color: #4e595a;
  word-break: break-word;
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const NewsItemImg = styled.img`
  width: 100%;
  height: 337px;
  object-fit: cover;
  border-radius: 15px;
`;

export const NewsHeadingSecondary = styled.a`
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
