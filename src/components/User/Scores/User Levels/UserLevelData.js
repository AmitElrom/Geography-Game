import React from "react";
import BestScoreOrTime from "./BestScoreOrTime";

const UserLevelData = ({ averageScore, totalScore, totalGames, bestScore, bestTime }) => {
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
      <BestScoreOrTime bestScore={bestScore} />
      <BestScoreOrTime bestTime={bestTime} />
    </div>
  );
};

export default UserLevelData;
