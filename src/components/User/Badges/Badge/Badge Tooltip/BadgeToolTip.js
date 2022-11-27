import React from "react";

import classes from "./BadgeToolTip.module.css";

const BadgeToolTip = ({ date, duration, onMouseEnter, onMouseLeave }) => {
  return (
    <p
      className={classes.tooltip}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className={classes["date-p"]}>You earned the badge on {date}</p>
      {duration && (
        <p className={classes["duration-p"]}>
          The game took you only{" "}
          {duration.hours !== 0 && `${duration.hours} hours, `}
          {duration.minute !== 0 && `${duration.minutes} minutes, `}
          {duration.seconds !== 0 && `${duration.seconds} seconds and `}
          {duration.milliseconds !== 0 &&
            `${duration.milliseconds} milliseconds.`}
        </p>
      )}
    </p>
  );
};

export default BadgeToolTip;
