import Link from "next/link";
import * as React from "react";
import ReactSVG from "react-svg";

import { ShopMenusQuery } from "@graphql/gqlTypes/ShopMenusQuery";
import { paths } from "@paths";
import LogoFooter from "@styles/LogoFooter";
import { shopName } from "@temp/constants";
import { SOCIAL_MEDIA } from "@temp/core/config";

import { NavLink, SocialMediaIcon } from "..";

import "./scss/index.scss";

export type NavProps = { menu: ShopMenusQuery["footer"] };

export const Nav: React.FC<NavProps> = ({ menu }) => {
  return (
    <footer className="footer-nav">
      <div className="container">
        <div className="footer-nav-container-left">
          {menu?.items.map(item => (
            <div className="footer-nav__section" key={item.id}>
              <h4 className="footer-nav__section-header">
                <NavLink item={item} />
              </h4>
              <div className="footer-nav__section-content">
                {shopName === "FASHION4YOU"
                  ? item.name === "Kategorie"
                    ? item.children.slice(0, -2).map(subItem => (
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
                    ? item.children.slice(0, -2).map(subItem => (
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
        <div className="footer-nav-container-right">
          <Link href={paths.home}>
            <a>
              <ReactSVG path={LogoFooter} />
            </a>
          </Link>
          <div className="footer-nav-container-right-icons">
            {SOCIAL_MEDIA.map(medium => (
              <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
