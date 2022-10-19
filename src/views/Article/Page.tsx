import * as React from "react";

import { awsMediaBucket } from "@temp/constants";

import { RichTextEditorContent } from "../../@next/components/atoms";
import { Breadcrumb, Breadcrumbs } from "../../components";

interface PageProps {
  breadcrumbs: Breadcrumb[];
  page: {
    content: any | null;
    title: string;
  };
  attributes?: Array<{
    attribute: { id: string; name: string; slug: string };
    values: Array<{
      name: string;
      id: string;
      slug: string;
      value: string;
      reference: string;
      file: { url: string; contentType: string };
    }>;
  }>;
}
export const Page: React.FC<PageProps> = ({
  breadcrumbs,
  page,
  attributes,
}) => {
  return (
    <div className="article-page">
      <div className="container">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="article-page__primaryImage">
          {attributes
            .slice(0, 1)
            .map(({ attribute, values }, attributeIndex) => (
              <div key={attribute.id} data-test-id={attributeIndex}>
                {values.map(value => {
                  const url = value?.file?.url.split("/");
                  const correctedUrl = `${awsMediaBucket}/${
                    url[url.length - 2]
                  }/${url[url.length - 1]}`;
                  return <img src={correctedUrl} alt="ss" key={value.id} />;
                })}
              </div>
            ))}
        </div>
        <div className="article-page__header">
          <span className="article-page__header__title">
            <h1>{page.title}</h1>
          </span>
        </div>
        <div className="article-page__container">
          <div className="article-page__content">
            <RichTextEditorContent jsonData={page.content} />
          </div>
          <div className="article-page__images">
            {attributes
              .slice(1, 3)
              .map(({ attribute, values }, attributeIndex) => (
                <div key={attribute.id} data-test-id={attributeIndex}>
                  {values.map(value => {
                    const url = value?.file?.url.split("/");
                    const correctedUrl = `${awsMediaBucket}/${
                      url[url.length - 2]
                    }/${url[url.length - 1]}`;
                    return <img src={correctedUrl} alt="ss" key={value.id} />;
                  })}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
