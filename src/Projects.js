import React from "react";
import Container from "react-bootstrap/Container";
import "./Projects.css";

function Projects() {
  return (
    <Container className="my-5" id="projects">
      <div className="m-5">
        <h1 className="d-flex bd-highlight">Professional Projects</h1>
        <div className="Projects-list mx-3">
          <h3>To Finish: ShareBnb</h3> {/* TODO: include badges */}
          <p>Team Size: </p>
          <p>Role: </p>
          <p>Test Coverage: </p>
          <p>Tech Stack used: </p>
          <br />
          <h3>To Finish: NumbersAPI</h3>{/* TODO: include badges */}
          <p>Team Size: </p>
          <p>Role: Worked on integration of slack bo reporting a daily fact. Worked on </p>
          <p>Test Coverage: </p>
          <p>Tech Stack used: FRONTEND: js/jquery, sass, BACKEND: flask/python, MOBILE FRONT: react Native</p> {/* TODO: FIX THIS */}
          <br />
          <h3>In progress: StackQs</h3>{/* TODO: include badges */}
          <p>Team Size: </p>
          <p>Role: </p>
          <p>Test Coverage: </p>
          <p>Tech Stack used: </p>
          <br />
          <h3>In progress/private: My NeighborsBookshelf</h3>{/* TODO: include badges */}
          <p>Team Size: </p>
          <p>Role: </p>
          <p>Test Coverage: </p>
          <p>Tech Stack used: </p>
          <br />
        </div>
      </div>
    </Container>
  );
}

export default Projects;
