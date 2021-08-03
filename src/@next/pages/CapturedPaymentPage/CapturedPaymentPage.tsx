import React from "react";

import {CorrectPayment} from "@components/organisms/CorrectPayment";
import {IProps} from "./types";
import {FailurePayment} from "@components/organisms/FailurePayment";

const CapturedPaymentPage: React.FC<IProps> = ({}: IProps) => {

  if (window.location.href.split("?").pop() === "error=501") {
    return (
        <FailurePayment/>
    );
  } else {
    return (
        <CorrectPayment/>
    );
  }
};

export { CapturedPaymentPage };
