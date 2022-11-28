import { writeFileSync } from "fs";
import { OrderDirection, ProductOrderField } from "gqlTypes/globalTypes";
// eslint-disable-next-line import/no-extraneous-dependencies
import prettier from "prettier";

import { channelSlug } from "@temp/constants";
import { exhaustList, getSaleorApi } from "@utils/ssr";

const EXTERNAL_URL = "https://test.fashion4you.com.pl";

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  const { api } = await getSaleorApi();
  const { data } = await exhaustList(
    api.products.getList({
      first: 100,
      channel: channelSlug,
      sortBy: {
        field: ProductOrderField.DATE,
        direction: OrderDirection.DESC,
      },
    }),
    50
  );
  // const {
  //   data: { products },
  // } = await fetch(apiUrl, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     query: `{
  //       products(first:100, channel: "fashion4you"){
  //         edges{
  //           node{
  //             slug
  //           }
  //         }
  //       }
  //     }
  //     `,
  //   }),
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // }).then(result => result.json());

  // console.log(products.edges[0]);

  console.log(data[0].slug);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${data
            .map(({ slug }) => {
              return `
                  <url>
                      <loc>${`${EXTERNAL_URL}/product/${slug}/`}</loc>
                  </url>
              `;
            })
            .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", formatted);
}

export default function handler(req, res) {
  generateSitemap();
}
