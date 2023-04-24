// import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
// import "@fontsource/roboto"; // Defaults to weight 400.
import "@fontsource/roboto/500.css"; 

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}
/* body {
  background: radial-gradient(
    at top left,
    rgb(116, 116, 116) 0%,
    rgb(0, 0, 0) 100%
  );
  background-repeat: no-repeat;
}
html,
body {
  min-height: 100%;
} */
`;
