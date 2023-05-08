import "@fontsource/montserrat"; // Defaults to weight 400.
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Montserrat';
    box-sizing: border-box;
}

body {
  background: black; 
  /* radial-gradient(
    at top left,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 100%
  ); */
  background-repeat: no-repeat;
  
  //remove browser default css padding for navbar to work
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100%;
}

html {
	scroll-behavior: smooth;

  //prevent sidebar from impacting navbar. 
  //Calculates scrollbar width and -right 
  //margin that amount. If no bar, then it's 0
  @media screen and (min-width: 1000px) {
    overflow-x: hidden;
    margin-right: calc(-1 * (100vw - 100%));
  }
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
