import React from "react";
import { NavLink } from "reactstrap";
import { FaSignInAlt } from "react-icons/fa";

const LoginIcon = () => {
  return (
    <NavLink href="/login" className="loginIcon">
      Sign Up/Sign In <FaSignInAlt color="white" />
    </NavLink>
  );
};

export default LoginIcon;
