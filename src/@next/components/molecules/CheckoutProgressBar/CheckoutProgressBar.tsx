import { useCheckout } from "@saleor/sdk";
import Link from "next/link";
import React from "react";
import { IntlShape, useIntl } from "react-intl";

import { checkoutMessages } from "@temp/intl";
import { ICheckoutStep } from "@types";

import * as S from "./styles";
import { IProps } from "./types";

const activeDot = (
  <S.ActiveDot>
    <S.Dot done />
  </S.ActiveDot>
);

const inactiveDot = <S.Dot />;

const generateDot = (
  stepIndex: number,
  currentActiveStep: number,
  isClickableLocalPickup: boolean
) => {
  if (stepIndex < currentActiveStep) {
    return <S.Dot done clickableLocalPickup={isClickableLocalPickup} />;
  }
  if (stepIndex === currentActiveStep) {
    return activeDot;
  }
  if (stepIndex > currentActiveStep) {
    return inactiveDot;
  }
};

const generateLabel = (
  stepIndex: number,
  name: string,
  numberOfSteps: number
) => {
  if (stepIndex === 0) {
    return <S.LeftLabel>{name}</S.LeftLabel>;
  }
  if (stepIndex === numberOfSteps - 1) {
    return <S.RightLabel>{name}</S.RightLabel>;
  }
  return <S.Label>{name}</S.Label>;
};

const generateProgressBar = (
  index: number,
  currentActive: number,
  numberOfSteps: number
) => {
  if (index !== numberOfSteps - 1) {
    return <S.ProgressBar done={currentActive > index} />;
  }
};

const generateSteps = (
  steps: ICheckoutStep[],
  currentActive: number,
  intl: IntlShape
) => {
  return steps?.map((step, index) => {
    let { name } = step;
    /* eslint-disable default-case */
    switch (step.name) {
      case "Address":
        name = intl.formatMessage(checkoutMessages.stepNameAddress);
        break;
      case "Shipping":
        name = intl.formatMessage(checkoutMessages.stepNameShipping);
        break;
      case "Payment":
        name = intl.formatMessage(checkoutMessages.stepNamePayment);
        break;
      case "Review":
        name = intl.formatMessage(checkoutMessages.stepNameReview);
        break;
    }

    const isClickableLocalPickup =
      index !== 1 && index !== 2 && index <= currentActive;
    const isClickable = index === currentActive || index < currentActive;

    const { checkout } = useCheckout();

    return (
      <S.Step key={step.index}>
        {checkout?.shippingMethod?.name === "Odbiór osobisty" ? (
          isClickableLocalPickup ? (
            <Link href={step.link}>
              <a>
                {generateDot(index, currentActive, false)}
                {generateLabel(index, name, steps.length)}
              </a>
            </Link>
          ) : (
            <>
              {generateDot(index, currentActive, true)}
              {generateLabel(index, name, steps.length)}
            </>
          )
        ) : isClickable ? (
          <Link href={step.link}>
            <a>
              {generateDot(index, currentActive, false)}
              {generateLabel(index, name, steps.length)}
            </a>
          </Link>
        ) : (
          <>
            {generateDot(index, currentActive, false)}
            {generateLabel(index, name, steps.length)}
          </>
        )}
        {generateProgressBar(index, currentActive, steps.length)}
      </S.Step>
    );
  });
};

/**
 * Progress bar showing current step of checkout process.
 */
const CheckoutProgressBar: React.FC<IProps> = ({
  steps,
  activeStep,
}: IProps) => {
  const intl = useIntl();
  return <S.Wrapper>{generateSteps(steps, activeStep, intl)}</S.Wrapper>;
};

export { CheckoutProgressBar };
