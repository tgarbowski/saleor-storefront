/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageProducts
// ====================================================

export interface HomePageProducts_shop {
  __typename: "Shop";
  /**
   * Shop's description.
   */
  description: string | null;
  /**
   * Shop's name.
   */
  name: string;
}

export interface HomePageProducts_categories_edges_node_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface HomePageProducts_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  backgroundImage: HomePageProducts_categories_edges_node_backgroundImage | null;
}

export interface HomePageProducts_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: HomePageProducts_categories_edges_node;
}

export interface HomePageProducts_categories {
  __typename: "CategoryCountableConnection";
  edges: HomePageProducts_categories_edges[];
}


export interface HomePageProducts_collections_edges_node_backgroundImage {
  __typename: "Image";
  url: string;
}

export interface HomePageProducts_collections_edges_node {
  __typename: "Collection";
  id: string;
  name: string;
  slug: string;
  description: string;
  backgroundImage: HomePageProducts_collections_edges_node_backgroundImage | null;
}

export interface HomePageProducts_collections_edges {
  __typename: "CollectionCountableEdge";
  node: HomePageProducts_collections_edges_node;
}

export interface HomePageProducts_collections {
  __typename: "CollectionCountableConnection";
  edges: HomePageProducts_collections_edges[];
}

export interface HomePageProducts_sales_edges_node_backgroundImage {
  __typename: "Image";
  url: string;
}

import { ProductList_products } from "@saleor/sdk/lib/queries/gqlTypes/ProductList";

export interface HomePageProducts_sales_edges_node {
  __typename: "Sale";
  id: string;
  name: string;
  description: string;
  backgroundImage: HomePageProducts_sales_edges_node_backgroundImage | null;
  products?: ProductList_products | null;
}

export interface HomePageProducts_sales_edges {
  __typename: "SaleCountableEdge";
  node: HomePageProducts_sales_edges_node;
}

export interface HomePageProducts_sales {
  __typename: "SaleCountableConnection";
  edges: HomePageProducts_sales_edges[];
}

export interface HomePageSales {
  sales: HomePageProducts_sales | null;
}
export interface HomePageCollections {
  collections: HomePageProducts_collections | null;
}
export interface HomePageProducts {
  shop: HomePageProducts_shop;
  categories: HomePageProducts_categories | null;
}