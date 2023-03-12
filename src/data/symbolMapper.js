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

const logos = {
  js: <IoLogoJavascript className="js" />,
  python: <IoLogoPython className="python" />,
  csharp: <TbCSharp className="csharp" />,

  react: <FaReact className="react" />,
  flask: <SiFlask className="flask" />,
  jquery: <SiJquery className="jquery" />,
  sass: <SiSass className="sass" />,
  bootstrap: <SiBootstrap className="bootstrap" />,

  psql: <SiPostgresql className="psql" />,
  firebase: <SiFirebase className="firebase" />,

  revit: <SiAutodesk className="autodesk-revit" />,
  autocad: <SiAutodesk className="autodesk-autocad" />,
};


export { logos };
