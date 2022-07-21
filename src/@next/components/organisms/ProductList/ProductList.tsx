import { useWishlist } from "@saleor/sdk";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { generatePath } from "react-router";

import { Button, Loader } from "@components/atoms";
import { ProductTile } from "@components/molecules";
import { paths } from "@paths";
import { HeartIconMenuSmall, HeartIconSmall } from "@styles/CreditCardIcon";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductList: React.FC<IProps> = ({
  products,
  canLoadMore = false,
  loading = false,
  testingContextId,
  onLoadMore = () => null,
}) => {
  const { addItem: addWishlistItem, removeItem: removeWishlistItem } =
    useWishlist();
  const wishlistData = localStorage.getItem("data_wishlist");
  const wishlist = wishlistData ? JSON.parse(wishlistData)?.lines : null;
  const tryAddToWishlist = (product: any) => {
    if (product) {
      addWishlistItem(product.id);
    }
  };
  const tryRmoveFromWishlist = (product: any) => {
    if (product) {
      removeWishlistItem(product.id);
    }
  };
  return (
    <>
      <S.List data-test="productList" data-test-id={testingContextId}>
        {products.map(product => {
          const { slug, name } = product;
          return (
            slug &&
            name && (
              <div className="single-product" style={{ position: "relative" }}>
                {!wishlist?.filter((id: string) => id === product?.id)
                  .length ? (
                  <S.WishlistIconLink onClick={() => tryAddToWishlist(product)}>
                    <S.AddToWishlistIcon path={HeartIconMenuSmall} />
                  </S.WishlistIconLink>
                ) : (
                  <S.WishlistIconLink
                    onClick={() => tryRmoveFromWishlist(product)}
                  >
                    <S.RemoveFromWishlistIcon path={HeartIconSmall} />
                  </S.WishlistIconLink>
                )}

                <Link
                  href={generatePath(paths.product, { slug })}
                  key={slug}
                  prefetch={false}
                >
                  <a>
                    <ProductTile product={product} />
                  </a>
                </Link>
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
