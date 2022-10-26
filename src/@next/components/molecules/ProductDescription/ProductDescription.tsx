import React from "react";
import { FormattedMessage } from "react-intl";

import { RichTextEditorContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

enum TABS {
  DESCRIPTION = "DESCRIPION",
  ATTRIBUTES = "ATTRIBUTES",
}

export const ProductDescription: React.FC<IProps> = ({
  description,
  attributes,
  variants,
}: IProps) => {
  const [activeTab, setActiveTab] = React.useState<TABS>(TABS.DESCRIPTION);
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
        <RichTextEditorContent jsonData={description} />
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
