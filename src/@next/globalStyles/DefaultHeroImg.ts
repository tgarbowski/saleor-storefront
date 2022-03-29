import { shopName } from "@temp/constants";

import DefaultHeroWomanImg from "../../images/hero-img.jpg";
import DefaultHeroKidsImg from "../../images/hero-kids-img.jpg";
import DefaultHeroManImg from "../../images/hero-man-img.jpg";

const DefaultHero =
  shopName === "SALINGOKIDS"
    ? DefaultHeroKidsImg
    : shopName === "SALINGOMAN"
    ? DefaultHeroManImg
    : shopName === "SALINGOWOMAN"
    ? DefaultHeroWomanImg
    : DefaultHeroWomanImg;

export default DefaultHero;
