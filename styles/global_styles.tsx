"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'GaramondPremierPro';
      src: url('/fonts/GaramondPremrPro.otf') format('opentype');
      font-style: normal;
      font-display: fallback;
    }

    @font-face {
      font-family: 'GaramondPremierProMedium';
      src: url('/fonts/GaramondPremrPro-Med.otf') format('opentype');
      font-style: medium;
      font-display: fallback;
    }

    @font-face {
      font-family: 'GaramondPremierPro';
      src: url('/fonts/GaramondPremrPro-It.otf') format('opentype');
      font-style: italic;
      font-display: fallback;
    }

*,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: 'GaramondPremierPro', serif;
    scroll-behavior: smooth;
    font-size: 20px;
  }
`;
