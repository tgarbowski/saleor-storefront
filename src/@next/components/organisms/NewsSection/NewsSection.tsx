import React from "react";
import { generatePath } from "react-router";

import { paths } from "@paths";
import { awsMediaBucket } from "@temp/constants";

import * as S from "./styles";
import { HomePagePages_news } from "./types";

export const NewsSection: React.FC<{
  news: HomePagePages_news;
}> = ({ news }) => {
  const newsExist = () => {
    return news?.edges.length > 0;
  };

  return (
    <S.News>
      {newsExist() && (
        <S.NewsSection className="container">
          <S.NewsSectionWrapper>
            <S.NewsHeading>
              Co nowego u nas? Zobacz najnowsze aktualności
            </S.NewsHeading>
            <S.NewsSubtitle>
              Dzięki naszym wpisom dowiesz się pierwszy o nowościach, promocjach
              i wydarzeniach, które przygotowaliśmy dla Ciebie.
            </S.NewsSubtitle>
          </S.NewsSectionWrapper>
          <S.NewsSectionContent>
            {news?.edges.map(({ node: newsElem }) => {
              const url =
                newsElem?.attributes[0]?.values[0]?.file?.url.split("/");
              const correctedUrl = `${awsMediaBucket}/${url[url.length - 2]}/${
                url[url.length - 1]
              }`;
              const { slug } = newsElem;
              const newsUrl = generatePath(paths.page, { slug });

              const contentStringify = JSON.parse(
                newsElem?.content
              ).blocks[0].data.text.replace(/^(.{128}[^\s]*).*/, "$1");

              return (
                <S.NewsItem key={newsElem?.id}>
                  <S.NewsItemImg src={correctedUrl} alt="" />
                  <S.NewsHeadingSecondary href={newsUrl}>
                    {newsElem?.title}
                  </S.NewsHeadingSecondary>
                  <S.NewsItemText>{contentStringify} [...]</S.NewsItemText>
                </S.NewsItem>
              );
            })}
          </S.NewsSectionContent>
        </S.NewsSection>
      )}
    </S.News>
  );
};
