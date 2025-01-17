import { shopName } from "@temp/constants";

const salingDefaultStyle = {
  autofillColor: "rgb(250, 255, 189)",
  autofillColorSelected: "rgb(232, 240, 254)",
  baseFontColor: "#323232",
  baseFontColorSemiTransparent: "rgba(50,50,50,0.6)",
  baseFontColorTransparent: "rgba(50,50,50,0.1)",
  black: "#323232",
  blue: "rgb(33,18,94)",
  blueDark: "#190c4e",
  blueLight: "#513CA3",
  blueOverlay: `rgba(33,18,94,0.1)`,
  blueOverlayDark: `rgba(33,18,94,0.2)`,
  gray: "#7d7d7d",
  grayMedium: "#c4c4c4",
  grayDark: "#323232",
  grayLight: "#f1f5f5",
  green: "#3ed256",
  red: "#FF0000",
  overlayColor: "rgba(199, 207, 207, 0.8)",
  rose: "#c22d74",
  turquoise: "#13bebb",
  turquoiseDark: "#06a09e",
  turquoiseLight: "rgba(6, 132, 123, 0.25)",
  turquoiseTransparent: "rgba(6, 132, 123, 0.1)",
  white: "#fff",
  tabelGray: "#eaeaea",
  darkGreen: "#06847B",
  secondaryGrey: "#EBF1F6",
  secondaryGreyDark: "#9D9FB1",
  secondaryBlue: "#036DFF",
  salingoYellow: "#FFCC55",
  salingoLightYellow: "#FFE583",
  salingoDarkYellow: "#836800",
  salingoGrey: "#646464",

  // theme colors
  theme: {
    activeMenuOption: "",
    autofill: "",
    autofillSelected: "",
    bannerBackground: "",
    bannerEdge: "",
    bannerLink: "",
    baseFont: "",
    baseFontColorSemiTransparent: "",
    baseFontColorTransparent: "",
    dark: "",
    disabled: "",
    divider: "",
    dividerDark: "",
    error: "",
    hoverLightBackground: "",
    light: "",
    lightFont: "",
    listAttributeName: "",
    listBullet: "",
    overlay: "",
    primary: "",
    primaryDark: "",
    primaryLight: "",
    primaryTransparent: "",
    secondary: "",
    secondaryDark: "",
    secondaryLight: "",
    secondaryOverlay: "",
    secondaryOverlayDark: "",
    success: "",
    tabTitle: "",
    tableDivider: "",
    tabsBorder: "",
    thumbnailBorder: "",
    white: "",
  },

  // typography
  baseFontFamily: "'Inter', sans-serif",
  baseFontSize: "1rem", // 16px
  baseLineHeight: "1.25rem", // 20px
  boldFontWeight: 600,
  extraBoldFontWeight: 800,
  h1FontSize: "4rem", // 64px
  h2FontSize: "3rem", // 48px
  h1LineHeight: 1,
  h3FontSize: "1.5rem", // 24px
  h4FontSize: "1.125rem", // 18px
  labelFontSize: "0.75rem", // 12px
  smallFontSize: "0.875rem", // 14px
  ultraBigFont: "6rem", // 96px

  // spacing
  spacer: 1, // rem
  fieldSpacer: "1.875rem",

  // breakpoints
  xxxLargeScreen: 1920,
  xxLargeScreen: 1600,
  xLargeScreen: 1280,
  largeScreen: 992,
  mediumScreen: 720,
  smallScreen: 540,
};

