import { shopName } from "@temp/constants";

import CloudMainImg from "../../images/cloud-main.svg";
import CloudMainSmallImgFirst from "../../images/cloud-small-first.svg";
import CloudMainSmallImgSecond from "../../images/cloud-small-second.svg";
import F4UUnderConstructionLogo from "../../images/F4UUnderConstructionLogo.svg";
import FacebookSmallIcon from "../../images/facebook-small-icon.svg";
import UnderConstructionImg from "../../images/first-bg.png";
import DefaultHeroWomanImg from "../../images/hero-img.jpg";
import DefaultHeroImgC4U from "../../images/hero-img-default-c4u.jpg";
import InstagramSmallIcon from "../../images/instagram-small-icon.svg";
import KidCategory from "../../images/kid-category.jpg";
import ManCategory from "../../images/man-category.jpg";
import notFoundPageImgC4U from "../../images/not-found-page-img-c4u.png";
import notFoundPageImgDefault from "../../images/not-found-page-img-default.png";
import notFoundPageImgF4U from "../../images/not-found-page-img-f4u.png";
import notFoundProductImgC4U from "../../images/not-found-product-img-c4u.png";
import notFoundProductImgDefault from "../../images/not-found-product-img-default.png";
import notFoundProductImgF4U from "../../images/not-found-product-img-f4u.png";
import WomanCategory from "../../images/woman-category.jpg";

export const WomanCategoryImg =
  shopName === "FASHION4YOU" ? WomanCategory : WomanCategory;

export const KidCategoryImg =
  shopName === "FASHION4YOU" ? KidCategory : KidCategory;

export const ManCategoryImg =
  shopName === "FASHION4YOU" ? ManCategory : ManCategory;

export const UnderConstructionImage =
  shopName === "FASHION4YOU" ? UnderConstructionImg : null;

export const CloudMainImage = shopName === "FASHION4YOU" ? CloudMainImg : null;
export const CloudMainSmallImageFirst =
  shopName === "FASHION4YOU" ? CloudMainSmallImgFirst : null;
export const CloudMainSmallImageSecond =
  shopName === "FASHION4YOU" ? CloudMainSmallImgSecond : null;
export const InstagramSmallIcn =
  shopName === "FASHION4YOU" ? InstagramSmallIcon : null;
export const FacebookSmallIcn =
  shopName === "FASHION4YOU" ? FacebookSmallIcon : null;
export const F4UUnderConstructionLogoImage =
  shopName === "FASHION4YOU" ? F4UUnderConstructionLogo : null;
export const NotFoundProductImage =
  shopName === "CLOTHES4U"
    ? notFoundProductImgC4U
    : shopName === "FASHION4YOU"
    ? notFoundProductImgF4U
    : notFoundProductImgDefault;

export const NotFoundPageImage =
  shopName === "CLOTHES4U"
    ? notFoundPageImgC4U
    : shopName === "FASHION4YOU"
    ? notFoundPageImgF4U
    : notFoundPageImgDefault;

export const DefaultHero =
  shopName === "FASHION4YOU" ? DefaultHeroWomanImg : DefaultHeroImgC4U;
