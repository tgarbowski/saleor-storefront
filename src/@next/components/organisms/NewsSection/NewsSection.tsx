import Link from "next/link";
import React, { useEffect } from "react";
import { generatePath } from "react-router";

import { paths } from "@paths";

import * as S from "./styles";
import { HomePagePages_news } from "./types";

const NewsSection: React.FC<{
  news: HomePagePages_news;
}> = ({ news }) => {
  useEffect(() => {
    console.log(news?.edges[0].node.content);
  }, []);

  return (
    <>
      <S.NewsSection>
        <S.NewsSectionContent>
          <S.NewsSectionContentLeft>
            <h1>Statyczne zdjęcie</h1>
          </S.NewsSectionContentLeft>
          <S.NewsSectionContentRight>
            <S.NewsHeading>Aktualności</S.NewsHeading>
            {news?.edges.slice(0, 3).map(({ node: newsElem }) => {
              const url =
                newsElem?.attributes[0]?.values[0]?.file?.url.split("/");
              const correctedUrl = `https://saleor-sandbox-media.s3.eu-central-1.amazonaws.com/${
                url[url.length - 2]
              }/${url[url.length - 1]}`;
              const { slug } = newsElem;
              const newsUrl = generatePath(paths.page, { slug });

              const contentStringify = JSON.parse(
                newsElem?.content
              ).blocks[0].data.text.replace(/^(.{128}[^\s]*).*/, "$1");

              return (
                <S.NewsItem key={newsElem?.id}>
                  <S.NewsItemLeft>
                    <S.NewsItemImg src={correctedUrl} alt="" />
                  </S.NewsItemLeft>
                  <S.NewsItemRight>
                    <S.NewsItemHeadingLink href={newsUrl}>
                      {newsElem?.title}
                    </S.NewsItemHeadingLink>
                    <S.NewsItemText>{contentStringify}</S.NewsItemText>
                  </S.NewsItemRight>
                </S.NewsItem>
              );
            })}
          </S.NewsSectionContentRight>
        </S.NewsSectionContent>
      </S.NewsSection>
    </>
  );
};

export default NewsSection;
