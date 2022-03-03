import * as React from "react";

import "./scss/index.scss";

type ButtonType = "submit" | "reset" | "button";
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  secondary?: boolean;
  third?: boolean;
  btnRef?: React.RefObject<HTMLButtonElement>;
  /**
   * Used as marker for writing e2e tests
   */
  testingContext: string;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  testingContext,
  secondary,
  third,
  btnRef,
  type,
  ...otherProps
}) => (
  <button
    data-test={testingContext}
    className={`button branding ${secondary ? "secondary" : ""} ${third ? "third" : ""} ${className}`}
    ref={btnRef}
    type={type as ButtonType}
    {...otherProps}
  >
    <span>{children}</span>
  </button>
);

export default Button;
