import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

interface Props {
  show?: boolean;
  toggle?: () => void;
}

const MobileNavContainer = styled.div<Props>`
  width: 100%;
  flex-basis: 100%;
  flex-grow: 1;
  top: 0;
  z-index: 999;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const NavbarNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

const NavItem = styled.li`
  text-align: right;
  padding-bottom: 1.5rem;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 0.3rem 0;
  font-size: 1.8rem;
  text-decoration: none;
  color: #fff;
`;

const MobileNav = ({ show, toggle }: Props) => {
  return (
    <MobileNavContainer
      className={show ? "show" : "hide"}
      toggle={toggle}
      id="mobile-nav"
    >
      <NavbarNav>
        <NavItem>
          <NavLink to="/portfolio" onClick={toggle}>
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#services" onClick={toggle}>
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#process" onClick={toggle}>
            Process
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/#pricing" onClick={toggle}>
            Pricing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" onClick={toggle}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" onClick={toggle}>
            Contact
          </NavLink>
        </NavItem>
      </NavbarNav>
    </MobileNavContainer>
  );
};

export default MobileNav;
