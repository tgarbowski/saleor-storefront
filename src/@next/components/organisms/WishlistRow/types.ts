import React from "react";

import { IImage } from "@types";

export type IWishlistRowType = "responsive" | "condense";

export interface IProps {
  index?: number;
  id: string;
  slug: string;
  unitPrice: React.ReactNode;
  name: string;
  sku?: string;
  onRemove: () => void;
  thumbnail?: IImage;
  type?: IWishlistRowType;
  quantity: number;
}
