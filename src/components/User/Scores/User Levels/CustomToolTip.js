import React from "react";

import classes from "./CustomToolTip.module.css";

const CustomToolTip = ({ active, payload, label }) => {
  console.log(active, payload, label);

  if (active && payload && payload.length) {
    const failData = payload[0].payload;
    const { countryName, countryFlag, falseCountries } = failData;
    return (
      <div className={classes.tooltip}>
        <h4>
          {`${countryName} - ${payload[0].value} total fails`}{" "}
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
