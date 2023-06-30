import { ProductDetails } from "@saleor/sdk/lib/fragments/gqlTypes/ProductDetails";

export interface IProps {
  description?: string;
  attributes?: Array<{
    attribute: { name: string };
    values: Array<{ name: string }>;
  }>;
  variants?: (ProductDetails_product_variants | null)[] | null;
  product: ProductDetails;
}

interface ProductDetails_product_variants {
  id: string;
  sku: string;
  name: string;
}
