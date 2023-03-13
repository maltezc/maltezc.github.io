/* eslint-disable react/prop-types */

import React from "react";
import { logos } from "../data/symbolMapper";
import ghLogo from "../assets/iconmonstr-github-1.svg";

import ProjectInfo from "./ProjectInfo";
import GitHubButtons from "./GitHubButtons";

function ProjectCard({ project }) {
  const feLanguageLogos = project.feLanguages.map((lang, i) => (
    <div className="fs-2 d-inline" key={i}>
      {logos[lang]}
    </div>
  ));
  const platformsLogos = project.frontEndTechStack.map((fTech, i) => (
    <div className="fs-2 d-inline" key={i}>
      {logos[fTech]}
    </div>
  ));
  const beLanguageLogos = project.beLanguages.map((lang, i) => (
    <div className="fs-2 d-inline" key={i}>
      {logos[lang]}
    </div>
  ));
  const backendsLogos = project.backEndTechStack.map((bTech, i) => (
    <div className="fs-2 d-inline" key={i}>
      {logos[bTech]}
    </div>
  ));

  const githubLinks = project.githubLinks.map((link, i) => (
    <a href={link.url} key={i}>
      <button
        className="btn btn-outline-info btn-lg px-4 mx-1"
        aria-label={`Github link to ${link.url}`}
      >
        <img
          src={ghLogo}
          className="d-block mx-lg-auto"
          width="100"
          height="70"
          loading="lazy"
          alt="Github Logo Image"
        />
        {link.type}
      </button>
    </a>
  ));

  return (
    <article>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <GitHubButtons githubLinks={githubLinks} />
          <ProjectInfo
            project={project}
            feLanguageLogo={feLanguageLogos}
            platformsLogos={platformsLogos}
            beLanguageLogos={beLanguageLogos}
            backendsLogos={backendsLogos}
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
