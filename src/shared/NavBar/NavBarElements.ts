import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Nav = styled.nav`
  min-height: 80px;
  height: auto;
  display: flex;
  margin-top: -80px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: "0.4s";
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  padding: 0 2.4rem;
`;

export const NavLogo = styled(NavLink)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  align-self: center;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoImage = styled.img`
  height: 80px;
  width: auto;
  max-height: 80px;
  padding: 1rem 0;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -22px;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavToggler = styled.button`
  font-size: 2rem;
  line-height: 1;
  margin-right: auto;
  background-color: transparent;
  width: auto;
  height: 6rem;
  margin: 1rem 0;
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;

  svg {
    font-size: 3.5rem;
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const NavLinks = styled(NavLink)`
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid #fff;
  }
  &.active {
    border-bottom: 3px solid #fff;
  }
`;

export const NavLinksHash = styled(Link)`
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid #fff;
  }
  &.active {
    border-bottom: 3px solid #fff;
  }
`;
