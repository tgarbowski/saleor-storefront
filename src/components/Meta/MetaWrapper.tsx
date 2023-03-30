import * as React from "react";

import { metaDefaults } from "@styles/BrandingConstants";

import MetaConsumer from "./consumer";
import { MetaContextInterface, Provider as MetaProvider } from "./context";

const removeEmpty = obj => {
  const newObj = {};
  Object.keys(obj).forEach(prop => {
    if (obj[prop] && obj[prop] !== "") {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

interface MetaWrapperProps {
  meta: MetaContextInterface;
  children: React.ReactNode;
}

const MetaWrapper: React.FC<MetaWrapperProps> = ({ children, meta }) => (
  <MetaProvider value={{ ...metaDefaults, ...removeEmpty(meta) }}>
    <MetaConsumer>{children}</MetaConsumer>
  </MetaProvider>
);

export default MetaWrapper;
