import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { generatePath } from "react-router";

import { Button, Loader } from "@components/atoms";
import { ProductTile } from "@components/molecules";
import { paths } from "@paths";
import { HeartIconSmall } from "@styles/CreditCardIcon";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductList: React.FC<IProps> = ({
  products,
  canLoadMore = false,
  loading = false,
  testingContextId,
  onLoadMore = () => null,
}) => {
  return (
    <>
      <S.List data-test="productList" data-test-id={testingContextId}>
        {products.map(product => {
          const { slug, name } = product;
          return (
            slug &&
            name && (
              <div className="single-product">
                <Link
                  href={generatePath(paths.product, { slug })}
                  key={slug}
                  prefetch={false}
                >
                  <a>
                    <ProductTile product={product} />
                  </a>
                </Link>
                <S.WishlistButton
                  className="add-to-wishlist-btn"
                  onSubmit={() => console.log("hej")}
                >
                  <S.WishlistIcon src={HeartIconSmall} alt="" />
                  Dodaj do ulubionych
                </S.WishlistButton>
              </div>
            )
          );
        })}
      </S.List>
      <S.Loader>
        {loading ? (
          <Loader />
        ) : (
          canLoadMore && (
            <Button
              testingContext="loadMoreProductsButton"
              color="secondary"
              onClick={onLoadMore}
            >
              <FormattedMessage defaultMessage="Załaduj więcej" />
            </Button>
          )
        )}
      </S.Loader>
    </>
  );
};
