import { shopName } from "@temp/constants";

import CloudMainImg from "../../images/cloud-main.svg";
import CloudMainSmallImgFirst from "../../images/cloud-small-first.svg";
import CloudMainSmallImgSecond from "../../images/cloud-small-second.svg";
import F4UUnderConstructionLogo from "../../images/F4UUnderConstructionLogo.svg";
import FacebookSmallIcon from "../../images/facebook-small-icon.svg";
import UnderConstructionImg from "../../images/first-bg.png";
import InstagramSmallIcon from "../../images/instagram-small-icon.svg";


const UnderConstructionImage =
  shopName === "FASHION4YOU" ? UnderConstructionImg : null;

export const CloudMainImage = shopName === "FASHION4YOU" ? CloudMainImg : null;
export const CloudMainSmallImageFirst = shopName  === "FASHION4YOU" ? CloudMainSmallImgFirst : null;
export const CloudMainSmallImageSecond = shopName  === "FASHION4YOU" ? CloudMainSmallImgSecond : null;
export const InstagramSmallIcn = shopName  === "FASHION4YOU" ? InstagramSmallIcon : null;
export const FacebookSmallIcn = shopName  === "FASHION4YOU" ? FacebookSmallIcon : null;
export const F4UUnderConstructionLogoImage = shopName  === "FASHION4YOU" ? F4UUnderConstructionLogo : null;

export default UnderConstructionImage;
