import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const OnSaleTag: React.FC<IProps> = ({ style, children }: IProps) => {
  return <S.Label style={style}>{children}</S.Label>;
};
