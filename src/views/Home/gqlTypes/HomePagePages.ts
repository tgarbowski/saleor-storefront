export interface HomePagePages_news_edges_node_attributes_values_file {
    url: string;
    contentType: string;
}

export interface HomePagePages_news_edges_node_attributes_values {
    file: HomePagePages_news_edges_node_attributes_values_file;
}

export interface HomePagePages_news_edges_node_attributes {
    values: HomePagePages_news_edges_node_attributes_values;
}

export interface HomePagePages_news_edges_node {
    __typename: "Sale";
    slug: string;
    title: string;
    attributes: HomePagePages_news_edges_node_attributes
}

export interface HomePagePages_news_edges {
    __typename: "SaleCountableEdge";
    node: HomePagePages_news_edges_node;
}

export interface HomePagePages_news {
    __typename: "SaleCountableConnection";
    edges: HomePagePages_news_edges[];
}