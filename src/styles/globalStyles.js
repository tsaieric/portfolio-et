import "@fontsource/montserrat"; // Defaults to weight 400.
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Montserrat';
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

html {
	scroll-behavior: smooth;
}

/**
 * Disable smooth scrolling when users have prefers-reduced-motion enabled
 */
@media screen and (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}
}
`;
