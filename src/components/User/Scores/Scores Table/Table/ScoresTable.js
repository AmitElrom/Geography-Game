import React, { useEffect, useState } from "react";
import useHttpAxios from "../../../../../hooks/use-http-axios";
import TableRow from "../Table Row/TableRow";

import classes from "./ScoresTable.module.css";

const ScoresTable = () => {
  const [usersWithScores, setUsersWithScores] = useState([]);

  const { error, isLoading, sendRequest: getUsersScores } = useHttpAxios();

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    getUsersScores(
      {
        url: "http://localhost:8000/score-elrom",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      (data) => {
        setUsersWithScores(data);
      }
    );
  }, [getUsersScores]);

  const usersWithScoresList = usersWithScores.map((user) => {
    return <TableRow key={user.userDetails.userId} {...user} />;
  });

  const tableHead = {
    rank: "Rank",
    userDetails: {
      firstName: "First Name",
      lastName: "Last Name",
    },
    userScore: {
      beginner: "Beginner",
      amateur: "Amateur",
      medium: "Medium",
      hard: "Hard",
      expert: "Expert",
    },
  };

  return (
    <table border={0} cellSpacing={0} className={classes.table}>
      <thead>
        <TableRow isTableHead={true} {...tableHead} />
      </thead>
      <tbody>{usersWithScoresList}</tbody>
    </table>
  );
};

export default ScoresTable;
