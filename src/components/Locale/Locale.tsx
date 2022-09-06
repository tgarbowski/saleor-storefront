import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import { getKeyValueJson, Locale, LocaleMessages } from "./utils";

const DEFAULT_LOCALE = Locale.EN;

interface LocaleProviderProps {
  messages: LocaleMessages;
  locale: Locale;
}

const LocaleProvider: React.FC<LocaleProviderProps> = ({
  children,
  messages,
  locale,
}) => {
  // For now locale can be set here
  // For now locale can be set here

  // let locale = Locale.EN;
  // const [initLocale, setInitLocale] = useState(locale);

  // if (locale === Locale.EN) {
  //   locale = Locale.EN;
  // } else if (locale === Locale.FR) {
  //   locale = Locale.FR;
  // }
  return (
    <IntlProvider
      defaultLocale={DEFAULT_LOCALE}
      locale={locale}
      messages={getKeyValueJson(messages)}
      key={locale}
    >
      {children}
    </IntlProvider>
  );
};

export { LocaleProvider };
