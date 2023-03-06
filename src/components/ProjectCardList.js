/* eslint-disable react/prop-types */

import React from "react";
import ProjectCard2 from "./ProjectCard2";
// import ProjectCard from "./ProjectCard";
// import ProjectCard2 from "./ProjectCard2";
// import PropTypes from "prop-types";

function ProjectCardList({ projects }) {
  console.log("🚀 ~ file: ProjectCardList.js:9 ~ ProjectCardList ~ projects:", projects);
  let tests = projects.map(x => <ProjectCard2 project={x} key={x.title}/>);
  // console.log("🚀 ~ file: ProjectCardList.js:11 ~ ProjectCardList ~ titles:", titles);


  return (
    <div>
      {/* {projects.map((project) => {
        <ProjectCard project={project} />;
      })} */}
      {tests}
    </div>
  );
}

/* ProjectCardList.PropTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
}; */

export default ProjectCardList;
