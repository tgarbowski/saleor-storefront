/* eslint-disable react/no-danger */

import { sanitize } from "dompurify";
import draftToHtml from "draftjs-to-html";
import React from "react";
import * as S from "./styles";

import { IProps } from "./types";

export const RichTextContent: React.FC<IProps> = ({ descriptionJson }) => (
  <>
    {descriptionJson && (
      <S.Wrapper
        dangerouslySetInnerHTML={{
          __html: sanitize(draftToHtml(JSON.parse(descriptionJson))),
        }}
      />
    )}
  </>
);
