import React from "react";
import About from "./About";
import Projects from "./Projects";
import Affiliations from "./Affiliations";
import Entertainment from "./Entertainment";
import Footer from "./Footer";
import NaviBar3 from "./NaviBar3";
import ScrollSpy from "react-ui-scrollspy";

/**  Inspiractions
 * https://bruno-simon.com/ <- truck driving
 * https://brittanychiang.com/ <- low bar to follow
 * https://coolors.co/palettes/popular/warm <- color generator
 */

function PWApp() {
  return (
    <div>
      <NaviBar3 />

      <ScrollSpy>
        <About />
        <Projects />
        <Affiliations />
        <Entertainment />
        <Footer />
      </ScrollSpy>
    </div>
  );
}

export default PWApp;
