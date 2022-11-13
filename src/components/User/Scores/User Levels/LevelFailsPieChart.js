import React from "react";
import { Chart } from "react-google-charts";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props) => {
  console.log("props", props);
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    countryName,
  } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {/* {`${(percent * 100).toFixed(0)}%`} */}
      {countryName}
    </text>
  );
};

const CustomTooltip = (props) => {
  console.log("props tooltip", props);
  return (
    <div>
      <p className="desc">Anything you want can be displayed here.</p>
    </div>
  );
};

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
        isAnimationActive
        data={transformedFails}
        dataKey="numFalseCountries"
        nameKey="countryName"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
        label={renderCustomizedLabel}
        labelLine={false}
      >
        {transformedFails.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{ backgroundColor: "red" }}
        content={<CustomTooltip />}
      />
    </PieChart>
  );
};

export default LevelFailsPieChart;
