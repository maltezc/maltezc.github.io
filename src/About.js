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
} from "react-icons/si";

import headshot from "./images/headShot.jpg";
import "./About.css";

function About() {
  return (
    <Container className="my-5" id="about">
      <div className="mt-5 pt-5 m-5">
        <h1 className="d-flex bd-highlight mt-5">About</h1>
        <div className="About-headshot justify-content-center">
          <img src={headshot} alt="" width="300" id="headshot" />
        </div>
        <div className="About-name d-flex my-5">
          <h3>Christopher Maltez</h3>
        </div>
        <div className="About-contact">
          <h3>Email:</h3>
          <div className="mx-3 mb-5">
            <h3>Chistopher.maltez@outlook.com</h3>
          </div>
        </div>

        {/* TODO: Add Resume */}

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
                    <li className="js">
                      <IoLogoJavascript />
                      Javascript
                    </li>
                    <li className="python">
                      <IoLogoPython />
                      Python
                    </li>
                    <li className="csharp">
                      <TbCSharp />
                      C#
                    </li>
                    <li className="jquery">
                      <SiJquery />
                      JQuery
                    </li>
                    <li className="sass">
                      <SiSass /> {/* TODO: FIX THIS */}
                      SASS
                    </li>
                  </ul>
                </div>

                <div className="Tech-Stack-backend-list-languages col">
                  <h4>Backend</h4>
                  <ul>
                    <li className="PostegreSql">
                      {" "}
                      {/* TODO: ADD STYLES  */}
                      <SiPostgresql />
                      PostgresSQL
                    </li>
                    <li className="firebase">
                      {" "}
                      {/* TODO: ADD STYLES  */}
                      <SiFirebase />
                      Firebase
                    </li>
                  </ul>
                </div>

                <div className="Tech-Stack-list-platforms col">
                  <h4>Platforms</h4>
                  <ul>
                    <li className="react">
                      <FaReact /> React
                    </li>
                    <li className="flask">
                      <SiFlask /> Flask
                    </li>
                  </ul>
                </div>

                <div className="Tech-Stack-list-programs col">
                  <h4>Other Programs</h4>
                  <ul>
                    <li className="autocad">
                      <SiAutodesk /> AutoCad
                    </li>
                    <li className="revit">
                      <SiAutodesk /> Revit
                    </li>
                    <li className="cron">
                      {" "}
                      {/* TODO: Cronitor logo */}
                      Cron
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <br />

          <h3 className="About-aboutme-title d-flex">Bio</h3>
          <p className="About-aboutme-paragraph d-flex mx-5">
            I used to be in the architecturce and design field but have since
            learned that I love programming more than designing. Because of
            this, I have switched over to computer programming and graduated
            from The Rithm School Bootcamp. I have really found a passion for
            all things programming. Everything from backends, to data
            structures, to data visualization, to full stack apps! Checkout my
            projects below and feel free to reach out!
          </p>
        </div>
      </div>
    </Container>
  );
}

export default About;
