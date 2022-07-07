import Link from "next/link";
import * as React from "react";
import Carousel from "react-img-carousel";
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
  HomePageProducts_collections,
  HomePageProducts_shop,
} from "./gqlTypes/HomePageProducts";

import "./scss/index.scss";

const Page: React.FC<{
  categories: HomePageProducts_categories;
  collections: HomePageProducts_collections;
  featuredProducts: FeaturedProducts;
  shop: HomePageProducts_shop;
}> = ({ categories, featuredProducts, shop, collections }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const collectionsExist = () => {
    return collections && collections.edges && collections.edges.length > 0;
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
      <Carousel
        viewportWidth="100%"
        maxRenderedSlides={3}
        cellPadding={5}
        transition="fade"
        arrows
        style={{
          slide: {
            width: "100%",
            height: "auto",
          },
          selectedSlide: {
            width: "100%",
            height: "auto",
          },
          viewport: {
            objectFit: "cover",
          },
        }}
      >
        {collections?.edges.map(({ node: collection }) => {
          return (
            <div
              key={collection.id}
              className="home-page__hero"
              style={
                collection.backgroundImage
                  ? {
                      backgroundImage: `url(${collection.backgroundImage?.url})`,
                    }
                  : {
                      backgroundImage: `url(${DefaultHero})`,
                    }
              }
            >
              <div className="home-page__hero-text">
                <div>
                  <span className="home-page__hero__title">
                    {collection.name === "Kolekcja lato" ? (
                      <h1>
                        <FormattedMessage defaultMessage="Kolekcja lato 2022" />
                      </h1>
                    ) : collection.name === "Najnowsze produkty" ? (
                      <h1>
                        <FormattedMessage defaultMessage="Najnowsze produkty" />
                      </h1>
                    ) : (
                      collection.name === "Polecane produkty" && (
                        <h1>
                          <FormattedMessage defaultMessage="Fashion4you" />
                        </h1>
                      )
                    )}
                  </span>
                </div>
                <div>
                  <span className="home-page__hero__subtitle">
                    {collection.name === "Kolekcja lato" ? (
                      <h1>
                        <FormattedMessage defaultMessage="Przygotowaliśmy dla was najnowszą kolekcję na lato 2022 roku. Sprawdź naszą ofertę" />
                      </h1>
                    ) : collection.name === "Najnowsze produkty" ? (
                      <h1>
                        <FormattedMessage defaultMessage="Wychodząc wam na przeciw, przygotowaliśmy zestawienie najnowszych produktów" />
                      </h1>
                    ) : (
                      collection.name === "Polecane produkty" && (
                        <h1>
                          <FormattedMessage
                            values={{ shopname: shopName }}
                            defaultMessage="{shopname} to sklep z jakościową odzieżą używaną. Różne marki w jednym miejscu. Przekonaj się sam!"
                          />
                        </h1>
                      )
                    )}
                  </span>
                </div>
              </div>
              <div className="home-page__hero-action">
                {collectionsExist() && (
                  <Link
                    href={generatePath(paths.collection, {
                      slug: collections.edges[0].node.slug,
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
            </div>
          );
        })}
      </Carousel>
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
      {collectionsExist() && (
        <div className="home-page__collections">
          <div className="home-page__collections_container">
            <h2 className="home-page__collections_container-heading">
              <FormattedMessage defaultMessage="Kolekcje" />
            </h2>
            <p className="home-page__collections_container-text">
              <FormattedMessage defaultMessage="Poznaj nasze popularne kolekcje i wybierz coś dla siebie!" />
            </p>
            <div className="home-page__collections__list">
              {collections?.edges.map(({ node: collection }) => {
                return (
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
      <FooterUsp />
      <ProductsFeatured
        products={featuredProducts.products}
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />
    </>
  );
};

export default Page;
