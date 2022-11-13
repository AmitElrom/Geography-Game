import React from "react";
import BestScoreOrTime from "./BestScoreOrTime";
import LevelFailsPieChart from "./LevelFailsPieChart";

const UserLevelData = ({ title, averageScore, totalScore, totalGames, bestScore, bestTime, fails }) => {
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
      {fails.length > 0 && <LevelFailsPieChart fails={fails} title={title} />}
    </div>
  );
};

export default UserLevelData;
