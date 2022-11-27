import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import useHttpAxios from "../../hooks/use-http-axios";

const MatchSummary = () => {
  const navigate = useNavigate();

  const {
    error,
    isLoading,
    sendRequest: getMatchSummaryRequest,
  } = useHttpAxios();

  let level = sessionStorage.getItem("last-match-level");
  let token = sessionStorage.getItem("token");

  useEffect(() => {
    getMatchSummaryRequest(
      {
        url: `http://localhost:8000/score-elrom/game-summary?level=${level}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      (data) => {
        console.log("match summary", data);
      }
    );
  }, [getMatchSummaryRequest, level, token]);

  const toMainPageHandler = () => {
    navigate("/welcome", { replace: true });
  };

  return (
    <div>
      <button onClick={toMainPageHandler}>to main page</button>
    </div>
  );
};

export default MatchSummary;
