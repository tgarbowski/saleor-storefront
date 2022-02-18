import { shopName } from "@temp/constants";

import C4ULogoSmall from "../../images/c4u_logo_small.svg";
import F4ULogoSmall from "../../images/Fashion4youLogoSmall.svg";
import sailingDefaultLogoSmall from "../../images/logo-small.svg";

const LogoSmall =
  shopName === "C4U"
    ? C4ULogoSmall
    : shopName === "F4U"
    ? F4ULogoSmall
    : sailingDefaultLogoSmall;

export default LogoSmall;
