import { ProductList_products } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";
import Link from "next/link";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { NewsSection } from "@components/organisms/NewsSection/NewsSection";
import { HomePagePages_news } from "@components/organisms/NewsSection/types";
import { paths } from "@paths";
import {
  DefaultHero,
  KidCategoryImg,
  ManCategoryImg,
  WomanCategoryImg,
} from "@styles/pictures";
import { AdvantagesBlock } from "@temp/components/AdvantagesBlock/AdvantagesBlock";
import { shopName } from "@temp/constants";
import { FeaturedProducts } from "@utils/ssr";

import { Button, ProductsFeatured } from "../../components";
import { structuredData } from "../../core/SEO/Homepage/structuredData";
import { Pages_pages } from "../Article/gqlTypes/Pages";
import {
  HomePageProducts_categories,
  HomePageProducts_collections,
  HomePageProducts_sales,
  HomePageProducts_shop,
} from "./gqlTypes/HomePageProducts";

import "./scss/index.scss";

const Page: React.FC<{
  categories: HomePageProducts_categories;
  collections: HomePageProducts_collections;
  sales: HomePageProducts_sales;
  products: ProductList_products;
  featuredProducts: FeaturedProducts;
  shop: HomePageProducts_shop;
  pages: Pages_pages;
  news: HomePagePages_news;
}> = ({
  categories,
  featuredProducts,
  shop,
  collections,
  sales,
  news,
  pages,
}) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const collectionsExist = () => {
    return collections && collections.edges && collections.edges.length > 0;
  };
  const salesExist = () => {
    return sales && sales.edges && sales.edges.length > 0;
  };

  const intl = useIntl();

  const visibleCategory =
    shopName === "FASHION4YOU"
      ? categories.edges.slice(0, -2)
      : categories.edges.slice(0, -2);
  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <div
        className="home-page__hero"
        style={
          featuredProducts.backgroundImage
            ? {
                backgroundImage: `url(${featuredProducts.backgroundImage.url})`,
              }
            : {
                backgroundImage: `url(${DefaultHero})`,
              }
        }
      >
        <div className="home-page__hero-text">
          <div>
            <h1 className="home-page__hero__title">
              <FormattedMessage
                defaultMessage="{shopname}"
                values={{ shopname: shopName }}
              />
            </h1>
          </div>
          <div>
            <span className="home-page__hero__subtitle">
              <p>
                <FormattedMessage
                  values={{ shopname: shopName }}
                  defaultMessage="{shopname} to sklep z jakościową odzieżą używaną. Różne marki w jednym miejscu. Przekonaj się sam!"
                />
              </p>
            </span>
          </div>
        </div>
        <div className="home-page__hero-action">
          {categoriesExist() && (
            <Link
              href={generatePath(paths.category, {
                slug: categories.edges[2].node.slug,
              })}
            >
              <a>
                <Button
                  testingContext="homepageHeroActionButton"
                  aria-label="homepageHeroActionButton"
                >
                  <FormattedMessage defaultMessage="Sprawdź ofertę" />
                </Button>
              </a>
            </Link>
          )}
        </div>
        <div className="scroll-down">
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0" />
            <path className="a2" d="M0 20 L30 52 L60 20" />
            <path className="a3" d="M0 40 L30 72 L60 40" />
          </svg>
        </div>
      </div>
      <AdvantagesBlock />
      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container home-page__categories_container">
            <div className="home-page__categories__list">
              {visibleCategory.map(({ node: category }) => {
                const contentStringify = JSON.parse(
                  category.description
                )?.blocks[0].data.text.replace(/^(.{128}[^\s]*).*/, "$1");
                return shopName === "CLOTHES4U" &&
                  category.name === "Detal" ? null : (
                  <div key={category.id} className="home-page__category-item">
                    <div className="home-page__categories__text-image">
                      {category.name === "Kobieta" ? (
                        <img
                          className="home-page__categories__img"
                          src={WomanCategoryImg}
                          alt="Woman category"
                        />
                      ) : category.name === "Mężczyzna" ? (
                        <img
                          className="home-page__categories__img"
                          src={ManCategoryImg}
                          alt="Man category"
                        />
                      ) : (
                        category.name === "Dziecko" && (
                          <img
                            className="home-page__categories__img"
                            src={KidCategoryImg}
                            alt="kid category"
                          />
                        )
                      )}
                      <div className="home-page__categories-wrapper">
                        <Link
                          href={generatePath(paths.category, {
                            slug: category.slug,
                          })}
                          key={category.id}
                        >
                          <a className="home-page__categories__text-title">
                            {category.name}
                          </a>
                        </Link>
                        <p className="home-page__categories__text-subtitle">
                          {contentStringify}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <ProductsFeatured
        products={featuredProducts.products}
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />
      {salesExist() && (
        <div className="home-page__sale-wrapper">
          <div className="home-page__sale-wrapper-content container">
            {sales?.edges.map(({ node: sale }) => {
              if (sale?.products?.totalCount > 0) {
                return (
                  <Link
                    href={generatePath(paths.sale, {
                      id: sale.id,
                    })}
                  >
                    <a className="home-page__sale-wrapper-content-item">
                      {sale.name.match(/\d/) ? (
                        <h2 className="sale-with-percent">
                          <span>Promocja!</span>
                          <h3>-{sale.name}%</h3>
                        </h2>
                      ) : (
                        <span className="sale-without-percent">
                          <span>Promocja!</span>
                          <h3>{sale.name}</h3>
                        </span>
                      )}
                    </a>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      )}
      {collectionsExist() && (
        <div className="home-page__collections">
          <div className="home-page__collections_container container">
            <h2 className="home-page__collections_container-heading">
              <FormattedMessage defaultMessage="Kolekcje" />
            </h2>
            <p className="home-page__collections_container-text">
              <FormattedMessage defaultMessage="Poznaj nasze popularne kolekcje i wybierz coś dla siebie!" />
            </p>
            <div className="home-page__collections__list">
              {collections?.edges.map(({ node: collection }) => {
                return collection.name === "O nas" ? (
                  <></>
                ) : (
                  <div
                    key={collection.id}
                    className="home-page__collection-item"
                  >
                    <Link
                      href={generatePath(paths.collection, {
                        slug: collection.slug,
                      })}
                      key={collection.id}
                    >
                      <div className="home-page__collection-image-text">
                        <div
                          className="home-page__collection-image"
                          style={
                            collection.backgroundImage
                              ? {
                                  backgroundImage: `url(${collection.backgroundImage?.url})`,
                                }
                              : {
                                  backgroundImage: `url(${DefaultHero})`,
                                }
                          }
                        />
                        <h4 className="home-page__collection-text">
                          {collection.name}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <NewsSection news={news} />
    </>
  );
};

export default Page;
