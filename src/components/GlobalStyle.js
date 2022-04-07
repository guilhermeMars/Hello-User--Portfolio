import { createGlobalStyle } from "styled-components";

// A importação das fontes e etc é feita no index.html da pasta public

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;
