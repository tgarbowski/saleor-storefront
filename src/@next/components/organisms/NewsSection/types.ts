export interface HomePagePages_news_edges_node_attributes_values_file {
  url: string;
  contentType: string;
}

export interface HomePagePages_news_edges_node_attributes_values {
  file: HomePagePages_news_edges_node_attributes_values_file;
}

export interface HomePagePages_news_edges_node_attributes {
  values: HomePagePages_news_edges_node_attributes_values[];
}

export interface HomePagePages_news_edges_node {
  __typename: "Page";
  id: string;
  slug: string;
  title: string;
  created: string;
  attributes: HomePagePages_news_edges_node_attributes[];
  content: any | null;
  seoDescription: string | null;
  seoTitle: string | null;
}

export interface HomePagePages_news_edges {
  __typename: "PageCountableEdge";
  node: HomePagePages_news_edges_node;
}

export interface HomePagePages_news {
  __typename: "PageCountableConnection";
  edges: HomePagePages_news_edges[];
}
