import React, { useState } from "react";
import Navbar from "./Navbar";
import { GlobalStyle } from "../styles/globalStyles";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Layout">
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2023 Eric Tsai</p>
      </footer>
    </div>
  );
}
