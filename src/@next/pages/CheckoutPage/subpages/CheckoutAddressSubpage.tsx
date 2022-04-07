import { useAuth, useCart, useCheckout } from "@saleor/sdk";
import React, {
  forwardRef,
  RefForwardingComponent,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useIntl } from "react-intl";

import { CustomPopup } from "@components/atoms/CustomPopup/CustomPopup";
import { CheckoutAddress } from "@components/organisms";
import { ShopContext } from "@temp/components/ShopProvider/context";
import { apiUrl, channelSlug } from "@temp/constants";
import { commonMessages } from "@temp/intl";
import { IAddress, IFormError, IProduct } from "@types";
import { filterNotEmptyArrayItems } from "@utils/misc";

import {
  CheckoutStep,
  SubpageBaseProps,
  SubpageCompleteHandler,
} from "../utils";

const CheckoutAddressSubpageWithRef: RefForwardingComponent<
  SubpageCompleteHandler,
  SubpageBaseProps
> = ({ changeSubmitProgress, onSubmitSuccess }, ref) => {
  const checkoutShippingAddressFormId = "shipping-address-form";
  const checkoutShippingAddressFormRef = useRef<HTMLFormElement>(null);
  const checkoutBillingAddressFormId = "billing-address-form";
  const checkoutBillingAddressFormRef = useRef<HTMLFormElement>(null);
  const checkoutNewAddressFormId = "new-address-form";

  const { user } = useAuth();
  const {
    checkout,
    selectedShippingAddressId,
    selectedBillingAddressId,
    billingAsShipping,
    setShippingAddress,
    setBillingAddress,
    setBillingAsShippingAddress,
  } = useCheckout();
  const { items, removeItem } = useCart();
  const { countries } = useContext(ShopContext);

  const [shippingErrors, setShippingErrors] = useState<IFormError[]>([]);
  const [billingErrors, setBillingErrors] = useState<IFormError[]>([]);
  const [notAvailableProducts, setNotAvailableProducts] = useState<
    { id: string; product: IProduct }[]
  >([]);

  const intl = useIntl();

  const isShippingRequiredForProducts =
    items &&
    items.some(
      ({ variant }) => variant.product?.productType.isShippingRequired
    );
  const checkoutShippingAddress = checkout?.shippingAddress
    ? {
        ...checkout?.shippingAddress,
        email: checkout?.email || user?.email,
      }
    : undefined;
  const checkoutBillingAddress = checkout?.billingAddress
    ? {
        ...checkout?.billingAddress,
        email: checkout?.email || user?.email,
      }
    : undefined;

  useImperativeHandle(ref, () => () => {
    if (isShippingRequiredForProducts) {
      checkoutShippingAddressFormRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    } else {
      checkoutBillingAddressFormRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    }
  });

  const [billingAsShippingState, setBillingAsShippingState] =
    useState(billingAsShipping);
  useEffect(() => {
    setBillingAsShippingState(billingAsShipping);
  }, [billingAsShipping]);

  const handleSetShippingAddress = async (
    address?: IAddress,
    email?: string,
    userAddressId?: string
  ) => {
    if (!address && !billingAsShippingState) {
      setShippingErrors([
        {
          message: intl.formatMessage({
            defaultMessage: "Please provide shipping address.",
          }),
        },
      ]);
      return;
    }

    const shippingEmail = user?.email || email || "";

    if (!shippingEmail) {
      setShippingErrors([
        {
          field: "email",
          message: intl.formatMessage(commonMessages.provideEmailAddress),
        },
      ]);
      return;
    }

    changeSubmitProgress(true);
    const { dataError } = await setShippingAddress(
      {
        ...address,
        id: userAddressId,
      },
      shippingEmail
    );
    const errors = dataError?.error;
    if (errors) {
      setShippingErrors(errors);
      changeSubmitProgress(false);

      const ids: (string | undefined)[] = [];
      items?.forEach(({ variant }) => {
        ids.push(variant.id);
      });
      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
          query: `
          query ProductVariants($ids: [ID]!, $channel: String) {
            productVariants(ids: $ids, channel: $channel first: 50) {
              edges{
                node{
                  id
                  quantityAvailable
                  product{
                    name
                    thumbnail{
                      url
                      alt
                    }
                  }
                }
              }
            }
          }
          `,
          variables: {
            ids,
            channel: channelSlug,
          },
        }),
        headers: {
          "content-type": "application/json",
        },
      }).then(data =>
        data.json().then(data => {
          data.data.productVariants.edges.forEach(
            (variant: {
              node: {
                id: string;
                quantityAvailable: number;
                product: IProduct;
              };
            }) => {
              const { id, quantityAvailable, product } = variant.node;
              if (quantityAvailable <= 0) {
                setNotAvailableProducts(oldProducts => [
                  ...oldProducts,
                  { id, product },
                ]);
              }
            }
          );
        })
      );
    } else {
      setShippingErrors([]);
      if (billingAsShippingState) {
        handleSetBillingAddress();
      } else {
        checkoutBillingAddressFormRef.current?.dispatchEvent(
          new Event("submit", { cancelable: true })
        );
      }
    }
  };

  const handleSetBillingAddress = async (
    address?: IAddress,
    email?: string,
    userAddressId?: string
  ) => {
    if (!address && !billingAsShippingState) {
      setBillingErrors([
        {
          message: intl.formatMessage({
            defaultMessage: "Please provide billing address.",
          }),
        },
      ]);
      changeSubmitProgress(false);
      return;
    }

    const billingEmail = user?.email || email;

    if (
      !billingEmail &&
      !billingAsShippingState &&
      !isShippingRequiredForProducts
    ) {
      setBillingErrors([
        {
          field: "email",
          message: intl.formatMessage(commonMessages.provideEmailAddress),
        },
      ]);
      return;
    }

    let errors;
    changeSubmitProgress(true);
    if (billingAsShippingState && isShippingRequiredForProducts) {
      const { dataError } = await setBillingAsShippingAddress();
      errors = dataError?.error;
    } else {
      const { dataError } = await setBillingAddress(
        {
          ...address,
          id: userAddressId,
        },
        billingEmail
      );
      errors = dataError?.error;
    }
    changeSubmitProgress(false);
    if (errors) {
      setBillingErrors(errors);
    } else {
      setBillingErrors([]);
      onSubmitSuccess(CheckoutStep.Shipping);
    }
  };

  const userAdresses = user?.addresses
    ?.filter(filterNotEmptyArrayItems)
    .map(address => ({
      address: {
        ...address,
        isDefaultBillingAddress: address.isDefaultBillingAddress || false,
        isDefaultShippingAddress: address.isDefaultShippingAddress || false,
        phone: address.phone || undefined,
      },
      id: address?.id || "",
      onSelect: () => null,
    }));

  return (
    <div>
      <CheckoutAddress
        shippingErrors={shippingErrors}
        billingErrors={billingErrors}
        shippingFormId={checkoutShippingAddressFormId}
        shippingFormRef={checkoutShippingAddressFormRef}
        billingFormId={checkoutBillingAddressFormId}
        billingFormRef={checkoutBillingAddressFormRef}
        checkoutShippingAddress={checkoutShippingAddress}
        checkoutBillingAddress={checkoutBillingAddress}
        billingAsShippingAddress={billingAsShippingState}
        email={checkout?.email}
        userAddresses={userAdresses}
        selectedUserShippingAddressId={selectedShippingAddressId}
        selectedUserBillingAddressId={selectedBillingAddressId}
        countries={countries}
        userId={user?.id}
        newAddressFormId={checkoutNewAddressFormId}
        shippingAddressRequired={!!isShippingRequiredForProducts}
        setShippingAddress={handleSetShippingAddress}
        setBillingAddress={handleSetBillingAddress}
        setBillingAsShippingAddress={setBillingAsShippingState}
      />
      {notAvailableProducts.length !== 0 && (
        <CustomPopup
          buttonText="Zamknij okno"
          title="Przepraszamy"
          modalText="Produkt, który masz w koszyku został wykupiony"
          onClose={() => {
            notAvailableProducts.forEach(({ id }) => {
              removeItem(id);
            });
            window.location.reload();
          }}
        >
          <div
            style={{ overflowY: "auto", height: "300px", maxHeight: "100%" }}
          >
            {notAvailableProducts &&
              notAvailableProducts.map(({ product }) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "2rem",
                      marginTop: "1rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <img
                      style={{ objectFit: "cover", width: "6rem" }}
                      src={product.thumbnail?.url}
                      alt={product.thumbnail?.alt || ""}
                    />
                    <div>{product.name}</div>
                  </div>
                );
              })}
          </div>
        </CustomPopup>
      )}
    </div>
  );
};

const CheckoutAddressSubpage = forwardRef(CheckoutAddressSubpageWithRef);

export { CheckoutAddressSubpage };
