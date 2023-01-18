import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useHttpAxios from "../../../hooks/use-http-axios";

import UsersScores from "./Scores Table/Scores/UsersScores";
import UserLevels from "./User Levels/UserLevels";
import MatchSummary from "./Match Summary/MatchSummary";
import Spinner from "../../UI/Spinner/Spinner";

import { alertActions } from "../../../store/alert-slice";

const Scores = () => {
  const dispatch = useDispatch();

  let level = sessionStorage.getItem("last-match-level");

  const [usersWithScores, setUsersWithScores] = useState([]);
  const [userLevelsData, setUserLevelsData] = useState([]);

  const { error, isLoading, sendRequest: getUsersScores } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    getUsersScores(
      {
        url: `${process.env.REACT_APP_SERVER_BASE_URL}/score-elrom`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      (data) => {
        setUsersWithScores(data);
        const theUser = data.find((user) => user.theUser);
        setUserLevelsData(Object.values(theUser.userLevelsData));
      }
    );
  }, [getUsersScores]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <UserLevels
            userLevelsData={userLevelsData}
            setUserLevelsData={setUserLevelsData}
          />
          {level && <MatchSummary />}
          <UsersScores scoresTable={usersWithScores} />
        </div>
      )}
    </Fragment>
  );
};

export default Scores;
