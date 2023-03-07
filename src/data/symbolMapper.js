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
} from "react-icons/si";

const languages = {
  javascript: <IoLogoJavascript />,
  python: <IoLogoPython />,
  csharp: <TbCSharp />,
};

const platforms = {
  react: <FaReact />,
  flask: <SiFlask />,
  jquery: <SiJquery />,
  sass: <SiSass />,
  // TODO: REACT BOOTSTRAP
};

const backends = {
  psql: <SiPostgresql />,
  flask: <SiFlask />,
  firebase: <SiFirebase />,
};

const otherPrograms = {
  autodesk: <SiAutodesk />
};

// backend

// other programs
export { languages, backends, platforms, otherPrograms };
