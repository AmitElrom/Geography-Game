import React, { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import useHttpAxios from "../../../../hooks/use-http-axios";

import classes from './MatchSummary.module.css';
import classesScoresTable from "../Scores Table/Table/ScoresTable.module.css";
import classesUsersScores from '../Scores Table/Scores/UsersScores.module.css';

const MatchSummary = () => {
  const [matchSummaryData, setMatchSummaryData] = useState({});
  const [isLevelLastMatch, setIsLevelLastMatch] = useState(true);
  const [isMatchSummary, setIsMatchSummary] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const {
    error,
    isLoading,
    sendRequest: getMatchSummaryRequest,
  } = useHttpAxios();

  useEffect(() => {
    let level = sessionStorage.getItem("last-match-level");
    let token = sessionStorage.getItem("token");
    if (level) {
      getMatchSummaryRequest(
        {
          url: `http://localhost:8000/score-elrom/game-summary?level=${level}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        (data) => {
          setMatchSummaryData(data);
        }
      );
    }
  }, [getMatchSummaryRequest]);

  useEffect(() => {
    if (pathname.includes("match-summary")) {
      setIsMatchSummary(true);
    } else {
      setIsMatchSummary(false);
    }
  }, [pathname]);

  const toMainPageHandler = () => {
    navigate("/welcome", { replace: true });
  };

  return (
    <div className={classesUsersScores["users-scores"]} >
      <h1>{isMatchSummary ? "Game Summary" : "Last Game Summary"}</h1>
      <h2>Level - {matchSummaryData?.level}</h2>
      <div>
        <h3>
          {matchSummaryData?.improvedLevelAverage?.isImproved !== "no"
            ? `Congrats! you improved your level average score by ${matchSummaryData?.improvedLevelAverage?.averageChange} points.`
            : `Bad news! you reduced your level average score by ${matchSummaryData?.improvedLevelAverage?.averageChange} points.`}
        </h3>
        <h4>
          Your last level average score was{" "}
          {matchSummaryData?.improvedLevelAverage?.lastScoreAverage} and now
          it's {matchSummaryData?.improvedLevelAverage?.currentScoreAverage}
        </h4>
      </div>
      <p>
        From a total of {matchSummaryData?.questions?.numberOfQuestions}{" "}
        questions, you answered correctly on{" "}
        {matchSummaryData?.questions?.numberOfTrueQuestions}.
      </p>
      <p>
        The game took you{" "}
        {matchSummaryData?.gameDuration?.hours !== 0 &&
          `${matchSummaryData?.gameDuration?.hours} hours, `}
        {matchSummaryData?.gameDuration?.minutes !== 0 &&
          `${matchSummaryData?.gameDuration?.minutes} minutes, `}
        {matchSummaryData?.gameDuration?.seconds !== 0 &&
          `${matchSummaryData?.gameDuration?.seconds} seconds and `}
        {matchSummaryData?.gameDuration?.milliseconds !== 0 &&
          `${matchSummaryData?.gameDuration?.milliseconds} milliseconds.`}
      </p>
      <h2>The Questions</h2>
      <table className={classesScoresTable.table}>
        <tbody>
          {matchSummaryData?.questions?.questions?.map((question) => {
            return (
              <tr key={question._id}>
                <td>{question.index}</td>
                <td>{question.isCorrect ? "Correct" : "Wrong"}</td>
                <td>The true country was {question.trueCountryName}</td>
                <td>
                  <img
                    src={question.trueCountryFlag}
                    width={30}
                    alt={`${question.trueCountryName} flag`}
                  />
                </td>
                {matchSummaryData?.questions?.numberOfFalseQuestions > 0 && (
                  <td>
                    {!question.isCorrect &&
                      `The false country was ${question.falseCountryName}`}
                  </td>
                )}
                {matchSummaryData?.questions?.numberOfFalseQuestions > 0 && (
                  <td>
                    {!question.isCorrect && (
                      <img
                        src={question.falseCountryFlag}
                        width={30}
                        alt={`${question.falseCountryName} flag`}
                      />
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {isMatchSummary && (
        <button className={`button-28 ${classes.button}`} onClick={toMainPageHandler}>to main page</button>
      )}
    </div>
  );
};

export default MatchSummary;
