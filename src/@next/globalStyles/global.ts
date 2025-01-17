import { createGlobalStyle } from "styled-components";

import { DefaultTheme, media } from ".";

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  html {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    min-width: 320px;
    font-family: ${props => props.theme.typography.baseFontFamily};
    font-size: ${props => props.theme.typography.baseFontSize};
    line-height: ${props => props.theme.typography.baseLineHeight};
    color: ${props => props.theme.colors.baseFont};
    margin-top: 65px;

    @if $env == "CLOTHES4U" {
      margin-top: 0 !important;
    }

    @media only screen and (max-width: 479px) {
      margin-top: 50px;
    }
  }

  input, textarea, button {
    font-family: inherit;
  }

  h1 {
    font-size: ${props => props.theme.typography.h1FontSize};
    line-height: ${props => props.theme.typography.h1LineHeight};

    ${props => media.smallScreen`
      font-size: ${props.theme.typography.h2FontSize};
    `}
  }

  h3 {
    font-size: ${props => props.theme.typography.h3FontSize};
    line-height: 1.7rem;
  }

  h4 {
    font-size: ${props => props.theme.typography.h4FontSize};
  }

  a {
    text-decoration: none;
    font-weight: normal;
    color: inherit;
  }

  p {
    line-height: 1.5rem;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  #root,
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    & > div:first-of-type {
      flex: 1;
    }
  }
`;
