import React from "react";

import classes from './PersonalInfoItem.module.css';


const PersonalInfoItem = ({ title, info }) => {
  return (
    <div className={classes.item} >
      <span className={classes.title}>{title} : &nbsp;</span>
      <span className="info">{info}</span>
    </div>
  );
};

export default PersonalInfoItem;
