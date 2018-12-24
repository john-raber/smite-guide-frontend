import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Button } from "reactstrap";

import EmailInput from "../EmailInput/index";
import PasswordInput from "../PasswordInput/index";
import PasswordConfirmationInput from "../PasswordConfirmationInput/index";

import { createUser } from "../../services/currentUser/actions/index";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: ""
  };

  handleFormSubmit = e => {
    const { password, passwordConfirmation } = this.state;
    const { createUser, history } = this.props;

    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert("Passwords must match");
    }

    createUser({ user: this.state }).then(history.push("/profile"));
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Form className="SignUpForm" onSubmit={this.handleFormSubmit}>
        <EmailInput
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <PasswordInput
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <PasswordConfirmationInput
          value={this.state.passwordConfirmation}
          onChange={this.handleInputChange}
        />
        <Button color="warning">Register</Button>
      </Form>
    );
  }
}

export default withRouter(
  connect(
    null,
    { createUser }
  )(SignUpForm)
);

export { SignUpForm };
