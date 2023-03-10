import React from "react";
import Container from "react-bootstrap/Container";
import "./Affiliations.scss";
import ProjectCardList from "./ProjectCardList";

function Affiliations() {
  return (
    <Container className="my-5" id="projects">
      <div className="m-5">
        <h1 className="d-flex bd-highlight">Projects</h1>
        <ProjectCardList projects={projectData} />
      </div>
    </Container>
  );
}

export default Affiliations;
{/* <Container className="my-5" id="affiliations">
  <div className="m-5">
    <h1 className="d-flex bd-highlight">Affiliations</h1>
    <div className="Affiliations-list mx-3">
      <h3>
        <a href="https://m3dida.com/">M3dida.com</a>
      </h3>{" "}
    </div>
  </div>
</Container>; */}
