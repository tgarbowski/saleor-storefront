import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { RemoveFromWishlistButton } from ".";
import { IRemoveFromWishlistButton } from "./RemoveFromWishlistButton";

const DEFAULT_PROPS: IRemoveFromWishlistButton = {
  onSubmit: () => undefined,
};

storiesOf("@components/molecules/AddToWishlistButton", module)
  .addParameters({ component: RemoveFromWishlistButton })
  .addDecorator(story => <IntlProvider locale="en">story()</IntlProvider>)
  .add("default", () => <RemoveFromWishlistButton {...DEFAULT_PROPS} />)
  .add("disabled", () => <RemoveFromWishlistButton {...DEFAULT_PROPS} />);
