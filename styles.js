import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 20px;
    font-family: system-ui;
    padding:0.5rem auto;
  }
`;
