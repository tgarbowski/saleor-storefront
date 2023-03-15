import Link from "next/link";
import * as React from "react";
import { generatePath } from "react-router";

import { FeaturedProduct } from "@graphql/gqlTypes/FeaturedProduct";
import { paths } from "@paths";

import { Carousel, ProductListItem } from "..";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title: string | undefined;
  products: FeaturedProduct[] | undefined;
}

export const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({
  title,
  products,
}) =>
  products?.length ? (
    <div className="products-featured">
      <div className="container products-featured-wrapper">
        <h2 className="products-featured-wrapper-title">
          Nie wiesz, co wybrać? Oto nasze <span>polecane produkty!</span>
        </h2>
        <p className="products-featured-wrapper-subtitle">
          Nie masz czasu na przeglądanie setek produktów? Szukasz najlepszych
          propozycji, które pozwolą Ci zaoszczędzić czas i pieniądze? Nasze
          polecane produkty to gwarancja sukcesu!
        </p>
      </div>
      <div className="container products-featured-container">
        <Carousel>
          {products.map(product => (
            <Link
              href={generatePath(paths.product, { slug: product.slug })}
              key={product.id}
            >
              <a>
                <ProductListItem product={product} />
              </a>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  ) : null;
