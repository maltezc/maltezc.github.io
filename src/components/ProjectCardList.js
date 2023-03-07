/* eslint-disable react/prop-types */

import React from "react";
import ProjectCard2 from "./ProjectCard2";
// import Container from "react-bootstrap/Container";
// import ProjectCard from "./ProjectCard";
// import ProjectCard2 from "./ProjectCard2";
// import PropTypes from "prop-types";

function ProjectCardList({ projects }) {
  let projectCards = projects.map((project) => (
    <ProjectCard2 project={project} key={project.title} />
  ));
  // console.log("🚀 ~ file: ProjectCardList.js:11 ~ ProjectCardList ~ titles:", titles);

  return <div>{projectCards}</div>;
}

/* ProjectCardList.PropTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
}; */

export default ProjectCardList;
