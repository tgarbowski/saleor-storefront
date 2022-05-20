import { defineMessages, IntlShape } from "react-intl";

export const commonMessages = defineMessages({
  cod: {
    defaultMessage: "Płatność przy odbiorze",
  },
  search: {
    defaultMessage: "szukaj",
  },
  outOfStock: {
    defaultMessage: "Wyprzedane",
  },
  lowStock: {
    defaultMessage: "Mała ilość",
  },
  noItemsAvailable: {
    defaultMessage: "Brak produktów",
  },
  noPurchaseAvailable: {
    defaultMessage: "Niedostępne do zakupu",
  },
  purchaseAvailableOn: {
    defaultMessage: `Będzie dostępne do kupna {date} o {time}`,
  },
  youMightLike: {
    defaultMessage: "Możesz też lubić",
  },
  choosePaymentMethod: {
    defaultMessage: "Wybierz metode płatności.",
  },
  provideEmailAddress: {
    defaultMessage: "Proszę podać adres email.",
  },
  account: {
    defaultMessage: "Konto",
  },
  myAccount: {
    defaultMessage: "Moje konto",
  },
  orderHistory: {
    defaultMessage: "Historia zamówień",
  },
  addressBook: {
    defaultMessage: "Książka adresowa",
  },
  logOut: {
    defaultMessage: "Wyloguj",
  },
  firstName: {
    defaultMessage: "Imię",
  },
  lastName: {
    defaultMessage: "Nazwisko",
  },
  password: {
    defaultMessage: "Hasło",
  },
  quantity: {
    defaultMessage: "Ilość",
  },
  sku: {
    defaultMessage: "SKU",
  },
  maxQtyIs: {
    defaultMessage: "Maksymalna ilość to {maxQuantity}",
  },
  qty: {
    defaultMessage: "Ilość",
  },
  subtotal: {
    defaultMessage: "Suma częściowa",
  },
  shipping: {
    defaultMessage: "Dostawa",
  },
  promoCode: {
    defaultMessage: "Kod promocyjny",
  },
  total: {
    defaultMessage: "Suma",
  },
  totalPrice: {
    defaultMessage: "Kwota całkowita",
  },
  checkout: {
    defaultMessage: "Kasa",
  },
  eMail: {
    defaultMessage: "Adres Email",
  },
  shortEmail: {
    defaultMessage: "Email",
  },
  loading: {
    defaultMessage: "Ładowanie",
  },
  products: {
    defaultMessage: "Produkty",
  },
  price: {
    defaultMessage: "Cena",
  },
  variant: {
    defaultMessage: "Rodzaj",
  },
  phone: {
    defaultMessage: "Telefon",
  },
  phoneNumber: {
    defaultMessage: "Numer telefonu: {phone}",
  },
  showEmail: {
    defaultMessage: "Email: {email}",
  },
  save: {
    defaultMessage: "Zapisz",
  },
  add: {
    defaultMessage: "Dodaj",
  },
  filterHeader: {
    defaultMessage: "FILTRY",
  },
  clearFilterHeader: {
    defaultMessage: "WYCZYŚĆ FILTRY",
  },
  status: {
    defaultMessage: "Status",
  },
  cancel: {
    defaultMessage: "Anuluj",
  },
  home: {
    defaultMessage: "Strona główna",
  },
});

export const checkoutMessages = defineMessages({
  stepNameAddress: {
    defaultMessage: "Adres",
  },
  stepNameShipping: {
    defaultMessage: "Dostawa",
  },
  stepNamePayment: {
    defaultMessage: "Płatność",
  },
  stepNameReview: {
    defaultMessage: "Podsumowanie",
  },
  addressNextActionName: {
    defaultMessage: "Kontynuuj do dostawy",
  },
  shippingNextActionName: {
    defaultMessage: "Kontynuuj do płatności",
  },
  paymentNextActionName: {
    defaultMessage: "Kontynuuj do podsumowania",
  },
  reviewNextActionName: {
    defaultMessage: "Złóż zamówienie",
  },
  addNewAddress: {
    defaultMessage: "Dodaj nowy adres",
  },
  shippingMethod: {
    defaultMessage: "SPOSÓB DOSTAWY",
  },
  billingAddress: {
    defaultMessage: "ADRES ROZLICZENIOWY",
  },
  paymentMethod: {
    defaultMessage: "METODA PŁATNOŚCI",
  },
  reviewOrder: {
    defaultMessage: "SPRAWDŹ ZAMÓWIENIE",
  },
  shippingAddress: {
    defaultMessage: "Adres dostawy",
  },
  continueShopping: {
    defaultMessage: "KONTYNUUJ ZAKUPY",
  },
});

