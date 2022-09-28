import { GetStaticPaths, GetStaticProps } from "next";

import {
  incrementalStaticRegenerationRevalidate,
  staticPathsFallback,
  staticPathsFetchBatch,
} from "@temp/constants";
import { SaleView, SaleViewProps } from "@temp/views/Sale";
import { exhaustList, getSaleorApi, getShopAttributes } from "@utils/ssr";

export default SaleView;

export const getStaticPaths: GetStaticPaths<SaleViewProps["params"]> =
  async () => {
    const { api } = await getSaleorApi();
    const { data } = await exhaustList(
      api.sales.getList({
        first: 50,
      }),
      staticPathsFetchBatch
    );

    const paths = data.map(({ id }) => ({
      params: { id },
    }));

    return { paths, fallback: staticPathsFallback };
  };

export const getStaticProps: GetStaticProps<
  SaleViewProps,
  SaleViewProps["params"]
> = async ({ params: { id } }) => {
  let data = null;
  const { api } = await getSaleorApi();
  const { data: details } = await api.sales.getDetails({ id });

  if (details) {
    const { id } = details;
    const [attributes] = await Promise.all([getShopAttributes({ saleId: id })]);

    data = {
      details,
      attributes,
      id,
    };
  }

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      data,
      params: { id },
    },
  };
};
