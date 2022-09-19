import { GetStaticProps } from "next";

import {
  channelSlug,
  incrementalStaticRegenerationRevalidate,
} from "@temp/constants";
import { getCollectionsQuery, getSalesQuery } from "@temp/sitemap/queries";
import { getFeaturedProducts, getSaleorApi, getSaleProducts } from "@utils/ssr";

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

  const [salesData] = await Promise.all([
    apolloClient
      .query<any>({
        query: getSalesQuery,
        variables: { channel: channelSlug, perPage: 5 },
      })
      .then(({ data }) => data),
    getSaleProducts(),
  ]);

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      data: { ...data, featuredProducts, ...collectionsData, ...salesData },
    },
  };
};
