import { useCheckout } from "@saleor/sdk";
import React, {
  forwardRef,
  RefForwardingComponent,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import { CheckoutShipping } from "@components/organisms";
import { shopInfoQuery, useTypedQuery } from "@graphql/queries";
import { IFormError } from "@types";

import {
  CheckoutStep,
  SubpageBaseProps,
  SubpageCompleteHandler,
} from "../utils";

const CheckoutShippingSubpageWithRef: RefForwardingComponent<
  SubpageCompleteHandler,
  SubpageBaseProps
> = ({ changeSubmitProgress, onSubmitSuccess }, ref) => {
  const checkoutShippingFormId = "shipping-form";
  const checkoutShippingFormRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<IFormError[]>([]);
  const [lockerId, setLockerId] = useState<string>("");

  const {
    checkout,
    availableShippingMethods,
    setShippingMethod,
    setShippingAddress,
    setShippingLockerId,
  } = useCheckout();

  const { data } = useTypedQuery(shopInfoQuery);
  const companyAddress = data?.shop?.companyAddress || null;

  const shippingMethods = availableShippingMethods || [];

  useImperativeHandle(ref, () => () => {
    checkoutShippingFormRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true })
    );
  });
  const handleSetShippingMethod = async (shippingMethod: {
    id: string;
    name: string;
  }) => {
    changeSubmitProgress(true);
    const { dataError } = await setShippingMethod(shippingMethod?.id);
    const errors = dataError?.error;
    changeSubmitProgress(false);
    if (errors) {
      setErrors(errors);
    } else {
      const { dataError } = await setShippingLockerId(lockerId);
      const errors = dataError?.error;
      if (errors) {
        setErrors(errors);
      } else {
        setErrors([]);

        if (shippingMethod?.name === "Odbiór osobisty") {
          await setShippingAddress(
            {
              firstName: "",
              lastName: "",
              streetAddress2: "",
              id: companyAddress.id,
              companyName: companyAddress.companyName,
              streetAddress1: companyAddress.streetAddress1,
              city: companyAddress.city,
              postalCode: companyAddress.postalCode,
              phone: companyAddress.phone,
              country: companyAddress.country,
            },
            ""
          );
        }
        if (
          shippingMethod?.name === "Inpost paczkomaty" &&
          (lockerId === null || lockerId === "")
        ) {
          return <p>Musisz wybrać paczkomat.</p>;
        }
        onSubmitSuccess(CheckoutStep.Shipping);
      }
    }
  };
  return (
    <CheckoutShipping
      shippingMethods={shippingMethods}
      selectedShippingMethodId={checkout?.shippingMethod?.id}
      errors={errors}
      selectShippingMethod={handleSetShippingMethod}
      formId={checkoutShippingFormId}
      formRef={checkoutShippingFormRef}
      setLockerId={setLockerId}
    />
  );
};
const CheckoutShippingSubpage = forwardRef(CheckoutShippingSubpageWithRef);
export { CheckoutShippingSubpage };
