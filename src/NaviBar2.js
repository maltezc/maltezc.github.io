import React /* , { useState } */ from "react";
import "./NaviBar.css";

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
function NaviBar2() {
  return (
    <div className="sticky-top">
      <nav className="navbar bg-light px-3 mb-3" id="navbar-example2">
        <a className="navbar-brand" href="#">
          CM
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#affiliations">
              Affiliations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#entertainment">
              Entertainment
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="Navibar-Nav navbar-brand" href="#">
          CM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-end">
            <a className="nav-item nav-link active" href="#about">
              About <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-item nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-item nav-link" href="#affiliations">
              Affiliations
            </a>
          </div>
        </div>
      </nav> */}
    </div>
  );
}

export default NaviBar2;
