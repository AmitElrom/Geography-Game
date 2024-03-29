import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Spinner from "../../../UI/Spinner/Spinner";

import useHttpAxios from "../../../../hooks/use-http-axios";

import classes from "./MatchSummary.module.css";
import classesScoresTable from "../Scores Table/Table/ScoresTable.module.css";
import classesUsersScores from "../Scores Table/Scores/UsersScores.module.css";

import { alertActions } from "../../../../store/alert-slice";

const MatchSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [matchSummaryData, setMatchSummaryData] = useState({});
  const [isMatchSummary, setIsMatchSummary] = useState(false);

  const {
    error,
    isLoading,
    sendRequest: getMatchSummaryRequest,
  } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  useEffect(() => {
    let level = localStorage.getItem("last-match-level");
    let token = localStorage.getItem("token");
    if (level) {
      getMatchSummaryRequest(
        {
          url: `${process.env.REACT_APP_SERVER_BASE_URL}/score-elrom/game-summary?level=${level}`,
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
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={classesUsersScores["users-scores"]}>
          <div className={classes.paragraph}>
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
                {matchSummaryData?.improvedLevelAverage?.lastScoreAverage} and
                now it's{" "}
                {matchSummaryData?.improvedLevelAverage?.currentScoreAverage}
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
          </div>
          <h2>The Questions</h2>
          <div className={classesScoresTable.wrapper}>
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
                      {matchSummaryData?.questions?.numberOfFalseQuestions >
                        0 && (
                          <td>
                            {!question.isCorrect &&
                              `The false country was ${question.falseCountryName}`}
                          </td>
                        )}
                      {matchSummaryData?.questions?.numberOfFalseQuestions >
                        0 && (
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
          </div>
          {isMatchSummary && (
            <button
              className={`button-28 ${classes.button}`}
              onClick={toMainPageHandler}
            >
              to main page
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default MatchSummary;
