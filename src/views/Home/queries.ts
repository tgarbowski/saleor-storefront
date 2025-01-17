import gql from "graphql-tag";

export const homePageProductsQuery = gql`
  query HomePageProducts {
    shop {
      description
      name
    }
    categories(level: 0, first: 5) {
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
