import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectCardList({ projects }) {
  return (
    <div>
      {projects.map((project) => {
        <ProjectCard project={project} />;
      })}
    </div>
  );
}

export default ProjectCardList;
