import React from "react";

const Alert = ({ text, variant }) => {
  return <div className={"alert " + variant}>{text}</div>;
};

export default Alert;
