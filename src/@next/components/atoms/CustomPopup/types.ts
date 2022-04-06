import React from "react";

export interface IProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}
