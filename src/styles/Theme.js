import React from "react";
import { ThemeProvider } from "styled-components";

// export const COLORS = {
//   primary: "#FAFAD2",
//   secondary: "#A3D9FF",
//   tertiary: "whitesmoke",
// };

export const theme = {
  colors: {
    primary: "#E4572E",
    secondary: "#FFFFFF",
    tertiary: "#FFFFFF",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
