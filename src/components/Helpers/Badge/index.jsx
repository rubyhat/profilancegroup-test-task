import React from "react";

import "./badge.scss";

const Badge = ({ children, variant }) => {
  return <div className={`badge badge_${variant}`}>{children}</div>;
};

export default Badge;
