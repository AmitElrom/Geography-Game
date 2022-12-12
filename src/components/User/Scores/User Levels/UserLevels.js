import React, { useEffect } from "react";
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

  const userLevelsDataList = (
    <div className={classes.levels}>
      {userLevelsData?.map((level) => {
        return (
          <UserLevel
            key={level.id}
            {...level}
            setUserLevelsData={setUserLevelsData}
            userLevelsData={userLevelsData}
            toggleUserLevelData={toggleUserLevelData}
          />
        );
      })}
    </div>
  );

  return (
    <div className={classes["levels-and-check-all"]}>
      <div className={classes["check-all"]}>
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
        <label
          className={`button-28 ${classes["check-all-label"]} ${
            !userLevelsData?.filter((level) => level.isChecked !== true)
              .length && classes["check-all-label-active"]
          }`}
          htmlFor="check-all"
        >
          Show All
        </label>
      </div>
      {userLevelsDataList}
    </div>
  );
};

export default UserLevels;
