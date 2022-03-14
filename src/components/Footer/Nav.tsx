import Link from "next/link";
import * as React from "react";
import ReactSVG from "react-svg";

import { ShopMenusQuery } from "@graphql/gqlTypes/ShopMenusQuery";
import { paths } from "@paths";
import Logo from "@styles/Logo";
import { SOCIAL_MEDIA } from "@temp/core/config";

import { NavLink, SocialMediaIcon } from "..";

import "./scss/index.scss";

export type NavProps = { menu: ShopMenusQuery["footer"] };

export const Nav: React.FC<NavProps> = ({ menu }) => (
  <footer className="footer-nav">
    <div className="container">
      <div className="footer-nav-container-left">
        {menu?.items.map(item => (
          <div className="footer-nav__section" key={item.id}>
            <h4 className="footer-nav__section-header">
              <NavLink item={item} />
            </h4>
            <div className="footer-nav__section-content">
              {item.children.map(subItem => (
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
            <ReactSVG path={Logo} />
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
