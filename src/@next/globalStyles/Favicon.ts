import { shopName } from "@temp/constants";

import C4ULogo from "../../images/c4u_logo.svg";
import F4UFavicon from "../../images/favicon-f4u.png";
import FaviconDefault from "../../images/faviconDefault.png";

const Favicon =
  shopName === "CLOTHES4U"
    ? C4ULogo
    : shopName === "FASHION4YOU"
    ? F4UFavicon
    : FaviconDefault;

export default Favicon;
