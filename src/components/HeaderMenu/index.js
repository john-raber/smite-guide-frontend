import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaBolt } from 'react-icons/fa';

import './HeaderMenu.css';
import CurrentUserOptions from './components/CurrentUserOptions/index';

const HeaderMenu = () => {
  return (
    <Fragment>
      <Navbar className="headerMenu">
        <NavbarBrand href="/">
          <FaBolt color="#ecc345" />
          <p> SmiteGuide</p>
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
            <CurrentUserOptions />
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(HeaderMenu);
export { HeaderMenu };
