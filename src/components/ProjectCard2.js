/* eslint-disable react/prop-types */

import React from "react";
import {
  languages,
  backends,
  platforms,
  // otherPrograms,
} from "./../data/symbolMapper";

function ProjectCard2({ project }) {
  console.log(
    "🚀 ~ file: ProjectCard2.js:12 ~ ProjectCard2 ~ project:",
    project.title
  );
  console.log(
    "🚀 ~ file: ProjectCard2.js:14 ~ ProjectCard2 ~ project.frontEndTechStack:",
    project.frontEndTechStack
  );
  console.log(
    "🚀 ~ file: ProjectCard2.js:14 ~ ProjectCard2 ~ project.languages:",
    project.languages
  );
  console.log(
    "🚀 ~ file: ProjectCard2.js:16 ~ ProjectCard2 ~ project.backEndTechstack:",
    project.backEndTechStack
  );

  const languageLogos = project.languages.map((lang, i) => (
    <div key={i}>({languages[lang]})</div>
  ));
  const platformsLogos = project.frontEndTechStack.map((fTech, i) => (
    <div key={i}>{platforms[fTech]}</div>
  ));
  const backendsLogos = project.backEndTechStack.map((bTech, i) => (
    <div key={i}>{backends[bTech]}</div>
  ));
  /* fruits.map(fruit => <div key={fruit}
            style={styles}>{fruit}</div>) */

  // TODO: map through symbols

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={project.image}
              // src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt={project.title}
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{project.title}</h1>
            {/* TODO: languages */}
            <span className="m-3 fs-1"></span>
            {languageLogos}
            {platformsLogos}
            {backendsLogos}
            {/* TODO: frontend */}
            {/* TODO: backend */}
            <p className="lead">{project.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default ProjectCard2;
