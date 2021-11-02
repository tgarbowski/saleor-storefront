/*
import Link from "next/link";
import React from "react";
import { generatePath } from "react-router";

import { CorrectPayment } from "@components/organisms/CorrectPayment";
import { FailurePayment } from "@components/organisms/FailurePayment";
import { paths } from "@paths";

const capturedUrl = generatePath(paths.capturedPayment);
const notCapturedUrl = generatePath(paths.notCapturedPayment);

const CapturedPaymentPage: React.FC<any> = ({}) => {
  if (window.location.href.split("?").pop() === "error=501") {
    // @ts-ignore
    return (
      // @ts-ignore
      <Link href={capturedUrl}>
        {/* @ts-ignore }
        <FailurePayment />
      </Link>
    );
  }
  // @ts-ignore
  return <CorrectPayment />;
};

export { CapturedPaymentPage };
*/
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
