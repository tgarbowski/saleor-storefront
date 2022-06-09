import { shopName } from "@temp/constants";

import DefaultHeroWomanImg from "../../images/hero-img.jpg";
import DefaultHeroImgC4U from "../../images/hero-img-default-c4u.jpg";

const DefaultHero =
  shopName === "FASHION4YOU" ? DefaultHeroWomanImg : DefaultHeroImgC4U;

export default DefaultHero;
