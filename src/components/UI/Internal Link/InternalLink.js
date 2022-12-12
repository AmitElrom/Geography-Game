import React from "react";
import { Link } from "react-router-dom";

import classes from "./InternalLink.module.css";

const InternalLink = ({ to, children }) => {
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
};

export default InternalLink;
