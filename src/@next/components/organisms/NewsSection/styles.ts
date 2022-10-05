import Link from "next/link";

import { styled } from "@styles";

export const NewsSection = styled.div`
  width: 100%;
`;

export const NewsSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NewsSectionContentLeft = styled.div`
  width: 50%;
`;

export const NewsSectionContentRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const NewsHeading = styled.h2`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;

export const NewsItemHeadingLink = styled(Link)`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;

export const NewsItemText = styled.p`
  font-size: 18px;
  color: gray;
`;

export const NewsItemImg = styled.img`
  width: 100%;
`;

export const NewsItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const NewsItemLeft = styled.div`
  width: 100%;
`;
export const NewsItemRight = styled.div`
  display: flex;
  flex-direction: column;
`;
