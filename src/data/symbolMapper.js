import React from "react";
import { FaReact } from "react-icons/fa";
// import { BsStack } from "react-icons/bs";
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

const frontendLanguages = {
  js: <IoLogoJavascript className="js" />,
  python: <IoLogoPython className="python" />,
  csharp: <TbCSharp className="csharp" />,
};

const backendLanguages = {
  js: <IoLogoJavascript className="js" />,
  python: <IoLogoPython className="python" />,
  csharp: <TbCSharp className="csharp" />,
};

const platforms = {
  react: <FaReact className="react" />,
  flask: <SiFlask className="flask" />,
  jquery: <SiJquery className="jquery" />,
  sass: <SiSass className="sass" />,
  bootstrap: <SiBootstrap className="bootstrap" />,
  // mui: <SiMui className="mui" />
};

const backends = {
  psql: <SiPostgresql className="psql" />,
  flask: <SiFlask className="flask" />,
  firebase: <SiFirebase className="firebase" />,
};

const otherPrograms = {
  autodesk: <SiAutodesk className="autodesk" />,
};

// backend

// other programs
export { frontendLanguages, backendLanguages, backends, platforms, otherPrograms };
