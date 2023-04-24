import { createGlobalStyle } from "styled-components";
import { Nunito } from "next/font/google";
export const nunito = Nunito({
  subsets: ["latin"],
});
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin-bottom: 80px;
    padding:0;
    background-color: #0A3F1A;
font-family: ${nunito.style.fontFamily};
  }


`;
