/* eslint-disable global-require */
import { generatePath } from "react-router";

import { paths } from "@paths";
import { shopName, ssrMode } from "@temp/constants";

export const PRODUCTS_PER_PAGE = 8;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    label: "Stripe",
  },
  PAYU: {
    label: "PayU",
  },
  COD: {
    label: "Cod",
  },
  ADYEN: {
    label: "Adyen",
    script: {
      src: "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js",
      integrity:
        "sha384-wG2z9zSQo61EIvyXmiFCo+zB3y0ZB4hsrXVcANmpP8HLthjoQJQPBh7tZKJSV8jA",
      crossOrigin: "anonymous",
    },
    style: {
      src: "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.css",
      integrity:
        "sha384-8ofgICZZ/k5cC5N7xegqFZOA73H9RQ7H13439JfAZW8Gj3qjuKL2isaTD3GMIhDE",
      crossOrigin: "anonymous",
    },
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePath(paths.page, { slug: "about" }),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: `${
      shopName === "FASHION4YOU"
        ? "https://www.facebook.com/Fashion4you-107849631906695"
        : shopName === "CLOTHES4U"
        ? "Clothes4You"
        : "https://www.facebook.com/salingopl/"
    }`,
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    href: `${
      shopName === "FASHION4YOU"
        ? "https://www.instagram.com/fashion4youpl"
        : shopName === "CLOTHES4U"
        ? "Clothes4You"
        : "https://www.facebook.com/salingopl/"
    }`,
    path: require("../images/instagram-icon.svg"),
  },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
  image: `${
    !ssrMode ? window.location.origin : ""
  }${require("../images/logo.svg")}`,
  title: `${
    shopName === "FASHION4YOU"
      ? "Sklep Fashion4You"
      : shopName === "CLOTHES4U"
      ? "Sklep Clothes4You"
      : "Sklep hurt4you"
  }`,
  type: `${
    shopName === "FASHION4YOU"
      ? "Fashion4You"
      : shopName === "CLOTHES4U"
      ? "Clothes4You"
      : "Hurt4you"
  }`,
  url: !ssrMode ? window.location.origin : "",
};
