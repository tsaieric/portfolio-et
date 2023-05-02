import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    primary: "#FFFFAB",
    secondary: "#BC96E6",
    tertiary: "#FFFFFF",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
