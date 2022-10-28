import gql from "graphql-tag";

export const pagesQuery = gql`
  query Pages($channelSlug: String) {
    pages(
      first: 50
      filter: { metadata: { key: "channel", value: $channelSlug } }
    ) {
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

export const articleQuery = gql`
  query Article($slug: String!) {
    page(slug: $slug) {
      content
      id
      seoDescription
      seoTitle
      slug
      title
      attributes {
        attribute {
          slug
          id
          name
          inputType
        }
        values {
          id
          name
          slug
          value
          reference
          file {
            url
            contentType
          }
        }
      }
    }
  }
`;
