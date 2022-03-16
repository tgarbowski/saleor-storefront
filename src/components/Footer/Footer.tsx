import * as React from "react";

import { Nav, NavProps } from "./Nav";

import "./scss/index.scss";

type FooterProps = NavProps;

export const Footer: React.FC<FooterProps> = ({ menu }) => (
  <div className="footer" id="footer">
    <Nav menu={menu} />
  </div>
);
