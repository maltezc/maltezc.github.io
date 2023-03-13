import React from "react";
import Container from "react-bootstrap/Container";
import "./Projects.scss";
import projectData from "../data/projectData.js";
import ProjectCardList from "./ProjectCardList";

function Projects() {
  return (
    <section id="projects">
      <Container className="my-5" >
        <div className="m-5">
          <h2 className="display-4 d-flex bd-highlight fw-bold">Projects</h2>
          <ProjectCardList projects={projectData} />
        </div>
      </Container>
    </section>
  );
}

export default Projects;
