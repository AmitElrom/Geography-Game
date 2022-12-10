import React from "react";

import TableHead from "../Table Header/TableHead";
import TableRow from "../Table Row/TableRow";

import classes from "./ScoresTable.module.css";

const ScoresTable = ({ scoresTable }) => {
  const usersWithScoresList = scoresTable.map((user) => {
    return <TableRow key={user.userDetails.userId} {...user} />;
  });

  return (
    <div className={classes.wrapper}>
      <table border={0} cellSpacing={0} className={classes.table}>
        <TableHead />
        <tbody>{usersWithScoresList}</tbody>
      </table>
    </div>
  );
};

export default ScoresTable;
