import * as React from "react";

import { RichTextEditorContent } from "../../@next/components/atoms";
import { Breadcrumb, Breadcrumbs } from "../../components";

interface PageProps {
  breadcrumbs: Breadcrumb[];
  headerImage: string | null;
  page: {
    content: any | null;
    title: string;
  };
}
export const Page: React.FC<PageProps> = ({
  breadcrumbs,
  headerImage,
  page,
}) => (
  <div className="article-page">
    <div
      className="article-page__header"
      style={headerImage ? { backgroundImage: `url(${headerImage})` } : null}
    >
      <span className="article-page__header__title">
        <h1>{page.title}</h1>
      </span>
    </div>
    <div className="container">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="article-page__container">
        <div className="article-page__content">
          <RichTextEditorContent jsonData={page.content} />
        </div>
      </div>
    </div>
  </div>
);
export default Page;
