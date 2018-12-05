import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import "./Profile.css";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 6 }}>
          <Jumbotron>
            <h4 className="display-4">Guides</h4>
          </Jumbotron>
        </Col>
        <Col md={{ size: 6 }}>
          <Jumbotron>
            <h4 className="display-4">Trainers</h4>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
