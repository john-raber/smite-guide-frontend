import React from "react";
import { connect } from "react-redux";

import LoginIcon from "./components/LoginIcon/index";
import LogoutIcon from "./components/LogoutIcon/index";

const CurrentUserOptions = ({ currentUser }) => {
  if (!!currentUser) {
    return (
      <div className="userOptions">
        <LogoutIcon />
      </div>
    );
  } else {
    return (
      <div className="userOptions">
        <LoginIcon />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(CurrentUserOptions);

export { CurrentUserOptions };
