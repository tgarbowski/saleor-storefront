/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSales
// ====================================================

export interface GetSales_sales_pageInfo {
    __typename: "PageInfo";
    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: string | null;
    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;
  }
  
  export interface GetSales_sales_edges_node {
    __typename: "Sale";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
  }
  
  export interface GetSales_sales_edges {
    __typename: "SaleCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: GetSales_sales_edges_node;
  }
  
  export interface GetSales_sales {
    __typename: "SaleCountableConnection";
    /**
     * Pagination data for this connection.
     */
    pageInfo: GetSales_sales_pageInfo;
    edges: GetSales_sales_edges[];
  }
  
  export interface GetSales {
    /**
     * List of the shop's sales.
     */
    sales: GetSales_sales | null;
  }
  
  export interface GetSalesVariables {
    cursor?: string | null;
    perPage?: number | null;
    channel?: string | null;
  }
  