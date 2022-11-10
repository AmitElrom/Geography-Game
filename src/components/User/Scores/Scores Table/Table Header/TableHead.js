import React from "react";
import TableHeadCell from "./TableHeadCell";

const tableHeadCells = [
  "Rank",
  "First Name",
  "Last Name",
  "Beginner",
  "Amateur",
  "Medium",
  "Hard",
  "Expert",
];

const TableHead = () => {
  const tableHeadCellsList = (
    <tr>
      {tableHeadCells.map((cell) => {
        return <TableHeadCell key={cell} cellData={cell} />;
      })}
    </tr>
  );

  return <thead>{tableHeadCellsList}</thead>;
};

export default TableHead;
