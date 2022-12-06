import { GetServerSideProps } from "next";
import React from "react";

import { apiUrl, channelSlug, hostUrl } from "@temp/constants";

const DEFAULT_PRODUCTS_SLUGS = 45000;
const DEFAULT_CATEGORIES_SLUGS = 1000;
const DEFAULT_PAGES_SLUGS = 1000;

const Sitemap: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const generateSitemap = async () => {
    const {
      data: { sitemapSlugs },
    } = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        query: `query SitemapSlugs($channel: String!,
          $productsAmount: Int!, $categoriesAmount: Int!, $pagesAmount: Int!){
            sitemapSlugs(channel:$channel, productsAmount: $productsAmount,
              categoriesAmount: $categoriesAmount, pagesAmount: $pagesAmount){
                productSlugs
                categoriesSlugs
                pagesSlugs
              }
        }
        `,
        variables: {
          channel: channelSlug,
          productsAmount: DEFAULT_PRODUCTS_SLUGS,
          categoriesAmount: DEFAULT_CATEGORIES_SLUGS,
          pagesAmount: DEFAULT_PAGES_SLUGS,
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(result => result.json());

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${hostUrl}</loc>
    </url>
  ${sitemapSlugs.pagesSlugs
    .map(slug => {
      return `
    <url>
      <loc>${`${hostUrl}page/${slug}/`}</loc>
    </url>`;
    })
    .join("")}
  ${sitemapSlugs.categoriesSlugs
    .map(slug => {
      return `
    <url>
      <loc>${`${hostUrl}category/${slug}/`}</loc>
    </url>`;
    })
    .join("")}
  ${sitemapSlugs.productSlugs
    .map(slug => {
      return `
    <url>
      <loc>${`${hostUrl}product/${slug}/`}</loc>
    </url>`;
    })
    .join("")}
  </urlset>`;

    return sitemap;
  };

  if (res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml");
    res.setHeader(
      "Cache-control",
      "stale-while-revalidate=64800, s-maxage=21600"
    );

    res.end(await generateSitemap());
  }

  return {
    props: {},
  };
};

export default Sitemap;
