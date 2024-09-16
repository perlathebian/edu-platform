import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
  }
`;

export default GlobalStyle;
