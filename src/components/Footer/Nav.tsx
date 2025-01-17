import Link from "next/link";
import * as React from "react";
import ReactSVG from "react-svg";

import { ShopMenusQuery } from "@graphql/gqlTypes/ShopMenusQuery";
import { paths } from "@paths";
import { logoFooter, socialMedia } from "@styles/BrandingConstants";
import { shopName } from "@temp/constants";

import { NavLink, SocialMediaIcon } from "..";

import "./scss/index.scss";

export type NavProps = { menu: ShopMenusQuery["footer"] };

export const Nav: React.FC<NavProps> = ({ menu }) => {
  return (
    <footer className="footer-nav">
      <div className="footer-nav-container container">
        <div className="footer-nav-container-left">
          <Link href={paths.home}>
            <a>
              <ReactSVG path={logoFooter} />
            </a>
          </Link>
        </div>
        <div className="footer-nav-container-right">
          {menu?.items.map(item => (
            <div className="footer-nav__section" key={item.id}>
              <h4 className="footer-nav__section-header">
                <NavLink item={item} />
              </h4>
              <div className="footer-nav__section-content">
                {shopName === "FASHION4YOU"
                  ? item.name === "Kategorie"
                    ? item.children.slice(0, -1).map(subItem => (
                        <p key={subItem.id}>
                          <NavLink item={subItem} />
                        </p>
                      ))
                    : item.name === "Kolekcje"
                    ? item.children.map(subItem =>
                        subItem.name.includes("c4u") ? null : (
                          <p key={subItem.id}>
                            <NavLink item={subItem} />
                          </p>
                        )
                      )
                    : item.children.map(subItem => (
                        <p key={subItem.id}>
                          <NavLink item={subItem} />
                        </p>
                      ))
                  : shopName === "CLOTHES4U"
                  ? item.name === "Kategorie"
                    ? item.children.map(subItem => (
                        <p key={subItem.id}>
                          <NavLink item={subItem} />
                        </p>
                      ))
                    : item.name === "Kolekcje"
                    ? item.children.map(subItem =>
                        subItem.name === "Polecane produkty" ? null : (
                          <p key={subItem.id}>
                            <NavLink item={subItem} />
                          </p>
                        )
                      )
                    : item.children.map(subItem => (
                        <p key={subItem.id}>
                          <NavLink item={subItem} />
                        </p>
                      ))
                  : item.children.map(subItem => (
                      <p key={subItem.id}>
                        <NavLink item={subItem} />
                      </p>
                    ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright container">
        <div className="copyright-container">
          <div className="copyright-container-left">
            <p>2023 © {shopName} All rights reserved</p>
          </div>
          <div className="copyright-container-right">
            {socialMedia.map(medium => (
              <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