const salingDefaultTheme = {
  activeMenuOption: salingDefaultStyle.darkGreen,
  autofill: salingDefaultStyle.autofillColor,
  autofillSelected: salingDefaultStyle.autofillColorSelected,
  bannerBackground: salingDefaultStyle.secondaryGrey,
  bannerEdge: salingDefaultStyle.salingoYellow,
  bannerLink: salingDefaultStyle.salingoYellow,
  baseFont: salingDefaultStyle.salingoGrey,
  baseFontColorSemiTransparent: salingDefaultStyle.baseFontColorSemiTransparent,
  baseFontColorTransparent: salingDefaultStyle.baseFontColorTransparent,
  dark: salingDefaultStyle.black,
  disabled: salingDefaultStyle.gray,
  divider: salingDefaultStyle.grayLight,
  dividerDark: salingDefaultStyle.grayMedium,
  error: salingDefaultStyle.rose,
  hoverLightBackground: salingDefaultStyle.salingoLightYellow,
  light: salingDefaultStyle.grayLight,
  lightFont: salingDefaultStyle.gray,
  listAttributeName: salingDefaultStyle.baseFontColorSemiTransparent,
  listBullet: salingDefaultStyle.darkGreen,
  overlay: salingDefaultStyle.overlayColor,
  primary: salingDefaultStyle.salingoYellow,
  primaryDark: salingDefaultStyle.salingoDarkYellow,
  primaryLight: salingDefaultStyle.salingoLightYellow,
  primaryTransparent: salingDefaultStyle.salingoLightYellow,
  secondary: salingDefaultStyle.salingoGrey,
  secondaryDark: salingDefaultStyle.salingoGrey,
  secondaryLight: salingDefaultStyle.salingoGrey,
  secondaryOverlay: salingDefaultStyle.salingoGrey,
  secondaryOverlayDark: salingDefaultStyle.salingoGrey,
  success: salingDefaultStyle.green,
  tabTitle: salingDefaultStyle.darkGreen,
  tableDivider: salingDefaultStyle.tabelGray,
  tabsBorder: salingDefaultStyle.baseFontColorTransparent,
  thumbnailBorder: salingDefaultStyle.darkGreen,
  white: salingDefaultStyle.white,
};

const c4uStyle = {
  // colors
  autofillColor: "rgb(250, 255, 189)",
  autofillColorSelected: "rgb(232, 240, 254)",
  baseFontColor: "#323232",
  baseFontColorSemiTransparent: "rgba(50,50,50,0.6)",
  baseFontColorTransparent: "rgba(50,50,50,0.1)",
  black: "#323232",
  blue: "rgb(33,18,94)",
  blueDark: "#190c4e",
  blueLight: "#513CA3",
  blueOverlay: `rgba(33,18,94,0.1)`,
  blueOverlayDark: `rgba(33,18,94,0.2)`,
  gray: "#7d7d7d",
  red: "#FF0000",
  grayMedium: "#c4c4c4",
  grayDark: "#323232",
  grayLight: "#f1f5f5",
  green: "#3ed256",
  overlayColor: "rgba(199, 207, 207, 0.8)",
  rose: "#c22d74",
  turquoise: "#13bebb",
  turquoiseDark: "#06a09e",
  turquoiseLight: "rgba(6, 132, 123, 0.25)",
  turquoiseTransparent: "rgba(6, 132, 123, 0.1)",
  white: "#fff",
  tabelGray: "#eaeaea",
  darkGreen: "#06847B",
  secondaryGrey: "#EBF1F6",
  secondaryGreyDark: "#9D9FB1",
  secondaryBlue: "#036DFF",
  clothesForYouDarkGreen: "#526441",
  clothesForYouLightGreen: "#d3e2c3",
  clothesForYouBlack: "#262626",

  // typography
  baseFontFamily: "'Inter', sans-serif",
  baseFontSize: "1rem", // 16px
  baseLineHeight: "1.25rem", // 20px
  boldFontWeight: 600,
  extraBoldFontWeight: 800,
  h1FontSize: "4rem", // 64px
  h2FontSize: "3rem", // 48px
  h1LineHeight: 1,
  h3FontSize: "1.5rem", // 24px
  h4FontSize: "1.125rem", // 18px
  labelFontSize: "0.75rem", // 12px
  smallFontSize: "0.875rem", // 14px
  ultraBigFont: "6rem", // 96px

  // spacing
  spacer: 1, // rem
  fieldSpacer: "1.875rem",

  // breakpoints
  xxxLargeScreen: 1920,
  xxLargeScreen: 1600,
  xLargeScreen: 1280,
  largeScreen: 992,
  mediumScreen: 720,
  smallScreen: 540,
  theme: {
    activeMenuOption: "",
    autofill: "",
    autofillSelected: "",
    bannerBackground: "",
    bannerEdge: "",
    bannerLink: "",
    baseFont: "",
    baseFontColorSemiTransparent: "",
    baseFontColorTransparent: "",
    dark: "",
    disabled: "",
    divider: "",
    dividerDark: "",
    error: "",
    hoverLightBackground: "",
    light: "",
    lightFont: "",
    listAttributeName: "",
    listBullet: "",
    overlay: "",
    primary: "",
    primaryDark: "",
    primaryLight: "",
    primaryTransparent: "",
    secondary: "",
    secondaryDark: "",
    secondaryLight: "",
    secondaryOverlay: "",
    secondaryOverlayDark: "",
    success: "",
    tabTitle: "",
    tableDivider: "",
    tabsBorder: "",
    thumbnailBorder: "",
    white: "",
  },
};

