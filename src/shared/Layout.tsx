import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

interface Props {
  children: any;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [show, setshow] = useState(false);

  const toggle = () => {
    setshow(!show);
  };

  return (
    <>
      <Navbar show={show} toggle={toggle} />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
