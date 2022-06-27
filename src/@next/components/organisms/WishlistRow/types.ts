import React from "react";

import { IImage } from "@types";

export type IWishlistRowType = "responsive" | "condense";

export interface IProps {
  /**
   * Item index
   */
  index?: number;
  /**
   * Id of the product
   */
  id: string;
  slug: string;
  /**
   * Price for single unit
   */
  unitPrice: React.ReactNode;
  /**
   * Price of single unit mupltiplied by quantity
   */
  totalPrice: React.ReactNode;
  /**
   * Name of the product
   */
  name: string;
  /**
   * Stock keeping unit
   */
  sku?: string;
  onRemove: () => void;
  /**
   * Product thumbnail image
   */
  thumbnail?: IImage;
  /**
   * Variant attributes
   */
  attributes?: Array<{
    attribute: { id: string; name: string };
    values: Array<{ name: string }>;
  }>;
  /**
   * Visual row style
   */
  type?: IWishlistRowType;
}