const c4uTheme = {
  activeMenuOption: c4uStyle.clothesForYouDarkGreen,
  autofill: c4uStyle.autofillColor,
  autofillSelected: c4uStyle.autofillColorSelected,
  bannerBackground: c4uStyle.secondaryGrey,
  bannerEdge: c4uStyle.clothesForYouDarkGreen,
  bannerLink: c4uStyle.clothesForYouDarkGreen,
  baseFont: c4uStyle.clothesForYouBlack,
  baseFontColorSemiTransparent: c4uStyle.baseFontColorSemiTransparent,
  baseFontColorTransparent: c4uStyle.baseFontColorTransparent,
  dark: c4uStyle.black,
  disabled: c4uStyle.gray,
  divider: c4uStyle.grayLight,
  dividerDark: c4uStyle.grayMedium,
  error: c4uStyle.rose,
  hoverLightBackground: c4uStyle.clothesForYouLightGreen,
  light: c4uStyle.grayLight,
  lightFont: c4uStyle.gray,
  listAttributeName: c4uStyle.baseFontColorSemiTransparent,
  listBullet: c4uStyle.clothesForYouDarkGreen,
  overlay: c4uStyle.overlayColor,
  primary: c4uStyle.clothesForYouDarkGreen,
  primaryDark: c4uStyle.clothesForYouLightGreen,
  primaryLight: c4uStyle.clothesForYouLightGreen,
  primaryTransparent: c4uStyle.clothesForYouLightGreen,
  secondary: c4uStyle.clothesForYouBlack,
  secondaryDark: c4uStyle.clothesForYouBlack,
  secondaryLight: c4uStyle.clothesForYouBlack,
  secondaryOverlay: c4uStyle.clothesForYouBlack,
  secondaryOverlayDark: c4uStyle.clothesForYouBlack,
  success: c4uStyle.green,
  tabTitle: c4uStyle.clothesForYouDarkGreen,
  tableDivider: c4uStyle.tabelGray,
  tabsBorder: c4uStyle.baseFontColorTransparent,
  thumbnailBorder: c4uStyle.clothesForYouDarkGreen,
  white: c4uStyle.white,
};

