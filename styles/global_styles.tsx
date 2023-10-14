import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'Trinite';
      src: url('/fonts/TriniteNo1-RomanCondensed.woff') format('woff');
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
    font-size: 18px;
  }

  a {
    color: black;
  }
`;
