import { writeFileSync } from "fs";
import { IncomingMessage } from "http";

import {
  allowedIpAddresses,
  apiUrl,
  channelSlug,
  hostUrl,
} from "@temp/constants";

const DEFAULT_PRODUCTS_SLUGS = 45000;
const DEFAULT_CATEGORIES_SLUGS = 1000;
const DEFAULT_PAGES_SLUGS = 1000;

async function generateSitemap() {
  const {
    data: { sitemapSlugs },
  } = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      query: `query SitemapSlugs($channel: String, 
        $productsAmount: Int, $categoriesAmount: Int, $pagesAmount: Int){
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

  writeFileSync("public/sitemap.xml", sitemap);
}

export default function handler(req, res) {
  const ipAddress =
    (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
    req.socket.remoteAddress;
  const allowedIps = allowedIpAddresses.split(";");

  if (allowedIps.find(address => address === ipAddress)) {
    generateSitemap().then(
      res.status(200).json({ status: "Success", allowedIps, ipAddress })

      // res.status(200).send("Success", allowedIps, ipAddress)
    );
  } else {
    return res.status(403).json({ status: "Forbidden", allowedIps, ipAddress });

    // return res.status(403).send("Forbidden", allowedIps, ipAddress);
  }
}
