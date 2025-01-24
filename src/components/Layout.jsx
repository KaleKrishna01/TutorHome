import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-full w-full">
        <Header />
        <main className="h-full w-full pt-[75px] pb-[75px]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
