import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
