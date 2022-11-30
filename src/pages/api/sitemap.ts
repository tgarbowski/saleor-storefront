import { writeFileSync } from "fs";

import { apiUrl, channelSlug, hostUrl } from "@temp/constants";

const DEFAULT_AMOUNT = 49000;

async function generateSitemap() {
  const {
    data: { productsSlugs },
  } = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      query: `query ProductsSlugs($channel: String, $amount: Int){
        productsSlugs(channel:$channel, amount: $amount)
      }
      `,
      variables: {
        channel: channelSlug,
        amount: DEFAULT_AMOUNT,
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
    ${productsSlugs
      .map(slug => {
        return `
    <url>
      <loc>${`${hostUrl}product/${slug}/`}</loc>
    </url>`;
      })
      .join("")}
  </urlset>
  `;

  writeFileSync("public/sitemap.xml", sitemap);
}

export default function handler(req, res) {
  generateSitemap().then(res.status(200).json({ status: "true" }));
}
