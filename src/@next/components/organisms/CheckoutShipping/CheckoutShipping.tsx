import { Formik } from "formik";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import { ErrorMessage, Radio } from "@components/atoms";
import { Money } from "@components/containers";
import { checkoutMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

type Point = {
  name: string;
  address: {
    line1: string;
    line2: string;
  };
  address_details: {
    city: string;
    post_code: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
};

declare global {
  interface Window {
    easyPackAsyncInit: () => void;
    easyPack: any;
  }
}

/**
 * Shipping method selector used in checkout.
 */
const CheckoutShipping: React.FC<IProps> = ({
  shippingMethods,
  selectedShippingMethodId,
  selectShippingMethod,
  errors,
  formId,
  formRef,
  setLockerId,
}) => {
  const [pointName, setPointName] = useState(``);
  const [isShowMap, setShowMap] = useState<boolean>(false);
  const styleHidden = { height: "500px", position: "absolute", left: "-999px" };
  const styleShown = { height: "500px" };

  const getLocation = () => {
    window.easyPackAsyncInit = () => {
      window.easyPack.init({
        instance: "pl",
        mapType: "osm",
        searchType: "osm",
        points: {
          types: ["parcel_locker"],
        },
        map: {
          useGeolocation: true,
          initialTypes: ["parcel_locker"],
        },
      });
      window.easyPack.mapWidget("easypack-map", (point: Point) => {
        setPointName(`Wybrany paczkomat: ${point.name}`);
        if (setLockerId) {
          setLockerId(point.name);
        }
      });
    };
  };

  window.setTimeout(getLocation, 1500);

  return (
    <section>
      <S.Title data-test="checkoutPageSubtitle">
        <FormattedMessage {...checkoutMessages.shippingMethod} />
      </S.Title>
      <Formik
        initialValues={{
          shippingMethod: selectedShippingMethodId,
        }}
        enableReinitialize
        onSubmit={(values, { setSubmitting }) => {
          if (selectShippingMethod && values.shippingMethod) {
            selectShippingMethod(values.shippingMethod);
          }
          setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <>
              <S.ShippingMethodForm
                id={formId}
                ref={formRef}
                onSubmit={handleSubmit}
              >
                {shippingMethods.map(({ id, name, price }, index) => {
                  const checked =
                    !!values.shippingMethod && values.shippingMethod === id;

                  const isParcel = () => {
                    if (name === "Inpost paczkomaty") {
                      setShowMap(!isShowMap);
                    } else setShowMap(false);
                  };

                  return (
                    <>
                      <S.Tile
                        checked={checked}
                        key={id}
                        data-test="shippingMethodTile"
                        data-test-id={id}
                      >
                        <Radio
                          name="shippingMethod"
                          value={id}
                          checked={checked}
                          customLabel
                          onChange={() => {
                            setFieldValue("shippingMethod", id);
                            isParcel();
                          }}
                        >
                          <S.TileTitle>
                            <span data-test="checkoutShippingMethodOptionName">
                              {name}
                            </span>
                            <S.Price>
                              {" "}
                              | +
                              <Money
                                data-test="checkoutShippingMethodOptionPrice"
                                money={price}
                              />
                            </S.Price>
                          </S.TileTitle>
                        </Radio>
                      </S.Tile>
                    </>
                  );
                })}
                <div style={isShowMap ? styleShown : styleHidden}>
                  <div id="easypack-map" />
                  <div className="point-name">
                    <S.PointNameText>{pointName}</S.PointNameText>
                  </div>
                </div>
                <ErrorMessage errors={errors} />
              </S.ShippingMethodForm>
            </>
          );
        }}
      </Formik>
    </section>
  );
};

export { CheckoutShipping };
