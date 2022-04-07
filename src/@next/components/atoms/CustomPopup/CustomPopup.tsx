import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const CustomPopup: React.FC<IProps> = ({
  children,
  onClose = () => null,
  title,
  buttonText,
  modalText,
}: IProps) => {
  return (
    <S.CustomModal>
      <S.CustomModalContent>
        <S.CustomModalTitle>{title}</S.CustomModalTitle>
        <S.CustomModalText>{modalText}</S.CustomModalText>
        {children}
        <S.CustomModalCloseButton onClick={onClose}>
          {buttonText}
        </S.CustomModalCloseButton>
      </S.CustomModalContent>
    </S.CustomModal>
  );
};
