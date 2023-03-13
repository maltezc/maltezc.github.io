import React from "react";
import { logos } from "../data/symbolMapper";
import { BsStack } from "react-icons/bs";

function ProjectInfo({ project }) {
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
  const otherProgramLogos = project.otherPrograms.map((program, i) => (
    <div className="fs-2 d-inline" key={i}>
      {logos[program]}
    </div>
  ));

  return (
    <div className="col-lg-6">
      <h2 className="display-5 lh-1 mb-3">{project.title}</h2>
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
        <span className="mx-3">{otherProgramLogos}</span>
      </span>
      <p className="lead">{project.description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-center"></div>
    </div>
  );
}

export default ProjectInfo;
