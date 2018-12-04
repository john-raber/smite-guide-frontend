import React from "react";
import { NavLink } from "reactstrap";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutIcon = () => {
  return (
    <NavLink href="/login">
      Logout <FaSignOutAlt color="white" />
    </NavLink>
  );
};

export default LogoutIcon;
