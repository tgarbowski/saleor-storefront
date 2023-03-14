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

export const NewsHeading = styled.h2`
  max-width: 893px;
  font-size: 38px;
  line-height: 55px;
  font-weight: 700;
  color: #000;
  margin-bottom: 3.2rem;
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
