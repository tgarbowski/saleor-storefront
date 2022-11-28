import { writeFileSync } from "fs";
import prettier from "prettier";
import fetch from "node-fetch";

const EXTERNAL_URL = "https://test.fashion4you.com.pl";
// const apiUrl = "http://localhost:8000/graphql/";
const apiUrl = "https://saleor-test.gammasoft.pl/graphql/";
// const apiUrl = process.env.NEXT_PUBLIC_API_URI;

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const {
    data: { products },
  } = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      query: `{
        products(first:100, channel: "fashion4you"){
          edges{
            node{
              slug
            }
          }
        }
      }
      `,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then(result => result.json());

  console.log(products.edges[0]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${products.edges
          .map(({ node: { slug } }) => {
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

generateSitemap();
