import Link from "next/link";
import * as React from "react";
import { generatePath } from "react-router";

import { MenuItem } from "@graphql/gqlTypes/MenuItem";
import { paths } from "@paths";
import { shopName } from "@temp/constants";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  item: MenuItem;
}
export const NavLink: React.FC<NavLinkProps> = ({ item, ...props }) => {
  const { name, url, category, collection, page } = item;
  const link = (url: string) => (
    <Link passHref href={url}>
      <a {...props}>{name}</a>
    </Link>
  );

  if (url) {
    return (
      <a href={url} {...props}>
        {name}
      </a>
    );
  }
  if (category) {
    return link(generatePath(paths.category, { slug: category.slug }));
  }
  if (collection) {
    return link(generatePath(paths.collection, { slug: collection.slug }));
  }
  if (page) {
    if ( shopName === "CLOTHES4U" ) {
     if ( page.slug.includes("-c4u")) {
        return link(generatePath(paths.page, { slug: page.slug }));
     }
     return null;
    }
    if ( shopName === "FASHION4YOU" ) {
      if ( page.slug.includes("-c4u")) {
        return null;
      }
      return link(generatePath(paths.page, { slug: page.slug }));
    }
  }

  return <span {...props}>{name}</span>;
};
