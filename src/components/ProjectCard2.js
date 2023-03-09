/* eslint-disable react/prop-types */

import React from "react";
// import { useNavigate } from "react-router-dom";
import {
  frontendLanguages,
  backendLanguages,
  backends,
  platforms,
} from "./../data/symbolMapper";
// import ghLogo from "../assets/iconmonstr-github-1.svg";

import { BsStack } from "react-icons/bs";

function ProjectCard2({ project }) {


  /*   let navigate = useNavigate();
  const routeChange = (route) => {
    console.log("ROUTE: ", route);
    let path = { route };
    navigate(path);
  }; */

  // console.log("GITHUB LINKS: ", project.githubLinks);

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

  project.githubLinks.map((link) => {
    console.log("LINKS", link.url);
  });

  const githubLinks = project.githubLinks.map((link, i) => {
    <div key={i}>hello</div>;
    // <p key={i}>{link.url}</p>;

    {/* <button
      className="btn btn-outline-dark btn-lg px-4"
      key={i}
      onClick={routeChange}
    >
      <img
        src={ghLogo}
        className="d-block mx-lg-auto project-github"
        width="100"
        height="70"
        loading="lazy"
      />
      <h4>
        <i className="fas fa-search-plus"></i>
      </h4>
      <p className="m-0">{link.type}</p>
    </button>; */}
  });
  console.log("🚀 ~ file: ProjectCard2.js:74 ~ githubLinks ~ githubLinks:", githubLinks);
  /* console.log(
    "🚀 ~ file: ProjectCard2.js:70 ~ githubLinks ~ project.githubLinks:",
    project.githubLinks[0].url
  ); */

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 d-flex justify-content-center">
            <span className="btn-group" role="group">
              LINKS HERE
              {githubLinks}
              {/* <button className="btn btn-outline-dark btn-lg px-4">
                <img
                  src={ghLogo}
                  className="d-block mx-lg-auto project-github"
                  alt={project.title}
                  width="100"
                  height="70"
                  loading="lazy"
                />
                <h4>
                  <i className="fas fa-search-plus"></i>
                </h4>
                <p className="m-0">Github</p>
              </button>
              <button className="btn btn-outline-dark btn-lg px-4">
                <img
                  src={ghLogo}
                  className="d-block mx-lg-auto project-github"
                  alt={project.title}
                  width="90"
                  height="60"
                  loading="lazy"
                />
                <h4>
                  <i className="fas fa-search-plus"></i>
                </h4>
                <p className="m-0">Github</p>
              </button> */}
            </span>
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
            <div className="d-grid gap-2 d-md-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard2;
