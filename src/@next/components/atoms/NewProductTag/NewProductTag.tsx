import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const NewProductTag: React.FC<IProps> = ({ children }: IProps) => {
  return <S.Label>{children}</S.Label>;
};
