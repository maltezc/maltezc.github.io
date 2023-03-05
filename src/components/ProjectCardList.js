/* eslint-disable react/prop-types */

import React from "react";
import ProjectCard from "./ProjectCard";
// import PropTypes from "prop-types";

function ProjectCardList({ projects }) {
  return (
    <div>
      {projects.map((project) => {
        <ProjectCard project={project} />;
      })}
    </div>
  );
}

/* ProjectCardList.PropTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
}; */

export default ProjectCardList;
