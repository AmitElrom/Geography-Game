import React from "react";

import classes from "./CustomToolTip.module.css";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const failData = payload[0].payload;
    const { countryName, countryFlag, falseCountries, levelTotalFails } = failData;
    return (
      <div className={classes.tooltip}>
        <h4>
          {`${countryName} - ${((levelTotalFails / payload[0].value) * 100) % 10 === 0
            ? `${((levelTotalFails / payload[0].value)).toFixed(0)}%`
            : `${((levelTotalFails / payload[0].value)).toFixed(2)}%`} of total fails - ${payload[0].value} fails`}{" "}
          <img
            className={
              `${classes["country-img"]} ${classes["flag-img"]}`}
            src={countryFlag}
            alt={`${countryName} flag`}
            width={40}
          />
        </h4>
        <table border={1}>
          <thead>
            <tr  >
              <th>Country name of the flag you failed with</th>
              <th>Number of fails with this flag</th>
              <th>Country flag</th>
            </tr>
          </thead>
          <tbody>
            {falseCountries?.map((falseCountry) => {
              return (
                <tr key={falseCountry.countryId} className={classes.tr} >
                  <td>{falseCountry.countryName}</td>
                  <td>{falseCountry.numOfFails}</td>
                  <td>
                    <img
                      src={falseCountry.countryFlag}
                      alt={`${falseCountry.countryName} flag`}
                      width={40}
                      className={classes["flag-img"]}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default CustomToolTip;
