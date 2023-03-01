import React from "react";
import "./NaviBar3.css";

function NaviBar3() {
  return (
    <div className="NaviBarDiv sticky-top">
      {/* <nav className="d-flex flex-wrap justify-content-center border-bottom"> */}
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mx-5 me-md-auto text-light text-decoration-none"
          data-to-scrollspy-id="home"
        >
          <span className="fs-2">CM</span>
        </a>

        <a
          href="/"
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
        <a
          href="#entertainment"
          className="nav-link fs-5 px-3 pt-1"
          data-to-scrollspy-id="entertainment"

        >
          Entertainment
        </a>
      </nav>
    </div>
  );
}

export default NaviBar3;
