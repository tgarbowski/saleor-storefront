import React from "react";

import { CorrectPayment } from "@components/organisms/CorrectPayment";
import { FailurePayment } from "@components/organisms/FailurePayment";

const CapturedPaymentPage: React.FC<any> = ({}) => {
  if (window.location.href.split("?").pop() === "error=501") {
    // @ts-ignore
    return <FailurePayment />;
  }
  // @ts-ignore
  return <CorrectPayment />;
};

export { CapturedPaymentPage };
