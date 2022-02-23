import { shopName } from "@temp/constants";

import C4ULogo from "../../images/c4u_logo.svg";
import F4ULogo from "../../images/Fashion4youLogo.svg";
import sailingDefaultLogo from "../../images/logo.svg";

const Logo =
  shopName === "CLOTHES4U"
    ? C4ULogo
    : shopName === "FASHION4U"
    ? F4ULogo
    : sailingDefaultLogo;

export default Logo;
