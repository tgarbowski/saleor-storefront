import { VariantAttributeScope } from "@saleor/sdk";
import { OrderDirection, ProductOrderField } from "gqlTypes/globalTypes";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  apiUrl,
  channelSlug,
  staticPathsFallback,
  staticPathsFetchBatch,
} from "@temp/constants";
import { exhaustList, getSaleorApi } from "@utils/ssr";

import { ProductPage, ProductPageProps } from "../../views/Product";

export default ProductPage;

export const getStaticPaths: GetStaticPaths<ProductPageProps["params"]> =
  async () => {
    const { api } = await getSaleorApi();
    const { data } = await exhaustList(
      api.products.getList({
        first: 50,
        channel: channelSlug,
        sortBy: {
          field: ProductOrderField.DATE,
          direction: OrderDirection.DESC,
        },
      }),
      staticPathsFetchBatch
    );

    const paths = data.map(({ slug }) => ({
      params: { slug },
    }));
    return { paths, fallback: staticPathsFallback };
  };

export const getStaticProps: GetStaticProps<
  ProductPageProps,
  ProductPageProps["params"]
> = async ({ params }) => {
  const { api } = await getSaleorApi();
  const { data } = await api.products.getDetails({
    slug: params.slug,
    channel: channelSlug,
    variantSelection: VariantAttributeScope.VARIANT_SELECTION,
  });

  if (data) {
    await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        query: `
          query ProductDetails($id: ID!, $channel: String) {
            product(id: $id, channel: $channel) {
              variants{
                quantityAvailable
              }
              pricing{
                onSale
                priceRange{
                  start{
                    gross{
                      amount
                      currency
                      __typename
                    }
                    net{
                      amount
                      currency
                      __typename
                    }
                    __typename
                  }
                  stop{
                    gross{
                      amount
                      currency
                      __typename
                    }
                    net{
                      amount
                      currency
                      __typename
                    }
                    __typename
                  }
                  __typename
                }
                priceRangeUndiscounted{
                  start{
                    gross{
                      amount
                      currency
                      __typename
                    }
                    net{
                      amount
                      currency
                      __typename
                    }
                    __typename
                  }
                  stop{
                    gross{
                      amount
                      currency
                      __typename
                    }
                    net{
                      amount
                      currency
                      __typename
                    }
                    __typename
                  }
                  __typename
                }
                __typename
              }
            }
          }
          `,
        variables: {
          id: data.id,
          channel: channelSlug,
        },
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(result =>
      result.json().then(result => {
        data.pricing = result.data.product.pricing;
        data.variants[0].quantityAvailable =
          result.data.product.variants[0].quantityAvailable;
      })
    );
  }
  return {
    revalidate: 259200,
    props: { data: data || null, params },
  };
};
