import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const HeaderMenu = () => {
  return (
    <Fragment>
      <Navbar dark fixed>
        <NavbarBrand>SmiteGuide</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Gods</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Items</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Game Modes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Patch Notes</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink>
              <FaSignInAlt />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default HeaderMenu;
