/* eslint-disable global-require */
import { generatePath } from "react-router";

import { paths } from "@paths";

export const PRODUCTS_PER_PAGE = 8;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
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
