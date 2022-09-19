import { GetStaticPaths, GetStaticProps } from "next";

import {
  incrementalStaticRegenerationRevalidate,
  staticPathsFallback,
  staticPathsFetchBatch,
} from "@temp/constants";
import { SaleView, SaleViewProps } from "@temp/views/Sale";
import { exhaustList, getSaleorApi } from "@utils/ssr";

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

    const paths = data.map(({ name }) => ({
      params: { name },
    }));

    return { paths, fallback: staticPathsFallback };
  };

export const getStaticProps: GetStaticProps<
  SaleViewProps,
  SaleViewProps["params"]
> = async ({ params: { name } }) => {
  let data = null;
  const { api } = await getSaleorApi();
  const { data: details } = await api.sales.getDetails({ name });

  if (details) {
    const { id } = details;
    data = {
      details,
      id,
    };
  }

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      data,
      params: { name },
    },
  };
};
