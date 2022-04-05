import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const CustomPopup: React.FC<IProps> = ({
  children,
  onClose = () => null,
}: IProps) => {
  return (
    <S.CustomModal>
      <S.CustomModalContent>{children}</S.CustomModalContent>
    </S.CustomModal>
  );
};
