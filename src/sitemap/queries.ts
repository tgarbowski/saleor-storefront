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

export const getPagesQuery = gql`
  query GetPages($cursor: String, $perPage: Int) {
    pages(after: $cursor, first: $perPage) {
      edges {
        node {
          id
          slug
          title
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

export const getNewsIdQuery = gql`
  query GetNewsId {
    pageTypes(first: 10, filter: { search: "news" }) {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;

export const getNewsQuery = gql`
  query Pages($id: ID, $channelSlug: String) {
    pages(
      sortBy: { field: CREATION_DATE, direction: DESC }
      first: 50
      filter: {
        pageTypes: [$id]
        metadata: { key: "channel", value: $channelSlug }
      }
    ) {
      edges {
        node {
          slug
          title
          content
          seoDescription
          seoTitle
          created
          attributes {
            values {
              file {
                url
                contentType
              }
            }
          }
        }
      }
    }
  }
`;
