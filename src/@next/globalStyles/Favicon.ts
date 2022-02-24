import { shopName } from "@temp/constants";
import C4ULogo from "../../images/c4u_logo.svg";
import F4UFavicon from "../../images/favicon-f4u.png";
import faviconDefault from "../../images/favicon.png";

const Favicon =
  shopName === "CLOTHES4U"
    ? C4ULogo
    : shopName === "FASHION4U"
    ? F4UFavicon
    : faviconDefault;

export default Favicon;

