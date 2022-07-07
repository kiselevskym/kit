import React from "react";
import Container from "./Container";
import Header from "./Header/Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
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
