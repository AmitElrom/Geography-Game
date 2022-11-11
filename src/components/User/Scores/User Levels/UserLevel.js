import React from "react";
import UserLevelTitle from "./UserLevelTitle";
import UserLevelData from "./UserLevelData";
import { useState } from "react";

const UserLevel = ({ title, averageScore, totalScore, totalGames }) => {
  const [isUserLevelDataVisible, setIsUserLevelDataVisible] = useState(false);

  const toggleUserLevelData = () => {
    setIsUserLevelDataVisible((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div onClick={toggleUserLevelData}>
      <UserLevelTitle titleLevel={title} />
      {/* {isUserLevelDataVisible && ( */}
      <UserLevelData
        averageScore={averageScore}
        totalScore={totalScore}
        totalGames={totalGames}
      />
      {/* )} */}
    </div>
  );
};

export default UserLevel;
