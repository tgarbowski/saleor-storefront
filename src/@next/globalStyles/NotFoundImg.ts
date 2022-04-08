import { shopName } from "@temp/constants";

import notFoundPageImgC4U from "../../images/not-found-page-img-c4u.png";
import notFoundPageImgDefault from "../../images/not-found-page-img-default.png";
import notFoundPageImgF4U from "../../images/not-found-page-img-f4u.png";
import notFoundProductImgC4U from "../../images/not-found-product-img-c4u.png";
import notFoundProductImgDefault from "../../images/not-found-product-img-default.png";
import notFoundProductImgF4U from "../../images/not-found-product-img-f4u.png";

const NotFoundProductImage =
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

export default NotFoundProductImage;
