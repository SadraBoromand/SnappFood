import React from "react";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- end footer --> */}
    </>
  );
};

export default Layout;
