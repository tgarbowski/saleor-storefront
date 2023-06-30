import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import { RichTextEditorContent } from "@components/atoms";
import { apiUrl, channelSlug } from "@temp/constants";

import * as S from "./styles";
import { IProps } from "./types";

enum TABS {
  DESCRIPTION = "DESCRIPION",
  ATTRIBUTES = "ATTRIBUTES",
}

type Metadata = {
  key: string;
  value: string;
};

type ProductType = {
  metadata: Metadata[];
};

const dimensionsPhotos = {
  templateA:
    "https://saleor-sandbox-media.s3.eu-central-1.amazonaws.com/templates/Szablon-1.png",
  templateB:
    "https://saleor-sandbox-media.s3.eu-central-1.amazonaws.com/templates/Szablon-2.png",
  templateC:
    "https://saleor-sandbox-media.s3.eu-central-1.amazonaws.com/templates/Szablon-3.png",
  templateD:
    "https://saleor-sandbox-media.s3.eu-central-1.amazonaws.com/templates/Szablon-4.png",
  templateE:
    "https://saleor-sandbox-media.s3.eu-central-1.amazonaws.com/templates/Szablon-5.png",
};

export const ProductDescription: React.FC<IProps> = ({
  description,
  attributes,
  variants,
  product,
}: IProps) => {
  const [activeTab, setActiveTab] = useState<TABS>(TABS.DESCRIPTION);
  const [productType, setProductType] = useState(null);

  const getProductType = async (id: string) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        query: `
          query ProductDetails($id: ID!, $channel: String) {
            product(id: $id, channel: $channel) {
              productType {
                metadata {
                  key
                  value
                }
              }
            }
          }
        `,
        variables: {
          id: product?.id,
          channel: channelSlug,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.errors?.[0]?.message || "Failed to fetch product type"
      );
    }

    const { productType } = data.data.product;
    return productType;
  };

  useEffect(() => {
    getProductType(product?.id).then(setProductType);
  }, [product?.id]);

  const dimensionsTemplate = (
    productType as unknown as ProductType
  )?.metadata?.find(meta => meta.key === "template")?.value;

  return (
    <S.Wrapper>
      <S.Tabs>
        <S.TabTitle
          active={activeTab === TABS.DESCRIPTION}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.DESCRIPTION);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.DESCRIPTION);
          }}
        >
          <FormattedMessage defaultMessage="OPIS" />
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.ATTRIBUTES}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.ATTRIBUTES);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.ATTRIBUTES);
          }}
        >
          <FormattedMessage defaultMessage="ATRYBUTY" />
        </S.TabTitle>
      </S.Tabs>
      <div hidden={activeTab !== TABS.DESCRIPTION}>
        <>
          <RichTextEditorContent jsonData={description} />
          <div>
            {dimensionsTemplate && (
              <img
                style={{
                  width: "600px",
                  height: "400px",
                  objectFit: "contain",
                }}
                src={
                  dimensionsPhotos[
                    `template${dimensionsTemplate}` as keyof typeof dimensionsPhotos
                  ]
                }
                alt=""
              />
            )}
          </div>
        </>
      </div>
      <div hidden={activeTab !== TABS.ATTRIBUTES}>
        <S.AttributeList>
          {attributes &&
            attributes.map((attribute, index) => (
              <li key={index}>
                <S.AttributeName>{attribute.attribute.name}: </S.AttributeName>{" "}
                {attribute.values.map(value => value.name).join(", ")}
              </li>
            ))}
          {variants?.map(variant => {
            return (
              <li key={variant?.id}>
                <S.AttributeName>SKU: </S.AttributeName>
                {variant?.sku}
              </li>
            );
          })}
        </S.AttributeList>
      </div>
    </S.Wrapper>
  );
};
