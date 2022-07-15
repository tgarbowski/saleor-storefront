import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { AddToWishlistButton } from ".";
import { IAddToWishlistButton } from "./AddToWishlistButton";

const DEFAULT_PROPS: IAddToWishlistButton = {
  onSubmit: () => undefined,
};

storiesOf("@components/molecules/AddToWishlistButton", module)
  .addParameters({ component: AddToWishlistButton })
  .addDecorator(story => <IntlProvider locale="en">story()</IntlProvider>)
  .add("default", () => <AddToWishlistButton {...DEFAULT_PROPS} />)
  .add("disabled", () => <AddToWishlistButton {...DEFAULT_PROPS} />);
