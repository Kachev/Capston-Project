import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    padding:0;
    background-color:#E5FADC;
    /* Desktopscreen 992px to ... */

@media screen and (min-width: 992px){

.mobile {display: none !important;}

.no-mobile {display: block !important;}

 ...

}

/* Small screen / tablet / 760px to 991px */

@media (max-width: 991px) {

.mobile {display: block !important;}

.no-mobile {display: none !important;}

 ...

}

/* Smaller screen / tablet+phone / 480px to 759px */

@media (max-width: 759px) {

.mobile {display: block !important;}

.no-mobile {display: none !important;}

...

}

/* Extra small screen / smartphone / 280px to 479px */

@media (max-width: 479px) {

.mobile {display: block !important;}

.no-mobile {display: none !important;}

...

}
  }
`;
