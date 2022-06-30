import { useRouter } from "next/router";
import * as React from "react";

import { IItemsWishlist, WishlistSidebar } from "@components/organisms";
import { paths } from "@paths";

import { OverlayContextInterface } from "../..";

export interface IWishlistProps {
  overlay: OverlayContextInterface;
  itemsWishlist?: IItemsWishlist;
  removeItem?: (variantId: string) => any;
}

const Wishlist: React.FC<IWishlistProps> = ({
  overlay,
  itemsWishlist,
  removeItem,
}) => {
  const { push } = useRouter();

  return (
    <WishlistSidebar
      show
      hide={overlay.hide}
      itemsWishlist={itemsWishlist}
      goToWishlist={() => {
        push(paths.wishlist);
        overlay.hide();
      }}
      removeItem={removeItem}
    />
  );
};

export default Wishlist;
