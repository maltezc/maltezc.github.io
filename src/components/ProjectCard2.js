/* eslint-disable react/prop-types */

import React from "react";
import {
  frontendLanguages,
  backendLanguages,
  backends,
  platforms,
} from "./../data/symbolMapper";
import logo from "../assets/iconmonstr-github-1.svg";

import { BsStack } from "react-icons/bs";

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
    "🚀 ~ file: ProjectCard2.js:14 ~ ProjectCard2 ~ project.frontendLanguages:",
    project.frontendLanguages
  );
  console.log(
    "🚀 ~ file: ProjectCard2.js:14 ~ ProjectCard2 ~ project.backendLanguages:",
    project.backendLanguages
  );
  console.log(
    "🚀 ~ file: ProjectCard2.js:16 ~ ProjectCard2 ~ project.backEndTechstack:",
    project.backEndTechStack
  );

  const feLanguageLogos = project.feLanguages.map((lang, i) => (
    <div className="fs-2 d-inline" key={i}>
      {frontendLanguages[lang]}
    </div>
  ));
  const platformsLogos = project.frontEndTechStack.map((fTech, i) => (
    <div className="fs-2 d-inline" key={i}>
      {platforms[fTech]}
    </div>
  ));
  const beLanguageLogos = project.beLanguages.map((lang, i) => (
    <div className="fs-2 d-inline" key={i}>
      {backendLanguages[lang]}
    </div>
  ));
  const backendsLogos = project.backEndTechStack.map((bTech, i) => (
    <div className="fs-2 d-inline" key={i}>
      {backends[bTech]}
    </div>
  ));


  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <button className="btn btn-outline-dark btn-lg px-4">
              <img
                src={logo}
                className="d-block mx-lg-auto img-fluid project-github"
                alt={project.title}
                width="700"
                height="500"
                loading="lazy"
              />
            </button>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{project.title}</h1>

            <BsStack className="fs-3" />
            <span className="m-3 fs-1">
              <span className="">
                {feLanguageLogos}
                {platformsLogos}
              </span>
              <span className="mx-3">
                {beLanguageLogos}
                {backendsLogos}
              </span>
            </span>
            <p className="lead">{project.description}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard2;
