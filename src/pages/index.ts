import { GetStaticProps } from "next";

import {
  channelSlug,
  incrementalStaticRegenerationRevalidate,
} from "@temp/constants";
import {
  getCollectionsQuery,
  getNewsIdQuery,
  getNewsQuery,
  getPagesQuery,
  getSalesQuery,
} from "@temp/sitemap/queries";
import { getFeaturedProducts, getSaleorApi } from "@utils/ssr";

import { homePageProductsQuery, HomeView, HomeViewProps } from "../views/Home";
import { HomePageProducts } from "../views/Home/gqlTypes/HomePageProducts";

export default HomeView;

export const getStaticProps: GetStaticProps<HomeViewProps> = async () => {
  const { apolloClient } = await getSaleorApi();
  const [data, featuredProducts] = await Promise.all([
    apolloClient
      .query<HomePageProducts>({
        query: homePageProductsQuery,
        variables: { channel: channelSlug },
      })
      .then(({ data }) => data),
    getFeaturedProducts(),
  ]);

  const [collectionsData] = await Promise.all([
    apolloClient
      .query<any>({
        query: getCollectionsQuery,
        variables: { channel: channelSlug, perPage: 5 },
      })
      .then(({ data }) => data),
  ]);

  const [pagesData] = await Promise.all([
    apolloClient
      .query<any>({
        query: getPagesQuery,
        variables: { channel: channelSlug, perPage: 50 },
      })
      .then(({ data }) => data),
  ]);

  const [salesData] = await Promise.all([
    apolloClient
      .query<any>({
        query: getSalesQuery,
        variables: { channel: channelSlug, perPage: 10 },
      })
      .then(({ data }) => data),
  ]);

  const [newsIdData] = await Promise.all([
    apolloClient
      .query<any>({
        query: getNewsIdQuery,
      })
      .then(({ data }) => data),
  ]);

  const [newsData] = await Promise.all([
    apolloClient
      .query<any>({
        query: getNewsQuery,
        variables: {
          id: newsIdData.pageTypes.edges[0].node.id,
          channelSlug,
        },
      })
      .then(({ data }) => data),
  ]);

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      data: {
        ...data,
        featuredProducts,
        ...collectionsData,
        ...salesData,
        ...pagesData,
        news: newsData.pages,
      },
    },
  };
};
