import React from "react";

const UserLevelData = ({ averageScore, totalScore, totalGames }) => {
  return (
    <div>
      <p>
        Average Score <span>{averageScore}</span>
      </p>
      <p>
        Total Score <span>{totalScore}</span>
      </p>
      <p>
        Total Games <span>{totalGames}</span>
      </p>
    </div>
  );
};

export default UserLevelData;
