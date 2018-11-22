import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import "./SignUpForm.css";
import EmailInput from "../EmailInput/index";
import PasswordInput from "../PasswordInput/index";

class SignUpForm extends Component {
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
        <Button color="primary">Register</Button>
      </Form>
    );
  }
}

export default SignUpForm;
