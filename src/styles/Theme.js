import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    primary: "#FCFF9A",
    secondary: "#648381", //timberwolf#D5D5D5
    tertiary: "#FFFFFF",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
