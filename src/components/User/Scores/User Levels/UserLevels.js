import React from "react";
import UserLevel from "./UserLevel";

import classes from "./UserLevels.module.css";

const UserLevels = ({ userLevelsData, setUserLevelsData }) => {
  const toggleUserLevelData = (e) => {
    const { name, checked } = e.target;
    if (name === "check-all") {
      const transformedLevels = userLevelsData?.map((level) => {
        return { ...level, isChecked: checked };
      });
      setUserLevelsData(transformedLevels);
    } else {
      const transformedLevels = userLevelsData?.map((level) =>
        level.title === name ? { ...level, isChecked: checked } : level
      );
      setUserLevelsData(transformedLevels);
    }
  };

  const userLevelsDataList = userLevelsData?.map((level) => {
    return (
      <UserLevel
        key={level.id}
        {...level}
        setUserLevelsData={setUserLevelsData}
        userLevelsData={userLevelsData}
        toggleUserLevelData={toggleUserLevelData}
      />
    );
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <input
          className={classes["check-all-checkbox"]}
          type="checkbox"
          name="check-all"
          id="check-all"
          checked={
            !userLevelsData?.filter((level) => level.isChecked !== true).length
          }
          onChange={toggleUserLevelData}
        />
        <label className={classes["check-all-label"]} htmlFor="check-all">
          Show All
        </label>
      </div>
      {userLevelsDataList}
    </div>
  );
};

export default UserLevels;
