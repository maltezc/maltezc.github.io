import React from "react";
// import Button from "react-bootstrap/Button";
// import { Linkedin, Github } from "react-bootstrap-icons";
import "./NaviBar.scss";


function NaviBar() {
  return (
    <div className="NaviBarDiv sticky-top">
      <nav className="d-flex flex-wrap justify-content-center pt-4 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mx-5 me-md-auto text-light text-decoration-none fs-2"
          data-to-scrollspy-id="home"
        >
          <h2>CM</h2>
        </a>


        <a
          href="#about"
          className="nav-link fs-5 px-3 pt-1"
          data-to-scrollspy-id="about"
        >
          About
        </a>
        <a
          href="#projects"
          className="nav-link fs-5 px-3 pt-1"
          data-to-scrollspy-id="projects"
        >
          Projects
        </a>
        <a
          href="#affiliations"
          className="nav-link fs-5 px-3 pt-1"
          data-to-scrollspy-id="affiliations"
        >
          Affiliations
        </a>
        {/* <a
          href="#entertainment"
          className="nav-link fs-5 px-3 pt-1"
          data-to-scrollspy-id="entertainment"
        >
          Entertainment
        </a> */}
      </nav>
    </div>
  );
}

export default NaviBar;
