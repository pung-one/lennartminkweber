"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'Trinite Wide';
      src: url('/fonts/TriniteNo1-RomanWideTab.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Trinite';
      src: url('/fonts/TriniteNo1-RomanCondensed.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
        font-family: 'Trinite';
        src: url('/fonts/TriniteNo1-MediumCondensed.woff') format('woff');
        font-weight: medium;
        font-style: normal;
        font-display: swap;
      }

  @font-face {
      font-family: 'Trinite';
      src: url('/fonts/TriniteNo1-Italic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }

  @font-face {
      font-family: 'IBM Courier';
      src: url('/fonts/IBM-Courier.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

*,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: 'Trinite', Helvetica, sans-serif;
    scroll-behavior: smooth;
    font-size: 16px;
  }

  a {
    color: black;
  }
`;
