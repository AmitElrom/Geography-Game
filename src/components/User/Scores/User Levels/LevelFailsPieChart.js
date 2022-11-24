import React from "react";
import { PieChart, Pie, Tooltip, Label } from "recharts";
import CustomToolTip from "./CustomToolTip";

const LevelFailsPieChart = ({ fails, title }) => {
  const transformedFails = fails.map((fail) => {
    return {
      ...fail,
      numFalseCountries: fail.falseCountries.length,
    };
  });

  const renderLabel = function (entry) {
    return entry.name;
  }

  return (
    <PieChart width={400} height={350}>
      <Pie
        dataKey="numFalseCountries"
        nameKey="countryName"
        isAnimationActive={false}
        data={transformedFails}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label={renderLabel}
      />
      <Tooltip content={<CustomToolTip />} />
    </PieChart>
  );
};

export default LevelFailsPieChart;
