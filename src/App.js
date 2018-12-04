import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";
import HeaderMenu from "./components/HeaderMenu/index";
import Login from "./scenes/Login/index";
import About from "./scenes/About/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenu />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default withRouter(connect(mapStateToProps)(App));
