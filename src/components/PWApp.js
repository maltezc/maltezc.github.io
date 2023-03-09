import React from "react";
import About from "./About";
import Projects from "./Projects";
import Affiliations from "./Affiliations";
// import Entertainment from "./Entertainment";
import Footer from "./Footer";
import NaviBar3 from "./NaviBar3";
import ScrollSpy from "react-ui-scrollspy";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { ImProfile } from "react-icons/im";

/**  Inspiractions
 * https://bruno-simon.com/ <- truck driving
 * https://brittanychiang.com/ <- low bar to follow
 * https://coolors.co/palettes/popular/warm <- color generator
 */

function PWApp() {
  return (
    <div>
      <NaviBar3 />

      <ScrollSpy scrollThrottle={50}>
        <About />
        <Projects />
        <Affiliations />
        {/* <Entertainment /> */}
        <Footer />

        <a
          className="social-link fs-3"
          href="https://www.linkedin.com/in/christopher-maltez"
        >
          <SiLinkedin className="linkedin" />
        </a>

        <a className="social-link fs-3" href="https://github.com/maltezc">
          <SiGithub className="github" />
        </a>

        <a className="social-link fs-3" href="https://maltezc.github.io/resume/">
          <ImProfile className="resume" />
        </a>
      </ScrollSpy>
    </div>
  );
}

export default PWApp;
