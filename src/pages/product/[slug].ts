import { VariantAttributeScope } from "@saleor/sdk";
import {
  // GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
} from "next";

import {
  channelSlug,
  // incrementalStaticRegenerationRevalidate,
  staticPathsFallback,
  // staticPathsFetchBatch,
} from "@temp/constants";
import {
  // exhaustList,
  getSaleorApi,
} from "@utils/ssr";

import { ProductPage, ProductPageProps } from "../../views/Product";

export default ProductPage;

export const getStaticPaths: GetStaticPaths<ProductPageProps["params"]> =
  async () => {
    // const { api } = await getSaleorApi();
    // const { data } = await exhaustList(
    //   api.products.getList({
    //     first: staticPathsFetchBatch,
    //     channel: channelSlug,
    //   })
    // );

    // const paths = data.map(({ slug }) => ({
    //   params: { slug },
    // }));

    return { paths: [], fallback: staticPathsFallback };
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

  // await fetch("http://localhost:8000/graphql/", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     query: `
  //       query ProductDetails($id: ID!, $channel: String) {
  //         product(id: $id, channel: $channel) {
  //           __typename
  //           pricing{
  //             onSale
  //             priceRange{
  //               start{
  //                 gross{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 net{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 __typename
  //               }
  //               stop{
  //                 gross{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 net{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 __typename
  //               }
  //               __typename
  //             }
  //             priceRangeUndiscounted{
  //               start{
  //                 gross{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 net{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 __typename
  //               }
  //               stop{
  //                 gross{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 net{
  //                   amount
  //                   currency
  //                   __typename
  //                 }
  //                 __typename
  //               }
  //               __typename
  //             }
  //             __typename
  //           }
  //         }
  //       }
  //       `,
  //     variables: {
  //       id: data.id,
  //       channel: channelSlug,
  //     },
  //   }),
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // }).then(result =>
  //   result.json().then(result => {
  //     // console.log(result);
  //     // data.pricing = result.data.product.pricing;
  //     // console.log(result.data.product.pricing.priceRange.start.gross);
  //   })
  // );

  // console.log(data.pricing.priceRange.start.gross);

  return {
    revalidate: 5,
    props: { data: data || null, params },
  };
};

// export const getServerSideProps: GetServerSideProps<
//   ProductPageProps,
//   ProductPageProps["params"]
// > = async ({ params }) => {
//   const { api } = await getSaleorApi();
//   const { data } = await api.products.getDetails({
//     slug: params.slug,
//     channel: channelSlug,
//     variantSelection: VariantAttributeScope.VARIANT_SELECTION,
//   });

//   await fetch("http://localhost:8000/graphql/", {
//     method: "POST",
//     body: JSON.stringify({
//       query: `
//         query ProductDetails($id: ID!, $channel: String) {
//           product(id: $id, channel: $channel) {
//             __typename
//             pricing{
//               onSale
//               priceRange{
//                 start{
//                   gross{
//                     amount
//                     currency
//                     __typename
//                   }
//                   net{
//                     amount
//                     currency
//                     __typename
//                   }
//                   __typename
//                 }
//                 stop{
//                   gross{
//                     amount
//                     currency
//                     __typename
//                   }
//                   net{
//                     amount
//                     currency
//                     __typename
//                   }
//                   __typename
//                 }
//                 __typename
//               }
//               priceRangeUndiscounted{
//                 start{
//                   gross{
//                     amount
//                     currency
//                     __typename
//                   }
//                   net{
//                     amount
//                     currency
//                     __typename
//                   }
//                   __typename
//                 }
//                 stop{
//                   gross{
//                     amount
//                     currency
//                     __typename
//                   }
//                   net{
//                     amount
//                     currency
//                     __typename
//                   }
//                   __typename
//                 }
//                 __typename
//               }
//               __typename
//             }
//           }
//         }
//         `,
//       variables: {
//         id: data.id,
//         channel: "allegro",
//       },
//     }),
//     headers: {
//       "content-type": "application/json",
//     },
//     credentials: "same-origin",
//   }).then(result =>
//     result.json().then(result => {
//       // console.log(result);
//       data.pricing = result.data.product.pricing;
//       console.log(result.data.product.pricing.priceRange.start.gross);
//     })
//   );

//   console.log(data.pricing.priceRange.start.gross);

//   return {
//     // revalidate: incrementalStaticRegenerationRevalidate,
//     props: { data: data || null, params },
//   };
// };
