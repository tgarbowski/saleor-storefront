import Link from "next/link";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { paths } from "@paths";
import { DefaultHero } from "@styles/pictures";
import { FooterUsp } from "@temp/components/FooterUsp/FooterUsp";
import { shopName } from "@temp/constants";
import { FeaturedProducts } from "@utils/ssr";

import { Button, ProductsFeatured } from "../../components";
import { structuredData } from "../../core/SEO/Homepage/structuredData";
import {
  HomePageProducts_categories,
  HomePageProducts_shop,
} from "./gqlTypes/HomePageProducts";

import "./scss/index.scss";

const Page: React.FC<{
  categories: HomePageProducts_categories;
  featuredProducts: FeaturedProducts;
  shop: HomePageProducts_shop;
}> = ({ categories, featuredProducts, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const intl = useIntl();

  const visibleCategory =
    shopName === "FASHION4YOU"
      ? categories.edges.slice(0, -2)
      : categories.edges;
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
            <span className="home-page__hero__title">
              <h1>
                <FormattedMessage
                  defaultMessage="{shopname}"
                  values={{ shopname: shopName }}
                />
              </h1>
            </span>
          </div>
          <div>
            <span className="home-page__hero__subtitle">
              <h1>
                <FormattedMessage
                  values={{ shopname: shopName }}
                  defaultMessage="{shopname} to sklep z jakościową odzieżą używaną. Różne marki w jednym miejscu. Przekonaj się sam!"
                />
              </h1>
            </span>
          </div>
        </div>
        <div className="home-page__hero-action">
          {categoriesExist() && (
            <Link
              href={generatePath(paths.category, {
                slug: categories.edges[1].node.slug,
              })}
            >
              <a>
                <Button testingContext="homepageHeroActionButton">
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
      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container home-page__categories_container">
            <h2>
              <FormattedMessage defaultMessage="WYBIERZ KATEGORIĘ" />
            </h2>
            <div className="home-page__categories__list">
              {visibleCategory.map(({ node: category }) => {
                return shopName === "CLOTHES4U" &&
                  category.name === "Detal" ? null : (
                  <div key={category.id} className="home-page__category-item">
                    <Link
                      href={generatePath(paths.category, {
                        slug: category.slug,
                      })}
                      key={category.id}
                    >
                      {category.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <FooterUsp />
      <ProductsFeatured
        products={featuredProducts.products}
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />
    </>
  );
};

export default Page;
