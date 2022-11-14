import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const LevelFailsPieChart = ({ fails, title }) => {
  const transformedFails = fails.map((fail) => {
    return {
      countryName: fail.countryName,
      numFalseCountries: fail.falseCountries.length,
    };
  });

  return (
    <PieChart width={250} height={250}>
      <Pie
        dataKey="numFalseCountries"
        nameKey="countryName"
        isAnimationActive={false}
        data={transformedFails}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default LevelFailsPieChart;
