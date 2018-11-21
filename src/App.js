import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";
import HeaderMenu from "./components/HeaderMenu/index";
import About from "./scenes/About/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenu />
        <Switch>
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
