import React from "react";

import classes from './About.module.css';

const LinkNewTab = ({ href, data, className }) => {
  return (
    <a className={className ? className : classes.link} href={href} target="_blank" rel="noreferrer" >
      {data}
    </a>
  );
};

export default LinkNewTab;
