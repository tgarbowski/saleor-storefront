import * as React from "react";

import { metaDefaults } from "@styles/BrandingConstants";

type MetaProps = JSX.IntrinsicElements["meta"];

export interface MetaContextInterface {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  custom?: MetaProps[];
}

export const { Provider, Consumer } =
  React.createContext<MetaContextInterface>(metaDefaults);
