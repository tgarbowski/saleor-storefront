import gql from "graphql-tag";

export const getProductsQuery = gql`
  query GetProducts($cursor: String, $perPage: Int, $channel: String) {
    products(after: $cursor, first: $perPage, channel: $channel) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export const getCategoriesQuery = gql`
  query GetCategories($cursor: String, $perPage: Int) {
    categories(after: $cursor, first: $perPage) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export const getSalesQuery = gql`
  query GetSales($cursor: String, $perPage: Int, $channel: String) {
    sales(after: $cursor, first: $perPage, channel: $channel) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          products {
            totalCount
          }
        }
      }
    }
  }
`;

export const getCollectionsQuery = gql`
  query GetCollections($cursor: String, $perPage: Int, $channel: String) {
    collections(after: $cursor, first: $perPage, channel: $channel) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          slug
          description
          backgroundImage {
            url
          }
        }
      }
    }
  }
`;
