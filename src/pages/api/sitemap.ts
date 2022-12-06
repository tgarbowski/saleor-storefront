import { writeFile } from "fs";

import {
  apiUrl,
  channelSlug,
  hostUrl,
  // sitemapPath,
  xApiKey,
} from "@temp/constants";

const DEFAULT_PRODUCTS_SLUGS = 45000;
const DEFAULT_CATEGORIES_SLUGS = 1000;
const DEFAULT_PAGES_SLUGS = 1000;

async function generateSitemap() {
  console.log("Starting sitemap generation");
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
  console.log("Sitemap generated");
  writeFile("/tmp/sitemap.xml", sitemap, error => {
    if (error) {
      throw error;
    }
    console.log("Sitemap saved");
  });
  return true;
}

export default function handler(req, res) {
  const headerKey = req.headers["x-api-key"];

  if (xApiKey && headerKey === xApiKey) {
    generateSitemap().then(sitemap => {
      if (sitemap) {
        res.status(200).send("Success");
      } else {
        res.send("Failed");
      }
    });
  } else {
    return res.status(403).send("Forbidden");
  }
}
