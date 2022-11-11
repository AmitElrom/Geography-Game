import React, { useEffect, useState } from "react";
import useHttpAxios from "../../../../../hooks/use-http-axios";
import TableHead from "../Table Header/TableHead";
import TableRow from "../Table Row/TableRow";

import classes from "./ScoresTable.module.css";

const ScoresTable = ({ scoresTable }) => {

  const usersWithScoresList = scoresTable.map((user) => {
    return <TableRow key={user.userDetails.userId} {...user} />;
  });

  return (
    <table border={0} cellSpacing={0} className={classes.table}>
      <TableHead />
      <tbody>{usersWithScoresList}</tbody>
    </table>
  );
};

export default ScoresTable;
