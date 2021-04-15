import { defineMessages, IntlShape } from "react-intl";

export const commonMessages = defineMessages({
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
    defaultMessage: "Brak towaru",
  },
  noPurchaseAvailable: {
    defaultMessage: "Niedostępne do kupna",
  },
  purchaseAvailableOn: {
    defaultMessage: `Dostępne w dniu {date} o {time}`,
  },
  youMightLike: {
    defaultMessage: "Możesz także lubić",
  },
  choosePaymentMethod: {
    defaultMessage: "Proszę wybrać metodę płatności.",
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
    defaultMessage: "Książka adresów",
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
    defaultMessage: "W sumie",
  },
  totalPrice: {
    defaultMessage: "Cena całkowita",
  },
  checkout: {
    defaultMessage: "Kasa",
  },
  eMail: {
    defaultMessage: "Email",
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
    defaultMessage: "Variant",
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
    defaultMessage: "Główna",
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
    defaultMessage: "METODA DOSTAWY",
  },
  billingAddress: {
    defaultMessage: "ADRES ROZLICZENIOWY",
  },
  paymentMethod: {
    defaultMessage: "METODA PŁATNOŚCI",
  },
  reviewOrder: {
    defaultMessage: "PRZEGLĄD ZAMÓWIENIA",
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
    defaultMessage: "Cena rosnąco",
  },
  sortOptionsPriceDsc: {
    defaultMessage: "Cena malejąco",
  },
  sortOptionsName: {
    defaultMessage: "Nazwa rosnąco",
  },
  sortOptionsNameDsc: {
    defaultMessage: "Nazwa malejąco",
  },
  sortOptionsUpdatedAt: {
    defaultMessage: "Data dodania (od najnowszego)",
  },
  sortOptionsUpdatedAtDsc: {
    defaultMessage: "Data dodania (od najstarszego)",
  },
});

export const paymentStatusMessages = defineMessages({
  notCharged: {
    defaultMessage: "Nie pobrane",
  },
  partiallyCharged: {
    defaultMessage: "Częściowo pobrana",
  },
  fullyCharged: {
    defaultMessage: "Pobrana",
  },
  partiallyRefunded: {
    defaultMessage: "Częściowo zwrócone",
  },
  fullyRefunded: {
    defaultMessage: "Całkowicie zwrócone",
  },
});

export const orderStatusMessages = defineMessages({
  draft: {
    defaultMessage: "Draft",
  },
  unfulfilled: {
    defaultMessage: "Unfulfilled",
  },
  partiallyFulfilled: {
    defaultMessage: "Partially fulfilled",
  },
  fulfilled: {
    defaultMessage: "Fulfilled",
  },
  canceled: {
    defaultMessage: "Canceled",
  },
});

export function translatePaymentStatus(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Nie pobrane":
      return intl.formatMessage(paymentStatusMessages.notCharged);
    case "Częściowo pobrana":
      return intl.formatMessage(paymentStatusMessages.partiallyCharged);
    case "Pobrana":
      return intl.formatMessage(paymentStatusMessages.fullyCharged);
    case "Częściowo zwrócone":
      return intl.formatMessage(paymentStatusMessages.partiallyRefunded);
    case "Całkowicie zwrócone":
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
