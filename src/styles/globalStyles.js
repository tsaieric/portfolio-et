import "@fontsource/roboto"; // Defaults to weight 400.
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

body {
  background: radial-gradient(
    at top left,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 100%
  );
  background-repeat: no-repeat;
}

html,
body {
  min-height: 100%;
} 
`;
