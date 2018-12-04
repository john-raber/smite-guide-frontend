import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "./Login.css";
import LoginForm from "./components/LoginForm/index";
import SignUpForm from "./components/SignUpForm/index";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 2 }} />
        <Col md={{ size: 3 }}>
          <h3>Login</h3>
          <LoginForm />
        </Col>
        <Col md={{ size: 2 }} />
        <Col md={{ size: 3 }}>
          <h3>Sign Up</h3>
          <SignUpForm />
        </Col>
        <Col md={{ size: 2 }} />
      </Row>
    </Container>
  );
};

export default withRouter(Login);
