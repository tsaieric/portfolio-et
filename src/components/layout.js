import React from "react";
import Navbar from "./Navbar";
import { GlobalStyle } from "../styles/globalStyles";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <GlobalStyle />
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2023 Eric Tsai</p>
      </footer>
    </div>
  );
}
