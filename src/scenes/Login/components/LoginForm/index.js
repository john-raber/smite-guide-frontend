import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Button } from "reactstrap";

import EmailInput from "../EmailInput/index";
import PasswordInput from "../PasswordInput/index";

import { loginUser } from "../../services/currentUser/actions/index";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormSubmit = e => {
    const { loginUser, history } = this.props;

    e.preventDefault();

    loginUser({ user: this.state }).then(history.push("/profile"));
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Form className="LoginForm" onSubmit={this.handleFormSubmit}>
        <EmailInput
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <PasswordInput
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <Button color="warning">Login</Button>
      </Form>
    );
  }
}

export default withRouter(
  connect(
    null,
    { loginUser }
  )(LoginForm)
);

export { LoginForm };
