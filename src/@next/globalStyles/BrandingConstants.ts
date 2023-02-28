import { shopName, ssrMode } from "@temp/constants";

import C4ULogo from "../../images/c4u_logo.svg";
import C4ULogoFooter from "../../images/c4u_logo_footer.svg";
import C4ULogoSmall from "../../images/c4u_logo_small.svg";
import FacebookIcon from "../../images/facebook-icon.svg";
import F4UFavicon from "../../images/favicon-f4u.png";
import FaviconDefault from "../../images/faviconDefault.png";
import DefaultLogoFooter from "../../images/faviconDefaultFooter.svg";
import InstagramIcon from "../../images/instagram-icon.svg";
import DefaultLogo from "../../images/logo-default.svg";
import F4ULogo from "../../images/logo-f4u.svg";
import DefaultLogoSmall from "../../images/logo-small.svg";
import F4ULogoFooter from "../../images/LogoFooterF4U.svg";

interface SocialMediaLink {
  ariaLabel: string;
  href: string;
  path: string;
}

type MetaProps = JSX.IntrinsicElements["meta"];

interface MetaDefaultsContext {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  custom?: MetaProps[];
}

interface BrandingData {
  [key: string]: {
    logo: string;
    logoSmall: string;
    logoFooter: string;
    favicon: string;
    socialMedia: SocialMediaLink[];
    metaDefaults: MetaDefaultsContext;
  };
}

const brandingData: BrandingData = {
  DEFAULT: {
    logo: DefaultLogo,
    logoSmall: DefaultLogoSmall,
    logoFooter: DefaultLogoFooter,
    favicon: FaviconDefault,
    socialMedia: [
      {
        ariaLabel: "facebook",
        href: "https://www.facebook.com",
        path: FacebookIcon,
      },
      {
        ariaLabel: "instagram",
        href: "https://www.instagram.com",
        path: InstagramIcon,
      },
    ],
    metaDefaults: {
      custom: [],
      description:
        "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
      image: `${!ssrMode ? window.location.origin : ""}${DefaultLogo}`,
      title: "Your shop",
      type: "Your shop",
      url: !ssrMode ? window.location.origin : "",
    },
  },
  CLOTHES4U: {
    logo: C4ULogo,
    logoSmall: C4ULogoSmall,
    logoFooter: C4ULogoFooter,
    favicon: C4ULogo,
    socialMedia: [
      {
        ariaLabel: "facebook",
        href: "https://www.facebook.com/Clothes4YouPL/",
        path: FacebookIcon,
      },
      {
        ariaLabel: "instagram",
        href: "https://www.instagram.com/clothes4you.pl/",
        path: InstagramIcon,
      },
    ],
    metaDefaults: {
      custom: [],
      description:
        "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
      image: `${!ssrMode ? window.location.origin : ""}${DefaultLogo}`,
      title: "Sklep Clothes4u - Odzież używana",
      type: "Clothes4u",
      url: !ssrMode ? window.location.origin : "",
    },
  },
  FASHION4YOU: {
    logo: F4ULogo,
    logoSmall: F4ULogo,
    logoFooter: F4ULogoFooter,
    favicon: F4UFavicon,
    socialMedia: [
      {
        ariaLabel: "facebook",
        href: "https://www.facebook.com/Fashion4you-107849631906695",
        path: FacebookIcon,
      },
      {
        ariaLabel: "instagram",
        href: "https://www.instagram.com/fashion4youpl/",
        path: InstagramIcon,
      },
    ],
    metaDefaults: {
      custom: [],
      description:
        "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
      image: `${!ssrMode ? window.location.origin : ""}${DefaultLogo}`,
      title: "Sklep Fashion4You - Odzież używana",
      type: "Fashion4You",
      url: !ssrMode ? window.location.origin : "",
    },
  },
};

const currentBrand = brandingData[shopName ?? "DEFAULT"];
const { logo, logoSmall, logoFooter, favicon, socialMedia, metaDefaults } =
  currentBrand;

export { logo, logoSmall, logoFooter, favicon, socialMedia, metaDefaults };
