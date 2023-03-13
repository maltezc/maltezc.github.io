import React from "react";

import Container from "react-bootstrap/Container";

import { FaBeer, FaReact } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { TbCSharp } from "react-icons/tb";
import {
  SiSass,
  SiJquery,
  SiFlask,
  SiAutodesk,
  SiPostgresql,
  SiFirebase,
  SiBootstrap,
  // SiMui
} from "react-icons/si";

// import { SiMui } from "react-icons/si";

import headshot from "./../images/headShot.jpg";
import "./About.scss";

function About() {
  return (
    <section id="about">
      <Container className="my-5" >
        <article className="px-4 pt-5 my-5 text-center">
          <h2 className="display-4 d-flex bd-highlight mt-5 fw-bold">About</h2>
          <div className="overflow-hidden">
            <div className="About-headshot container px-5">
              <img
                src={headshot}
                id="headshot"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                width="350"
                height="250"
                loading="lazy"
              />
            </div>
          </div>
          <h2 className="About-name display-5 fw-bold">Christopher Maltez</h2>
          <div className="col-lg-6 mx-auto">
            <br />
            <p className="lead mb-1">
              I used to be in the architecture and design field but have since
              learned that I love programming more than designing. Because of
              this, I have switched over to computer programming and graduated
              from The Rithm School Bootcamp. I have really found a passion for
              all things programming. Everything from backends, to data
              structures, to data visualization, to full stack apps! Checkout my
              projects below and feel free to reach out!
            </p>
          </div>
        </article>

        <article className="mt-1 pt-1 m-5">

          <div className="About-contact">
            <h3>Email:</h3>
            <div className="mx-3 mb-5">
              <h3>Chistopher.maltez@outlook.com</h3>
            </div>
          </div>

          <div className="About-aboutme my-5">
            <div className="Tech Stack">
              <h3>
                <BsStack /> Tech Stack <FaBeer></FaBeer>
              </h3>

              <div className="Tech Stack-list">
                <br />
                <div className="row align-items-start">
                  <div className="Tech-Stack-list-languages col">
                    <h4>Languages</h4>
                    <ul>
                      <li className="js icon">
                        <IoLogoJavascript />
                        Javascript
                      </li>
                      <li className="python icon">
                        <IoLogoPython />
                        Python
                      </li>
                      <li className="csharp icon">
                        <TbCSharp />
                      </li>
                    </ul>
                  </div>

                  <div className="Tech-Stack-backend-list-languages col">
                    <h4>Backend</h4>
                    <ul>
                      <li className="psql icon">
                        <SiPostgresql />
                        PostgresSQL
                      </li>
                      <li className="firebase icon">
                        <SiFirebase />
                        Firebase
                      </li>
                    </ul>
                  </div>

                  <div className="Tech-Stack-list-platforms col">
                    <h4>Platforms</h4>
                    <ul>
                      <li className="react icon">
                        <FaReact /> React
                      </li>
                      <li className="flask icon">
                        <SiFlask /> Flask
                      </li>
                      <li className="jquery icon">
                        <SiJquery />
                        JQuery
                      </li>
                      <li className="sass icon">
                        <SiSass />
                        SASS
                      </li>
                      <li className="bootstrap icon">
                        <SiBootstrap />
                        Bootstrap
                      </li>
                      {/* <li className="mui icon">
                      <SiMui />
                      MaterialUI
                    </li> */}
                    </ul>
                  </div>

                  <div className="Tech-Stack-list-programs col">
                    <h4>Other Programs</h4>
                    <ul>
                      <li className="autodesk-autocad icon">
                        <SiAutodesk /> AutoCad
                      </li>
                      <li className="autodesk-revit icon">
                        <SiAutodesk /> Revit
                      </li>
                      <li className="cron icon">
                        {/* TODO: Cronitor logo */}
                        Cron
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
        </article>
      </Container>
    </section>
  );
}

export default About;
