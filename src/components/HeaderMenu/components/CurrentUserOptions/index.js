import React from "react";
import { connect } from "react-redux";

import LoginIcon from "./components/LoginIcon/index";
import LogoutIcon from "./components/LogoutIcon/index";

const CurrentUserOptions = ({ currentUser }) => {
  if (!!currentUser) {
    return <LogoutIcon />;
  } else {
    return <LoginIcon />;
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(CurrentUserOptions);
