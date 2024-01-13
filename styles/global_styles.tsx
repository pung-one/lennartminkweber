"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'EBGaramond';
      src: url('/fonts/EBGaramond-Italic-VariableFont_wght.ttf') format('truetype');
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'GaramondPremierPro';
      src: url('/fonts/GaramondPremrPro.otf') format('opentype');
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'GaramondPremierProMedium';
      src: url('/fonts/GaramondPremrPro-Med.otf') format('opentype');
      font-style: medium;
      font-display: swap;
    }

*,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: 'GaramondPremierPro', Helvetica, sans-serif;
    scroll-behavior: smooth;
    font-size: 16px;
  }

`;
