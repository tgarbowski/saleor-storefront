import { shopName } from "@temp/constants";

import C4ULogo from "../../images/c4u_logo.svg";
import faviconDefault from "../../images/favicon.png";
import F4UFavicon from "../../images/favicon-f4u.png";

const Favicon =
  shopName === "CLOTHES4U"
    ? C4ULogo
    : shopName === "FASHION4YOU"
    ? F4UFavicon
    : faviconDefault;

export default Favicon;

