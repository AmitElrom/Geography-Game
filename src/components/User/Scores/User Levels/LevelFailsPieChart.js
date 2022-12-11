import React, { Fragment } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

import CustomToolTip from "./CustomToolTip";

import classes from './LevelFailsPieChart.module.css';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const LevelFailsPieChart = ({ fails, title }) => {

  console.log(fails);

  let levelTotalFails = 0;
  fails?.forEach(fail => {
    console.log(fail.numOfFails);
    levelTotalFails += fail.numOfFails;
  })

  const transformedFails = fails?.map(fail => {
    return {
      ...fail,
      levelTotalFails
    }
  })

  return (
    <Fragment>
      <h5>{title} failures - the country flags you got wrong</h5>
      <ResponsiveContainer width={100} height={100} className={classes.piechart}>
        <PieChart width={"100%"} height={"100%"}>
          <Pie
            overflow="hidden"
            dataKey="numOfFails"
            nameKey="countryName"
            isAnimationActive={false}
            data={transformedFails}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          >
            {fails.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            viewBox={{ width: "100%" }}
            wrapperStyle={{
              width: "max-content",
              zIndex: 10,
              position: "fixed",
              // top: "20%",
              // left: "25%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: "var(--nav-height)",
            }}
            content={<CustomToolTip />}
          />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

export default LevelFailsPieChart;
