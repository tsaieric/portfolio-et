import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    primary: "#DDA417", //Zelda Gold
    secondary: "#638192", //Payne's Gray
    tertiary: "#FFFFFF",
    bgHighlight: "#2F4F4F", //Dark Slate Gray
    bgTransluscent: "rgba(47, 79, 79, 0.5);", //Dark Slate Gray Transluscent
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
