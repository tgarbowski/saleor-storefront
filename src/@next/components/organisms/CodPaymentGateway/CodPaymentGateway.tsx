import { Formik } from "formik";
import React from "react";

import { Radio } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";
import { useEffect, useRef, useState } from "react";

/**
 * Cod payment gateway.
 */
const CodPaymentGateway: React.FC<IProps> = ({
  processPayment,
  formRef,
  formId,
  initialStatus,
}: IProps) => {
    const gatewayRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        processPayment();
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
          <div ref={gatewayRef} />
        </form>
      );
};

export { CodPaymentGateway };
