import React from "react";
import "./TableDataCell.css";

const TableDataCell = ({ cellData, className }) => {
  return <td className={className}>{cellData}</td>;
};

export default TableDataCell;
