import baseStyled, { ThemedStyledInterface } from "styled-components";

import * as CFU from "./clothesForyou-constants";
import * as C from "./saling-constants";

export const defaultTheme = {
  breakpoints: {
    largeScreen: "992px",
    mediumScreen: "720px",
    smallScreen: "540px",
    xLargeScreen: "1280px",
    xxLargeScreen: "1600px",
    xxxLargeScreen: "1920px",
  },
  button: {
    animation: {
      transition: "0.3s",
    },
    colors: {
      primary: {
        activeBackground: C.theme.primaryDark,
        background: C.theme.primary,
        color: C.white,
        hoverBackground: C.theme.primaryDark,
        hoverColor: C.white,
      },
      secondary: {
        activeBackground: C.theme.secondaryDark,
        background: C.white,
        color: C.theme.secondary,
        hoverBackground: C.theme.secondary,
        hoverColor: C.white,
      },
    },
    padding: {
      main: "0.9rem 3.7rem",
      small: "0.9rem 1rem",
    },
    typography: {
      fontSize: "1.125rem",
      fontWeight: "600",
      lineHeight: "1.25rem",
      smallFontSize: "1rem",
      textTransform: "uppercase",
    },
  },
  carousel: {
    carouselControlPadding: "0.2rem 0.5rem",
    carouselControlShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  },
  chip: {
    colors: {
      primary: {
        activeBackground: C.theme.primaryTransparent,
        background: C.theme.primaryLight,
        color: C.theme.primaryDark,
        hoverBackground: "none",
        hoverColor: C.theme.primaryDark,
      },
      secondary: {
        activeBackground: C.theme.primaryTransparent,
        background: C.theme.secondaryLight,
        color: C.theme.secondaryDark,
        hoverBackground: "none",
        hoverColor: C.theme.secondaryDark,
      },
    },
    typography: {
      fontSize: "1rem",
      smallFontSize: "0.75rem",
    },
  },
  colors: {
    ...C.theme,
  },
  container: {
    width: 1140,
  },
  demoBanner: {
    height: "60px",
  },
  dropdown: {
    backgroundColor: C.theme.white,
    boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.15)",
  },
  grid: {
    containerWidth: 1140,
  },
  iconButton: {
    backgroundColor: C.theme.white,
    hoverBackgroundColor: C.theme.secondary,
    hoverForegroundColor: C.theme.white,
    size: 36,
  },
  input: {
    border: C.grayDark,
    labelColor: C.grayDark,
    /**
     * 12px in default theme
     */
    labelFontSize: "0.75rem",
    selectMenuShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.15)",
  },
  link: {
    base: {
      color: C.gray,
      hoverColor: C.grayMedium,
    },
    secondary: {
      color: C.blue,
      hoverColor: C.blueLight,
    },
  },
  message: {
    backgroundColor: C.white,
    contentMargin: `${C.spacer}rem 0 0`,
    letterSpacing: "0.5px",
    padding: "1rem 1.5rem",
    titleMargin: `0 ${C.spacer * 1.5}rem 0 0`,
    titleTransform: "uppercase",
    titleWeight: C.extraBoldFontWeight,
    width: "25rem",
  },
  modal: {
    modalMinHeight: 455,
    modalWidth: 555,
  },
  productItem: {
    productItemCategoryColor: C.gray,
    productItemPriceFontWeight: C.boldFontWeight,
    productItemPriceMargin: `${C.spacer}rem 0 0`,
    productItemTitleFontWeight: C.boldFontWeight,
    productItemTitleHeight: "2.5rem",
    productItemTitleMargin: `${C.spacer / 2}rem 0 0`,
    productItemTitleTextTransform: "uppercase",
  },
  spacing: {
    /**
     * 30px in default theme
     */
    fieldSpacer: C.fieldSpacer,
    /**
     * 30px in default theme
     */
    gutter: "1.875rem",
    /**
     * 16px in default theme
     */
    spacer: `${C.spacer}rem`,
  },
  tile: {
    backgroundColor: C.grayLight,
    divisionLine: C.grayMedium,
    hoverBorder: C.blueDark,
  },
  typography: {
    baseFontFamily: C.baseFontFamily,
    /**
     * 16px in default theme
     */
    baseFontSize: C.baseFontSize,
    /**
     * 20px in default theme
     */
    baseLineHeight: C.baseLineHeight,
    boldFontWeight: C.boldFontWeight,
    extraBoldFontWeight: C.extraBoldFontWeight,
    /**
     * 64px in default theme
     */
    h1FontSize: C.h1FontSize,
    h1LineHeight: C.h1LineHeight,
    /**
     * 48px in default theme
     */
    h2FontSize: C.h2FontSize,
    /**
     * 24px in default theme
     */
    h3FontSize: C.h3FontSize,
    /**
     * 18px in default theme
     */
    h4FontSize: C.h4FontSize,
    /**
     * 14px in default theme
     */
    smallFontSize: C.smallFontSize,
    /**
     * 96px in default theme
     */
    ultraBigFontSize: C.ultraBigFont,
  },
};

