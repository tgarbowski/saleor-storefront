/* eslint-disable no-console */
import { existsSync } from "fs";
import path from "path";

import {
  getCategories,
  getCollections,
  getProducts,
  getSales,
  SitemapGenerator,
} from "./sitemap";

const distDir = path.join(__dirname, "../.next");

const generateSitemap = async (hostname: string) => {
  const sitemap = new SitemapGenerator({
    hostname,
    destinationDir: distDir,
    sitemapSize: 1000000,
  });

  sitemap.add({ url: "/" });

  await getCategories(({ url }) => {
    sitemap.add({ url });
  });
  await getCollections(({ url }) => {
    sitemap.add({ url });
  });
  await getProducts(({ url }) => {
    sitemap.add({ url });
  });
  await getSales(({ url }) => {
    sitemap.add({ url });
  });

  sitemap.generate();
};

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Usage: npm run sitemap <url>");
  process.exit(1);
}

if (!args[0].startsWith("http")) {
  console.error("Url should start with http:// or https://");
  process.exit(1);
}

if (existsSync(distDir)) {
  generateSitemap(args[0]);
} else {
  console.error("No dist/ folder - please build page first with npm run build");
  process.exit(1);
}
