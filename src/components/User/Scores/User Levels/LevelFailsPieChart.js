import React from "react";
import { Chart } from "react-google-charts";

const LevelFailsPieChart = ({ fails, title }) => {
  const options = {
    legend: "none",
    pieSliceText: "label",
    title: `Countries you failed to answer right on them, at ${title} level`,
    pieStartAngle: 100,
  };

  const transformedFails = fails.map((fail) => {
    return [fail.countryName, fail.falseCountries.length];
  });

  const data = [
    ["Country", "Number of times mistaking this country."],
    ...transformedFails,
  ];

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default LevelFailsPieChart;
