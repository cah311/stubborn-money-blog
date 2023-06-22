import React from "react";
import { Header } from "./";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Analytics /> */}
    </>
  );
};

export default Layout;
