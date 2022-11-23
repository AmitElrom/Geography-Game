import React, { useState } from "react";
import UserLevelTitle from "./UserLevelTitle";
import UserLevelData from "./UserLevelData";

const UserLevel = (props) => {
  const { title, isChecked, toggleUserLevelData } = props;

  return (
    <div style={{ width: "20%" }}>
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
