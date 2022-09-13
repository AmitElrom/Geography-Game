import React from "react";

import classes from "../../../Authentication/FormInput/FormInput.module.css";

const PersonalInfoItem = ({ title, info, toUpdate, type }) => {
  return (
    <div>
      {!toUpdate ? (
        <div>
          <span>{title} : &nbsp;</span>
          <span>{info}</span>
        </div>
      ) : (
        <div className={classes.input}>
          <label htmlFor={title}>{title}</label>
          <input id={title} type={!type ? "text" : type} placeholder={title} />
        </div>
      )}
    </div>
  );
};

export default PersonalInfoItem;
