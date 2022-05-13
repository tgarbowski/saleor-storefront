import React, { useRef } from "react";

import { IProps } from "./types";

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
    processPayment("");
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div ref={gatewayRef} />
    </form>
  );
};

export { CodPaymentGateway };
