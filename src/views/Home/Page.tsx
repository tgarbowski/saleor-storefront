import Link from "next/link";
import React from "react";
import Carousel from "react-img-carousel";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { paths } from "@paths";
import {
  DefaultHero,
  KidCategoryImg,
  ManCategoryImg,
  WomanCategoryImg,
} from "@styles/pictures";
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
      : categories.edges.slice(0, -2);

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      {collections.edges.length > 1 ? (
        <Carousel
          className="carousel-2"
          viewportWidth="100%"
          maxRenderedSlides={3}
          cellPadding={5}
          transition="fade"
          initialSlide={2}
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
                        <h1>{collection.name}</h1>
                      ) : collection.name === "Najnowsze produkty" ? (
                        <h1>{collection.name}</h1>
                      ) : collection.name === "Super paki" ? (
                        <h1>{collection.name}</h1>
                      ) : collection.name === "Kolekcja jesień" ? (
                        <h1>{collection.name}</h1>
                      ) : (
                        (collection.name === "Polecane produkty" ||
                          collection.name === "Polecane produkty c4u") && (
                          <h1>
                            <FormattedMessage
                              defaultMessage="{shopname}"
                              values={{ shopname: shopName }}
                            />
                          </h1>
                        )
                      )}
                    </span>
                  </div>
                  <div>
                    <span className="home-page__hero__subtitle">
                      {collection.name === "Kolekcja lato" ? (
                        <h1>
                          {
                            JSON.parse(collection.description).blocks[0].data
                              .text
                          }
                        </h1>
                      ) : collection.name === "Najnowsze produkty" ? (
                        <h1>
                          {
                            JSON.parse(collection.description).blocks[0].data
                              .text
                          }
                        </h1>
                      ) : collection.name === "Kolekcja jesień" ? (
                        <h1>
                          {
                            JSON.parse(collection.description).blocks[0].data
                              .text
                          }
                        </h1>
                      ) : collection.name === "Super paki" ? (
                        <h1>
                          {
                            JSON.parse(collection.description).blocks[0].data
                              .text
                          }
                        </h1>
                      ) : (
                        (collection.name === "Polecane produkty" ||
                          collection.name === "Polecane produkty c4u") && (
                          <h1>
                            {
                              JSON.parse(collection.description).blocks[0].data
                                .text
                            }
                          </h1>
                        )
                      )}
                    </span>
                  </div>
                </div>
                <div className="home-page__hero-action">
                  {collectionsExist() &&
                    (collection.name === "Kolekcja lato" ? (
                      <Link
                        key={collection.id}
                        href={generatePath(paths.collection, {
                          slug: collection.slug,
                        })}
                      >
                        <a>
                          <Button testingContext="homepageHeroActionButton">
                            <FormattedMessage defaultMessage="Sprawdź ofertę" />
                          </Button>
                        </a>
                      </Link>
                    ) : collection.name === "Najnowsze produkty" ? (
                      <Link
                        key={collection.id}
                        href={generatePath(paths.collection, {
                          slug: collection.slug,
                        })}
                      >
                        <a>
                          <Button testingContext="homepageHeroActionButton">
                            <FormattedMessage defaultMessage="Sprawdź ofertę" />
                          </Button>
                        </a>
                      </Link>
                    ) : collection.name === "Kolekcja jesień" ? (
                      <Link
                        key={collection.id}
                        href={generatePath(paths.collection, {
                          slug: collection.slug,
                        })}
                      >
                        <a>
                          <Button testingContext="homepageHeroActionButton">
                            <FormattedMessage defaultMessage="Sprawdź ofertę" />
                          </Button>
                        </a>
                      </Link>
                    ) : collection.name === "Super paki" ? (
                      <Link
                        key={collection.id}
                        href={generatePath(paths.collection, {
                          slug: collection.slug,
                        })}
                      >
                        <a>
                          <Button testingContext="homepageHeroActionButton">
                            <FormattedMessage defaultMessage="Sprawdź ofertę" />
                          </Button>
                        </a>
                      </Link>
                    ) : (
                      (collection.name === "Polecane produkty" ||
                        collection.name === "Polecane produkty c4u") && (
                        <Link
                          key={collection.id}
                          href={generatePath(paths.collection, {
                            slug: collection.slug,
                          })}
                        >
                          <a>
                            <Button testingContext="homepageHeroActionButton">
                              <FormattedMessage defaultMessage="Sprawdź ofertę" />
                            </Button>
                          </a>
                        </Link>
                      )
                    ))}
                </div>
              </div>
            );
          })}
        </Carousel>
      ) : (
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
                  slug: categories.edges[2].node.slug,
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
      )}
      {categoriesExist() && (
        <div
          className={
            collections.edges.length > 1
              ? "home-page__categories"
              : "home-page__categories-without-slider"
          }
        >
          <div className="container home-page__categories_container">
            <div className="home-page__categories__list">
              {visibleCategory.map(({ node: category }) => {
                return shopName === "CLOTHES4U" &&
                  category.name === "Detal" ? null : (
                  <div key={category.id} className="home-page__category-item">
                    <div className="home-page__categories__text-image">
                      {category.name === "Kobieta" ? (
                        <img
                          className="home-page__categories__img"
                          src={WomanCategoryImg}
                          alt=""
                        />
                      ) : category.name === "Mężczyzna" ? (
                        <img
                          className="home-page__categories__img"
                          src={ManCategoryImg}
                          alt=""
                        />
                      ) : (
                        category.name === "Dziecko" && (
                          <img
                            className="home-page__categories__img"
                            src={KidCategoryImg}
                            alt=""
                          />
                        )
                      )}
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <FooterUsp />
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
      <ProductsFeatured
        products={featuredProducts.products}
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />
    </>
  );
};

export default Page;
