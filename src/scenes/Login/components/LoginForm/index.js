import React, { Component } from "react";
import { Form, Button } from "reactstrap";

import EmailInput from "../EmailInput/index";
import PasswordInput from "../PasswordInput/index";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Form>
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

export default LoginForm;
