/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Article
// ====================================================

export interface Article_page {
  __typename: "Page";
  content: any | null;
  /**
   * The ID of the object.
   */
  id: string;
  seoDescription: string | null;
  seoTitle: string | null;
  slug: string;
  title: string;
  attributes?: Array<{
    attribute: { id: string; name: string; slug: string};
    values: Array<{ name: string, id: string, slug: string, value: string, reference: string, file: {url: string, contentType: string} }>;
  }>;
}

export interface Article {
  /**
   * Look up a page by ID or slug.
   */
  page: Article_page | null;
}

export interface ArticleVariables {
  slug: string;
}
