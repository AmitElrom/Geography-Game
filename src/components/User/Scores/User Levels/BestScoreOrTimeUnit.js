import React from "react";

const BestScoreOrTimeUnit = ({ score, duration, time }) => {
  const { hours, minutes, seconds, milliseconds } = duration;

  return (
    <li>
      <ul>
        <li>Score: {score}</li>
        <li>
          Duration:{" "}
          {`${hours ? `${hours} hours, ` : ""}${minutes ? `${minutes} minutes, ` : ""}${seconds ? `${seconds} seconds and ` : ""
            }${milliseconds && `${milliseconds} milliseconds.`}`}
        </li>
        <li>Time: {time}</li>
      </ul>
    </li>
  );
};

export default BestScoreOrTimeUnit;