const f4uStyle = {
  // colors
  autofillColor: "rgb(250, 255, 189)",
  autofillColorSelected: "rgb(232, 240, 254)",
  baseFontColor: "#323232",
  baseFontColorSemiTransparent: "rgba(50,50,50,0.6)",
  baseFontColorTransparent: "rgba(50,50,50,0.1)",
  black: "#323232",
  blue: "rgb(33,18,94)",
  blueDark: "#190c4e",
  blueLight: "#513CA3",
  blueOverlay: `rgba(33,18,94,0.1)`,
  blueOverlayDark: `rgba(33,18,94,0.2)`,
  gray: "#7d7d7d",
  red: "#FF0000",
  grayMedium: "#c4c4c4",
  grayDark: "#323232",
  grayLight: "#f1f5f5",
  green: "#3ed256",
  overlayColor: "rgba(199, 207, 207, 0.8)",
  rose: "#c22d74",
  turquoise: "#13bebb",
  turquoiseDark: "#06a09e",
  turquoiseLight: "rgba(6, 132, 123, 0.25)",
  turquoiseTransparent: "rgba(6, 132, 123, 0.1)",
  white: "#fff",
  tabelGray: "#eaeaea",
  darkGreen: "#06847B",
  secondaryGrey: "#EBF1F6",
  secondaryGreyDark: "#9D9FB1",
  secondaryBlue: "#036DFF",
  fashionForYouGreen: "#65C947",
  fashionForYouLightGreen: "#d4ffc8",
  fashionForYouDarkGreen: "#3E8828",
  fashionForYouBlack: "#262626",

  // typography
  baseFontFamily: "'Inter', sans-serif",
  baseFontSize: "1rem", // 16px
  baseLineHeight: "1.25rem", // 20px
  boldFontWeight: 600,
  extraBoldFontWeight: 800,
  h1FontSize: "4rem", // 64px
  h2FontSize: "3rem", // 48px
  h1LineHeight: 1,
  h3FontSize: "1.5rem", // 24px
  h4FontSize: "1.125rem", // 18px
  labelFontSize: "0.75rem", // 12px
  smallFontSize: "0.875rem", // 14px
  ultraBigFont: "6rem", // 96px

  // spacing
  spacer: 1, // rem
  fieldSpacer: "1.875rem",

  // breakpoints
  xxxLargeScreen: 1920,
  xxLargeScreen: 1600,
  xLargeScreen: 1280,
  largeScreen: 992,
  mediumScreen: 720,
  smallScreen: 540,
  theme: {
    activeMenuOption: "",
    autofill: "",
    autofillSelected: "",
    bannerBackground: "",
    bannerEdge: "",
    bannerLink: "",
    baseFont: "",
    baseFontColorSemiTransparent: "",
    baseFontColorTransparent: "",
    dark: "",
    disabled: "",
    divider: "",
    dividerDark: "",
    error: "",
    hoverLightBackground: "",
    light: "",
    lightFont: "",
    listAttributeName: "",
    listBullet: "",
    overlay: "",
    primary: "",
    primaryDark: "",
    primaryLight: "",
    primaryTransparent: "",
    secondary: "",
    secondaryDark: "",
    secondaryLight: "",
    secondaryOverlay: "",
    secondaryOverlayDark: "",
    success: "",
    tabTitle: "",
    tableDivider: "",
    tabsBorder: "",
    thumbnailBorder: "",
    white: "",
  },
};

const f4uTheme = {
  activeMenuOption: f4uStyle.green,
  autofill: f4uStyle.autofillColor,
  autofillSelected: f4uStyle.autofillColorSelected,
  bannerBackground: f4uStyle.secondaryGrey,
  bannerEdge: f4uStyle.fashionForYouGreen,
  bannerLink: f4uStyle.fashionForYouGreen,
  baseFont: f4uStyle.fashionForYouBlack,
  baseFontColorSemiTransparent: f4uStyle.baseFontColorSemiTransparent,
  baseFontColorTransparent: f4uStyle.baseFontColorTransparent,
  dark: f4uStyle.black,
  disabled: f4uStyle.gray,
  divider: f4uStyle.grayLight,
  dividerDark: f4uStyle.grayMedium,
  error: f4uStyle.rose,
  hoverLightBackground: f4uStyle.fashionForYouLightGreen,
  light: f4uStyle.grayLight,
  lightFont: f4uStyle.gray,
  listAttributeName: f4uStyle.baseFontColorSemiTransparent,
  listBullet: f4uStyle.green,
  overlay: f4uStyle.overlayColor,
  primary: f4uStyle.fashionForYouGreen,
  primaryDark: f4uStyle.fashionForYouDarkGreen,
  primaryLight: f4uStyle.fashionForYouLightGreen,
  primaryTransparent: f4uStyle.fashionForYouLightGreen,
  secondary: f4uStyle.fashionForYouBlack,
  secondaryDark: f4uStyle.fashionForYouBlack,
  secondaryLight: f4uStyle.fashionForYouBlack,
  secondaryOverlay: f4uStyle.fashionForYouBlack,
  secondaryOverlayDark: f4uStyle.fashionForYouBlack,
  success: f4uStyle.green,
  tabTitle: f4uStyle.green,
  tableDivider: f4uStyle.tabelGray,
  tabsBorder: f4uStyle.baseFontColorTransparent,
  thumbnailBorder: f4uStyle.green,
  white: f4uStyle.white,
};

c4uStyle.theme = c4uTheme;
f4uStyle.theme = f4uTheme;
salingDefaultStyle.theme = salingDefaultTheme;

export const customStyle =
  shopName === "CLOTHES4U"
    ? c4uStyle
    : shopName === "FASHION4YOU"
    ? f4uStyle
    : salingDefaultStyle;
