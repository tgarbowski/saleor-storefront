import React from "react";

export interface IProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  title: string;
  buttonText: string;
  modalText: string;
}