export const prodListHeaderCommonMsg = defineMessages({
  sortOptionsClear: {
    defaultMessage: "Wyczyść...",
  },
  sortOptionsPrice: {
    defaultMessage: "Cena min-max",
  },
  sortOptionsPriceDsc: {
    defaultMessage: "Cena max-min",
  },
  sortOptionsName: {
    defaultMessage: "Nazwa rosnąco",
  },
  sortOptionsNameDsc: {
    defaultMessage: "Nazwa malejąco",
  },
  sortOptionsUpdatedAt: {
    defaultMessage: "Ostatnio aktualizowane rosnąco",
  },
  sortOptionsUpdatedAtDsc: {
    defaultMessage: "Ostatnio aktualizowane malejąco",
  },
});

export const paymentStatusMessages = defineMessages({
  notCharged: {
    defaultMessage: "Nie zapłacono",
  },
  partiallyCharged: {
    defaultMessage: "Częściowo zapłacone",
  },
  fullyCharged: {
    defaultMessage: "Zapłacone",
  },
  partiallyRefunded: {
    defaultMessage: "Częściowo zwrócone",
  },
  fullyRefunded: {
    defaultMessage: "Zwrócone",
  },
});

export const paymentErrorMessages = defineMessages({
  paymentNoConfirmationData: {
    defaultMessage:
      "Płatność potrzebuje potwierdzenia, ale dane potrzebne nie zostały zwrócone przez serwer",
    description: "payment gateway error",
  },
  paymentMalformedConfirmationData: {
    defaultMessage:
      "Płatność potrzebuje potwierdzenia, ale dane zwrócone z serwera są błędne.",
    description: "payment gateway error",
  },
  cannotHandlePaymentConfirmation: {
    defaultMessage: "Bramka płatnicza nie potwierdziła płatności.",
    description: "payment gateway error",
  },
});

export const orderStatusMessages = defineMessages({
  draft: {
    defaultMessage: "Szkic",
  },
  unfulfilled: {
    defaultMessage: "Nieskompletowane",
  },
  partiallyFulfilled: {
    defaultMessage: "Częściowo skompletowane",
  },
  fulfilled: {
    defaultMessage: "Skompletowane",
  },
  canceled: {
    defaultMessage: "Anulowane",
  },
});

export function translatePaymentStatus(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Not charged":
      return intl.formatMessage(paymentStatusMessages.notCharged);
    case "Partially charged":
      return intl.formatMessage(paymentStatusMessages.partiallyCharged);
    case "Fully charged":
      return intl.formatMessage(paymentStatusMessages.fullyCharged);
    case "Partially refunded":
      return intl.formatMessage(paymentStatusMessages.partiallyRefunded);
    case "Fully refunded":
      return intl.formatMessage(paymentStatusMessages.fullyRefunded);
    default:
      return status;
  }
}

export function translateOrderStatus(status: string, intl: IntlShape): string {
  switch (status) {
    case "Draft":
      return intl.formatMessage(orderStatusMessages.draft);
    case "Unfulfilled":
      return intl.formatMessage(orderStatusMessages.unfulfilled);
    case "Partially fulfilled":
      return intl.formatMessage(orderStatusMessages.partiallyFulfilled);
    case "Fulfilled":
      return intl.formatMessage(orderStatusMessages.fulfilled);
    case "Canceled":
      return intl.formatMessage(orderStatusMessages.canceled);
    default:
      return status;
  }
}
