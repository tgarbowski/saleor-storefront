import { shopName } from "@temp/constants";

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
  clothesForYouRed: "#d3000e",
  clothesForYouLightRed: "#ff434f",
  clothesForYouDarkRed: "#980009",
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
  activeMenuOption: c4uStyle.darkGreen,
  autofill: c4uStyle.autofillColor,
  autofillSelected: c4uStyle.autofillColorSelected,
  bannerBackground: c4uStyle.secondaryGrey,
  bannerEdge: c4uStyle.clothesForYouRed,
  bannerLink: c4uStyle.clothesForYouRed,
  baseFont: c4uStyle.clothesForYouBlack,
  baseFontColorSemiTransparent: c4uStyle.baseFontColorSemiTransparent,
  baseFontColorTransparent: c4uStyle.baseFontColorTransparent,
  dark: c4uStyle.black,
  disabled: c4uStyle.gray,
  divider: c4uStyle.grayLight,
  dividerDark: c4uStyle.grayMedium,
  error: c4uStyle.rose,
  hoverLightBackground: c4uStyle.clothesForYouLightRed,
  light: c4uStyle.grayLight,
  lightFont: c4uStyle.gray,
  listAttributeName: c4uStyle.baseFontColorSemiTransparent,
  listBullet: c4uStyle.darkGreen,
  overlay: c4uStyle.overlayColor,
  primary: c4uStyle.clothesForYouRed,
  primaryDark: c4uStyle.clothesForYouDarkRed,
  primaryLight: c4uStyle.clothesForYouLightRed,
  primaryTransparent: c4uStyle.clothesForYouLightRed,
  secondary: c4uStyle.clothesForYouBlack,
  secondaryDark: c4uStyle.clothesForYouBlack,
  secondaryLight: c4uStyle.clothesForYouBlack,
  secondaryOverlay: c4uStyle.clothesForYouBlack,
  secondaryOverlayDark: c4uStyle.clothesForYouBlack,
  success: c4uStyle.green,
  tabTitle: c4uStyle.darkGreen,
  tableDivider: c4uStyle.tabelGray,
  tabsBorder: c4uStyle.baseFontColorTransparent,
  thumbnailBorder: c4uStyle.darkGreen,
  white: c4uStyle.white,
};

const other = {
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
  clothesForYouRed: "#d3000e",
  clothesForYouLightRed: "#ff434f",
  clothesForYouDarkRed: "#980009",
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

// theme colors

c4uStyle.theme = c4uTheme;
other.theme = c4uTheme;

export const customStyle = shopName !== "C4U" ? c4uStyle : other;

// colors
// export const autofillColor = "rgb(250, 255, 189)";
// export const autofillColorSelected = "rgb(232, 240, 254)";
// export const baseFontColor = "#323232";
// export const baseFontColorSemiTransparent = "rgba(50,50,50,0.6)";
// export const baseFontColorTransparent = "rgba(50,50,50,0.1)";
// export const black = "#323232";
// export const blue = "rgb(33,18,94)";
// export const blueDark = "#190c4e";
// export const blueLight = "#513CA3";
// export const blueOverlay = `rgba(33,18,94,0.1)`;
// export const blueOverlayDark = `rgba(33,18,94,0.2)`;
// export const gray = "#7d7d7d";
// export const grayMedium = "#c4c4c4";
// export const grayDark = "#323232";
// export const grayLight = "#f1f5f5";
// export const green = "#3ed256";
// export const overlayColor = "rgba(199, 207, 207, 0.8)";
// export const rose = "#c22d74";
// export const turquoise = "#13bebb";
// export const turquoiseDark = "#06a09e";
// export const turquoiseLight = "rgba(6, 132, 123, 0.25)";
// export const turquoiseTransparent = "rgba(6, 132, 123, 0.1)";
// export const white = "#fff";
// export const tabelGray = "#eaeaea";
// export const darkGreen = "#06847B";
// export const secondaryGrey = "#EBF1F6";
// export const secondaryGreyDark = "#9D9FB1";
// export const secondaryBlue = "#036DFF";
// export const clothesForYouRed = "#d3000e";
// export const clothesForYouLightRed = "#ff434f";
// export const clothesForYouDarkRed = "#980009";
// export const clothesForYouBlack = "#262626";

// // theme colors
// export const theme = {
//   activeMenuOption: darkGreen,
//   autofill: autofillColor,
//   autofillSelected: autofillColorSelected,
//   bannerBackground: secondaryGrey,
//   bannerEdge: clothesForYouRed,
//   bannerLink: clothesForYouRed,
//   baseFont: clothesForYouBlack,
//   baseFontColorSemiTransparent,
//   baseFontColorTransparent,
//   dark: black,
//   disabled: gray,
//   divider: grayLight,
//   dividerDark: grayMedium,
//   error: rose,
//   hoverLightBackground: clothesForYouLightRed,
//   light: grayLight,
//   lightFont: gray,
//   listAttributeName: baseFontColorSemiTransparent,
//   listBullet: darkGreen,
//   overlay: overlayColor,
//   primary: clothesForYouRed,
//   primaryDark: clothesForYouDarkRed,
//   primaryLight: clothesForYouLightRed,
//   primaryTransparent: clothesForYouLightRed,
//   secondary: clothesForYouBlack,
//   secondaryDark: clothesForYouBlack,
//   secondaryLight: clothesForYouBlack,
//   secondaryOverlay: clothesForYouBlack,
//   secondaryOverlayDark: clothesForYouBlack,
//   success: green,
//   tabTitle: darkGreen,
//   tableDivider: tabelGray,
//   tabsBorder: baseFontColorTransparent,
//   thumbnailBorder: darkGreen,
//   white,
// };

// // typography
// export const baseFontFamily = "'Inter', sans-serif";
// export const baseFontSize = "1rem"; // 16px
// export const baseLineHeight = "1.25rem"; // 20px
// export const boldFontWeight = 600;
// export const extraBoldFontWeight = 800;
// export const h1FontSize = "4rem"; // 64px
// export const h2FontSize = "3rem"; // 48px
// export const h1LineHeight = 1;
// export const h3FontSize = "1.5rem"; // 24px
// export const h4FontSize = "1.125rem"; // 18px
// export const labelFontSize = "0.75rem"; // 12px
// export const smallFontSize = "0.875rem"; // 14px
// export const ultraBigFont = "6rem"; // 96px

// // spacing
// export const spacer = 1; // rem
// export const fieldSpacer = "1.875rem";

// // breakpoints
// export const xxxLargeScreen = 1920;
// export const xxLargeScreen = 1600;
// export const xLargeScreen = 1280;
// export const largeScreen = 992;
// export const mediumScreen = 720;
// export const smallScreen = 540;
