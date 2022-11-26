import React from "react";
import { PieChart, Pie, Tooltip, Label } from "recharts";
import CustomToolTip from "./CustomToolTip";

const LevelFailsPieChart = ({ fails, title }) => {

  const renderLabel = (entry) => {
    return entry.name;
  }

  return (
    <PieChart width={400} height={350}>
      <Pie
        dataKey="numOfFails"
        nameKey="countryName"
        isAnimationActive={false}
        data={fails}
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
        label={renderLabel}
      />
      <Tooltip content={<CustomToolTip />} />
    </PieChart>
  );
};

export default LevelFailsPieChart;
