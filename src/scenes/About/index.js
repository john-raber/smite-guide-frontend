import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Jumbotron } from "reactstrap";

import "./About.css";

const About = () => {
  return (
    <Jumbotron className="About">
      <h3 className="display-3">About</h3>
      <hr className="my-2" />
      <p>
        After playing Smite for years, experienced players have a level of
        understanding of what each god in the game can do and what gods can
        counter a specific god's abilities. I have tried to get some of my
        friends to get into the game and the biggest challenge in getting them
        to play is the knowledge barrier.
      </p>
      <p>
        There are currently 98 gods in Smite and that number is constantly
        growing, so the knowledge gap between experienced players and someone
        who is just picking up the game is constantly growing. SmiteGuide is a
        site where experienced Smite players can share their knowledge of the
        game with those who are just getting started and learning the game.
      </p>
    </Jumbotron>
  );
};

export default withRouter(About);
