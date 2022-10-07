import { NextPage } from "next";
import * as React from "react";
import { useMemo } from "react";
import { generatePath } from "react-router";

import { paths } from "@paths";
import { shopName } from "@temp/constants";
import { FeaturedProducts } from "@utils/ssr";

import { MetaWrapper, NotFound } from "../../components";
import { Article_page } from "./gqlTypes/Article";
import Page from "./Page";

import "./scss/index.scss";

export interface ArticleViewProps {
  params: { slug: string };
  data: {
    article: Article_page | null;
    featuredProducts: FeaturedProducts;
  };
}

export const ArticleView: NextPage<ArticleViewProps> = ({ data }) => {
  const [canDisplay] = useMemo(() => [data?.article], [data]);

  const getBreadcrumbs = (article: Article_page) => [
    {
      link: generatePath(paths.page, { slug: article.slug }),
      value: article.title,
    },
  ];

  return canDisplay ? (
    <MetaWrapper
      meta={{
        description: data.article.seoDescription,
        title: data.article.seoTitle,
      }}
    >
      <Page breadcrumbs={getBreadcrumbs(data.article)} page={data.article} />
    </MetaWrapper>
  ) : (
    <NotFound />
  );
};
