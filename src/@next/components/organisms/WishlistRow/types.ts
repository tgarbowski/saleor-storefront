import React from "react";

export type IWishlistRowType = "responsive" | "condense";

export interface IProps {
  index?: number;
  id: string;
  slug: string;
  unitPrice: React.ReactNode;
  onRemove: () => void;
  type?: IWishlistRowType;
}
