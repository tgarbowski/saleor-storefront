import { NextPage } from "next";
import React from "react";
import { FormattedMessage } from "react-intl";

// import { TaxedMoney } from "@components/containers";
// import { WishlistRow } from "@components/organisms";
// import { IItemsWishlist } from "@components/organisms/WishlistSidebar/WishlistSidebar";

// const generateWishlist = (
//   itemsWishlist: IItemsWishlist,
//   removeItem: (variantId: string) => any
// ) => {
//   return itemsWishlist?.map(({ id, variant, totalPrice }, index) => (
//     <WishlistRow
//       type="condense"
//       key={id ? `id-${id}` : `idx-${index}`}
//       index={index}
//       id={variant?.product?.id || ""}
//       slug={variant.product?.slug || ""}
//       name={variant?.product?.name || ""}
//       onRemove={() => removeItem(variant.id)}
//       thumbnail={{
//         ...variant?.product?.thumbnail,
//         alt: variant?.product?.thumbnail?.alt || "",
//       }}
//       sku={variant.sku}
//       unitPrice={<TaxedMoney taxedMoney={variant?.pricing?.price} />}
//     />
//   ));
// };

export const WishlistPage: React.FC<NextPage> = () => {
  return (
    <h1 data-test="wishlistPageTitle">
      <FormattedMessage defaultMessage="Ulubione" />
    </h1>
  );
};
