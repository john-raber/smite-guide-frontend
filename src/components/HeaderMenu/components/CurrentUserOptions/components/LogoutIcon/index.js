import React from "react";
import { connect } from "react-redux";
import { NavLink } from "reactstrap";
import { FaSignOutAlt } from "react-icons/fa";

import { logoutUser } from "../../../../../../scenes/Login/services/currentUser/actions/index";

const LogoutIcon = ({ logoutUser }) => {
  return (
    <NavLink href="/login" onClick={logoutUser}>
      Logout <FaSignOutAlt color="white" />
    </NavLink>
  );
};

export default connect(
  null,
  { logoutUser }
)(LogoutIcon);
