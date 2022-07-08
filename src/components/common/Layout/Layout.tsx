import React from "react";
import Container from "../Container";
import Header from "../Header";
import LayoutTypes from "./LayoutTypes";

const Layout: React.FC<LayoutTypes> = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
