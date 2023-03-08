import React from "react";
import Container from "react-bootstrap/Container";
import "./Projects.scss";
import projectData from "../data/projectData.js";
import ProjectCardList from "./ProjectCardList";

function Projects() {
  return (
    <Container className="my-5" id="projects">
      <div className="m-5">
        <h1 className="d-flex bd-highlight">Projects</h1>
        <ProjectCardList projects={projectData} />
      </div>
    </Container>
  );
}

export default Projects;

