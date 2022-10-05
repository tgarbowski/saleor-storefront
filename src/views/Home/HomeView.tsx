import { ProductList_products } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import { NextPage } from "next";
import * as React from "react";

import { HomePagePages_news } from "@components/organisms/NewsSection/types";
import { FeaturedProducts } from "@utils/ssr";

import { MetaWrapper } from "../../components";
import {
  HomePageProducts,
  HomePageProducts_collections,
  HomePageProducts_sales,
} from "./gqlTypes/HomePageProducts";
import Page from "./Page";

import "./scss/index.scss";

export interface HomeViewProps {
  data: HomePageProducts & { featuredProducts: FeaturedProducts } & {
    collections: HomePageProducts_collections;
    sales: HomePageProducts_sales;
    products: ProductList_products;
    news: HomePagePages_news;
  };
}
export const HomeView: NextPage<HomeViewProps> = ({
  data: {
    shop,
    featuredProducts,
    categories,
    collections,
    sales,
    products,
    news,
  },
}) => (
  <div className="home-page">
    <MetaWrapper
      meta={{
        description: shop?.description || "",
        title: shop.name || "",
      }}
    >
      <Page
        featuredProducts={featuredProducts}
        categories={categories}
        shop={shop}
        collections={collections}
        sales={sales}
        products={products}
        news={news}
      />
    </MetaWrapper>
  </div>
);
