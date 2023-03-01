import React from "react";
import Container from "react-bootstrap/Container";
import "./Projects.css";

function Projects() {
  return (
    <Container className="my-5" id="projects">
      <div className="m-5">
        <h1 className="d-flex bd-highlight">Professional Projects</h1>
        <div className="Projects-list mx-3">
          <h3>To Finish: ShareBnb</h3>
          <p>Team Size: </p>
          <p>Role: </p>
          <p>Test Coverage: </p>
          <br />
          <h3>To Finish: NumbersAPI</h3>
          <p>Team Size: </p>
          <p>Role: </p>
          <p>Test Coverage: </p>
          <br />
          <h3>In progress: StackQs</h3>
          <p>Team Size: </p>
          <p>Role: </p>
          <p>Test Coverage: </p>
          <br />
          <h3>In progress/private: My NeighborsBookshelf</h3>
          <p>Team Size: </p>
          <p>Role: </p>
          <p>Test Coverage: </p>
          <br />
        </div>
      </div>
    </Container>
  );
}

export default Projects;
