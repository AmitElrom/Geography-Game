import React from "react";
import UserLevelTitle from "./UserLevelTitle";
import UserLevelData from "./UserLevelData";

import classes from './UserLevel.module.css';

const UserLevel = (props) => {
  const { title, isChecked, toggleUserLevelData } = props;

  return (
    <div className={classes.level} >
      <UserLevelTitle
        onClick={toggleUserLevelData}
        checked={isChecked || false}
        titleLevel={title}
      />
      {isChecked && <UserLevelData {...props} />}
    </div>
  );
};

export default UserLevel;
