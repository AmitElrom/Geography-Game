import React from "react";

import ScoresTable from "../Table/ScoresTable";

import classes from './UsersScores.module.css';

const UsersScores = ({ scoresTable }) => {
  return (
    <div className={classes["users-scores"]} >
      <h1>Users' Scores</h1>
      <ScoresTable scoresTable={scoresTable} />
    </div>
  );
};

export default UsersScores;
