import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FaSignInAlt, FaSignOutAlt, FaBolt } from "react-icons/fa";

import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <Fragment>
      <Navbar>
        <NavbarBrand href="/">
          <FaBolt color="#ecc345" /> <p>SmiteGuide</p>
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/gods">Gods</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/items">Items</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/game-modes">Game Modes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/patch-notes">Patch Notes</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink href="/login">
              Login <FaSignInAlt color="white" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

export default HeaderMenu;
