import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import HeaderMenu from './components/HeaderMenu/index';
import Login from './scenes/Login/index';
import About from './scenes/About/index';
import Profile from './scenes/Profile/index';

import { getCurrentUserFromToken } from './scenes/Login/services/currentUser/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUserFromToken();
  }

  render() {
    return (
      <div className="App">
        <HeaderMenu />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
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

export default withRouter(
  connect(
    mapStateToProps,
    { getCurrentUserFromToken }
  )(App)
);

export { App };
