import React, { useEffect, useState } from "react";

import TableHead from "../Table Header/TableHead";
import TableRow from "../Table Row/TableRow";

import classes from "./ScoresTable.module.css";

const ScoresTable = ({ scoresTable }) => {
  const [usersWithScores, setUsersWithScores] = useState([]);
  const [usersAmount, setUsersAmount] = useState({
    start: 0,
    end: 10,
    usersLeft: 0,
  });

  useEffect(() => {
    setUsersWithScores(scoresTable);
    setUsersAmount((prevAmount) => {
      return {
        ...prevAmount,
        usersLeft: scoresTable.length - 10,
      };
    });
  }, [scoresTable]);

  const showMoreUsers = () => {
    setUsersAmount((prevAmount) => {
      if (prevAmount.usersLeft > 0 && prevAmount.usersLeft < 10) {
        return {
          ...prevAmount,
          end: prevAmount.end + prevAmount.usersLeft,
          usersLeft: 0,
        };
      } else if (prevAmount.usersLeft >= 10) {
        return {
          ...prevAmount,
          end: prevAmount.end + 10,
          usersLeft: prevAmount.usersLeft - 10,
        };
      }
    });
  };

  const usersWithScoresList = usersWithScores
    ?.slice(usersAmount.start, usersAmount.end)
    .map((user) => {
      return <TableRow key={user.userDetails.userId} {...user} />;
    });


  return (
    <div className={classes.wrapper}>
      <table border={0} cellSpacing={0} className={classes.table}>
        <TableHead />
        <tbody>{usersWithScoresList}</tbody>
      </table>
      {usersAmount.usersLeft > 0 && (
        <button
          className={`button-28 ${classes.button}`}
          onClick={showMoreUsers}
        >
          show more users
        </button>
      )}
    </div>
  );
};

export default ScoresTable;
