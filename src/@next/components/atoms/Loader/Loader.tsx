import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const Loader: React.FC<IProps> = ({ fullScreen }: IProps) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "10%",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
      }}
    >
      <S.Wrapper fullScreen={!!fullScreen}>
        <S.Items>
          <span />
          <span />
          <span />
        </S.Items>
      </S.Wrapper>
    </div>
  );
};
