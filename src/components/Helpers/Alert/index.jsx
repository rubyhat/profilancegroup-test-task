import React from "react";

import "./alert.scss";

const Alert = ({ text, variant }) => {
  return <div className={"alert " + variant}>{text}</div>;
};

export default Alert;
