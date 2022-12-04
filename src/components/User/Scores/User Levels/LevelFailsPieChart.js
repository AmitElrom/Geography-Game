import React, { Fragment } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import CustomToolTip from "./CustomToolTip";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const LevelFailsPieChart = ({ fails, title }) => {

  const renderLabel = (entry) => {
    return (entry.percent * 100) % 10 === 0
      ? `${(entry.percent * 100).toFixed(0)}%`
      : `${(entry.percent * 100).toFixed(2)}%`;
  };

  return (
    <Fragment>
      <h5>{title} failures - the country flags you got wrong</h5>
      <PieChart width={250} height={250}>
        <Pie
          overflow="hidden"
          dataKey="numOfFails"
          nameKey="countryName"
          isAnimationActive={false}
          data={fails}
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          label={renderLabel}
        >
          {fails.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          wrapperStyle={{
            width: "max-content",
            zIndex: 10,
            position: "fixed",
            top: "20%",
            left: "25%",
          }}
          content={<CustomToolTip />}
        />
      </PieChart>
    </Fragment>
  );
};

export default LevelFailsPieChart;