export const clothesForYouTheme = {
  breakpoints: {
    largeScreen: "992px",
    mediumScreen: "720px",
    smallScreen: "540px",
    xLargeScreen: "1280px",
    xxLargeScreen: "1600px",
    xxxLargeScreen: "1920px",
  },
  button: {
    animation: {
      transition: "0.3s",
    },
    colors: {
      primary: {
        activeBackground: CFU.theme.primaryDark,
        background: CFU.theme.primary,
        color: CFU.white,
        hoverBackground: CFU.theme.primaryDark,
        hoverColor: CFU.white,
      },
      secondary: {
        activeBackground: CFU.theme.secondaryDark,
        background: CFU.white,
        color: CFU.theme.secondary,
        hoverBackground: CFU.theme.secondary,
        hoverColor: CFU.white,
      },
    },
    padding: {
      main: "0.9rem 3.7rem",
      small: "0.9rem 1rem",
    },
    typography: {
      fontSize: "1.125rem",
      fontWeight: "600",
      lineHeight: "1.25rem",
      smallFontSize: "1rem",
      textTransform: "uppercase",
    },
  },
  carousel: {
    carouselControlPadding: "0.2rem 0.5rem",
    carouselControlShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  },
  chip: {
    colors: {
      primary: {
        activeBackground: CFU.theme.primaryTransparent,
        background: CFU.theme.primaryLight,
        color: CFU.theme.primaryDark,
        hoverBackground: "none",
        hoverColor: CFU.theme.primaryDark,
      },
      secondary: {
        activeBackground: CFU.theme.primaryTransparent,
        background: CFU.theme.secondaryLight,
        color: CFU.theme.secondaryDark,
        hoverBackground: "none",
        hoverColor: CFU.theme.secondaryDark,
      },
    },
    typography: {
      fontSize: "1rem",
      smallFontSize: "0.75rem",
    },
  },
  colors: {
    ...CFU.theme,
  },
  container: {
    width: 1140,
  },
  demoBanner: {
    height: "60px",
  },
  dropdown: {
    backgroundColor: CFU.theme.white,
    boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.15)",
  },
  grid: {
    containerWidth: 1140,
  },
  iconButton: {
    backgroundColor: CFU.theme.white,
    hoverBackgroundColor: CFU.theme.secondary,
    hoverForegroundColor: CFU.theme.white,
    size: 36,
  },
  input: {
    border: CFU.grayDark,
    labelColor: CFU.grayDark,
    /**
     * 12px in default theme
     */
    labelFontSize: "0.75rem",
    selectMenuShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.15)",
  },
  link: {
    base: {
      color: CFU.gray,
      hoverColor: CFU.grayMedium,
    },
    secondary: {
      color: CFU.blue,
      hoverColor: CFU.blueLight,
    },
  },
  message: {
    backgroundColor: CFU.white,
    contentMargin: `${CFU.spacer}rem 0 0`,
    letterSpacing: "0.5px",
    padding: "1rem 1.5rem",
    titleMargin: `0 ${CFU.spacer * 1.5}rem 0 0`,
    titleTransform: "uppercase",
    titleWeight: CFU.extraBoldFontWeight,
    width: "25rem",
  },
  modal: {
    modalMinHeight: 455,
    modalWidth: 555,
  },
  productItem: {
    productItemCategoryColor: CFU.gray,
    productItemPriceFontWeight: CFU.boldFontWeight,
    productItemPriceMargin: `${CFU.spacer}rem 0 0`,
    productItemTitleFontWeight: CFU.boldFontWeight,
    productItemTitleHeight: "2.5rem",
    productItemTitleMargin: `${CFU.spacer / 2}rem 0 0`,
    productItemTitleTextTransform: "uppercase",
  },
  spacing: {
    /**
     * 30px in default theme
     */
    fieldSpacer: CFU.fieldSpacer,
    /**
     * 30px in default theme
     */
    gutter: "1.875rem",
    /**
     * 16px in default theme
     */
    spacer: `${CFU.spacer}rem`,
  },
  tile: {
    backgroundColor: CFU.grayLight,
    divisionLine: CFU.grayMedium,
    hoverBorder: CFU.blueDark,
  },
  typography: {
    baseFontFamily: CFU.baseFontFamily,
    /**
     * 16px in default theme
     */
    baseFontSize: CFU.baseFontSize,
    /**
     * 20px in default theme
     */
    baseLineHeight: CFU.baseLineHeight,
    boldFontWeight: CFU.boldFontWeight,
    extraBoldFontWeight: CFU.extraBoldFontWeight,
    /**
     * 64px in default theme
     */
    h1FontSize: CFU.h1FontSize,
    h1LineHeight: CFU.h1LineHeight,
    /**
     * 48px in default theme
     */
    h2FontSize: CFU.h2FontSize,
    /**
     * 24px in default theme
     */
    h3FontSize: CFU.h3FontSize,
    /**
     * 18px in default theme
     */
    h4FontSize: CFU.h4FontSize,
    /**
     * 14px in default theme
     */
    smallFontSize: CFU.smallFontSize,
    /**
     * 96px in default theme
     */
    ultraBigFontSize: CFU.ultraBigFont,
  },
};

export type DefaultTheme = typeof clothesForYouTheme;

export const styled = baseStyled as ThemedStyledInterface<DefaultTheme>;
