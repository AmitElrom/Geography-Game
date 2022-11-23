import React from "react";
import classes from "./UserLevelTitle.module.css";

const UserLevelTitle = ({ titleLevel, onClick, checked }) => {
  return (
    <div>
      <input
        className={classes.checkbox}
        type="checkbox"
        name={titleLevel}
        checked={checked}
        id={titleLevel}
        onChange={onClick}
      />
      <label className={classes.label} htmlFor={titleLevel}>
        {titleLevel}
      </label>
    </div>
  );
};

export default UserLevelTitle;
