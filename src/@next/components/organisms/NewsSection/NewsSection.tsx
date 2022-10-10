import React from "react";
import { generatePath } from "react-router";

import { paths } from "@paths";

import * as S from "./styles";
import { HomePagePages_news } from "./types";

export const NewsSection: React.FC<{
  news: HomePagePages_news;
}> = ({ news }) => {
  const newsExist = () => {
    return news?.edges.length > 0;
  };

  return (
    <>
      {newsExist() ? (
        news?.edges.length >= 4 ? (
          <S.NewsSection className="container">
            <S.NewsSectionContent>
              <S.NewsSectionContentLeft>
                {news?.edges.slice(0, 1).map(({ node: newsElem }) => {
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
                    <S.LeftSectionItem key={newsElem?.id}>
                      <S.LeftSectionItemLeft>
                        <S.LeftSectionItemLeftImg src={correctedUrl} alt="" />
                      </S.LeftSectionItemLeft>
                      <S.LeftSectionItemRightLink href={newsUrl}>
                        <S.NewsSmallHeadingSecondary href={newsUrl}>
                          {newsElem?.title}
                        </S.NewsSmallHeadingSecondary>
                        <S.NewsItemText>
                          {contentStringify} [...]
                        </S.NewsItemText>
                      </S.LeftSectionItemRightLink>
                    </S.LeftSectionItem>
                  );
                })}
              </S.NewsSectionContentLeft>
              <S.NewsSectionContentRight>
                <S.NewsHeadingThird>Aktualności</S.NewsHeadingThird>
                {news?.edges.slice(1, 4).map(({ node: newsElem }) => {
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
                        <S.NewsHeadingSecondary href={newsUrl}>
                          {newsElem?.title}
                        </S.NewsHeadingSecondary>
                        <S.NewsItemText>
                          {contentStringify} [...]
                        </S.NewsItemText>
                      </S.NewsItemRight>
                    </S.NewsItem>
                  );
                })}
              </S.NewsSectionContentRight>
            </S.NewsSectionContent>
          </S.NewsSection>
        ) : (
          <S.NewsSectionSmall className="container">
            <S.NewsHeadingThird>Aktualności</S.NewsHeadingThird>
            <S.NewsSectionSmallContent>
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
                  <S.NewsSmallItem key={newsElem?.id}>
                    <S.NewsSmallItemImg src={correctedUrl} alt="" />
                    <S.NewsSmallHeadingSecondary href={newsUrl}>
                      {newsElem?.title}
                    </S.NewsSmallHeadingSecondary>
                    <S.NewsItemText>{contentStringify} [...]</S.NewsItemText>
                    <S.NewsSmallButton href={newsUrl}>
                      Czytaj dalej
                    </S.NewsSmallButton>
                  </S.NewsSmallItem>
                );
              })}
            </S.NewsSectionSmallContent>
          </S.NewsSectionSmall>
        )
      ) : (
        <></>
      )}
    </>
  );
};
