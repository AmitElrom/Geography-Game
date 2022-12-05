import React, { useEffect, useState } from "react";

import BestScoreOrTimeUnit from "./BestScoreOrTimeUnit";

import classes from "./BestScoreOrTime.module.css";

const BestScoreOrTime = ({ bestScore, bestTime }) => {
  const [data, setData] = useState([]);
  const [isScoreOrTime, setIsScoreOrTime] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    if (bestScore) {
      setData(bestScore);
      setIsScoreOrTime("score");
    }
    if (bestTime) {
      setData(bestTime);
      setIsScoreOrTime("time");
    }
  }, [bestScore, bestTime]);

  const bestScoreOrTimeList = data.map((item) => {
    return <BestScoreOrTimeUnit key={item.id} {...item} />;
  });

  const togglList = () => {
    setIsListVisible((prevVal) => !prevVal);
  };

  return (
    <div>
      {isScoreOrTime === "score" && data && (
        <button
          className={`button-28 ${classes["btn-toggle"]} ${
            isListVisible && classes["btn-toggle-active"]
          }`}
          onClick={togglList}
        >
          <p>Games With Best Score</p>
          <p>
            {data.length} games played
            {data[0] ? `, with the best score of ${data[0]?.score}` : ""}
          </p>
        </button>
      )}
      {isScoreOrTime === "time" && data && (
        <button
          className={`button-28 ${classes["btn-toggle"]} ${
            isListVisible && classes["btn-toggle-active"]
          }`}
          onClick={togglList}
        >
          <p>Games With Best Time</p>
          <p>
            {data.length} games played
            {data[0]
              ? `, with the best time of ${
                  data[0]?.duration.hours
                    ? `${data[0]?.duration.hours} hours`
                    : ""
                }${
                  data[0]?.duration.minutes
                    ? `${data[0]?.duration.minutes}, `
                    : ""
                }${
                  data[0]?.duration.seconds
                    ? `${data[0]?.duration.seconds} seconds and `
                    : ""
                }${data[0]?.duration.milliseconds} milliseconds`
              : ""}
          </p>
        </button>
      )}
      {isListVisible && <ol>{bestScoreOrTimeList}</ol>}
    </div>
  );
};

export default BestScoreOrTime;
