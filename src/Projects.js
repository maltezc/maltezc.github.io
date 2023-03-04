import React from "react";
import Container from "react-bootstrap/Container";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiFlask, SiPostgresql } from "react-icons/si";
import { HiOutlineUserGroup } from "react-icons/hi";
import "./Projects.css";

function Projects() {
  return (
    <Container className="my-5" id="projects">
      <div className="m-5">
        <h1 className="d-flex bd-highlight">Professional Projects</h1>
        <div className="Projects-list mx-3">
          <div className="ShareBnb">
            <h3>
              ShareBnb
              <span className="m-3 fs-3">
                <IoLogoJavascript />
                <IoLogoPython />
              </span>
              <span className="m-3 fs-3">
                <FaReact />
                <SiFlask />
                <SiPostgresql />
              </span>
            </h3>{" "}
            {/* TODO: include badges */}
            <span>
              <HiOutlineUserGroup className="general-icon" /> : 2
            </span>
            <p>
              Role: Co-Author of full-stack (
              <a href="https://github.com/meyburdj/sharebnb_front">FrontEnd</a>{" "}
              |{" "}
              <a href="https://github.com/maltezc/ShareBnB-Backend">BackEnd</a>)
              application
            </p>
          </div>
          <br />

          <div className="NumbersAPI">
            <h3>
              <a href="https://github.com/rithmschool/numbers_api_v2/">
                To Finish: NumbersAPI
              </a>
            </h3>
            {/* TODO: include badges */}
            <p>Team Size: 7</p>
            <p>
              Role: Worked on integration of slack bo reporting a daily fact.
              Worked on{" "}
            </p>
            <p>Test Coverage: </p>
            <p>
              Tech Stack used: FRONTEND: js/jquery, sass, BACKEND: flask/python,
              MOBILE FRONT: react Native
            </p>{" "}
            {/* TODO: FIX THIS */}
          </div>
          <br />
          <div className="StackQs">
            <h3>In progress: StackQs</h3>
            {/* TODO: include badges */}
            <p>Team Size: </p>
            <p>Role: </p>
            <p>Test Coverage: </p>
            <p>Tech Stack used: </p>
          </div>
          <br />
          <div className="MyNeighborsBookshelf">
            <h3>In progress/private: My NeighborsBookshelf</h3>
            {/* TODO: include badges */}
            <p>Team Size: </p>
            <p>Role: </p>
            <p>Test Coverage: </p>
            <p>Tech Stack used: </p>
          </div>
          <br />
        </div>
      </div>
    </Container>
  );
}

export default Projects;
