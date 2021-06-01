import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavLinks,
  NavItem,
  NavLogoImage,
  NavLinksHash,
  NavToggler,
} from "./NavBarElements";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

interface Props {
  show: boolean;
  toggle: () => void;
}

const Navbar = ({ show, toggle }: Props) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" || show ? "#5C267C" : "transparent",
    // transition: "0.4s",
  };

  return (
    <>
      <Nav style={style}>
        <NavbarContainer>
          <NavLogo exact to="/">
            <NavLogoImage src="/assets/Logo.svg" alt="Company Logo" />
          </NavLogo>
          <NavToggler onClick={toggle}>
            {!show && <MenuIcon />}
            {show && <MenuOpenIcon />}
          </NavToggler>
          <MobileNav show={show} toggle={toggle} />
          <NavMenu>
            <NavItem>
              <NavLinks to="/portfolio">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksHash to="/#services">Services</NavLinksHash>
            </NavItem>
            <NavItem>
              <NavLinksHash to="/#process">Process</NavLinksHash>
            </NavItem>
            <NavItem>
              <NavLinksHash to="/#pricing">Pricing</NavLinksHash>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
