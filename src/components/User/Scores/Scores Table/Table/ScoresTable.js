import React, { useEffect } from "react";
import useHttpAxios from "../../../../../hooks/use-http-axios";

const ScoresTable = () => {
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
        console.log(data);
      }
    );
  }, [getUsersScores]);

  return (
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
};

export default ScoresTable;
