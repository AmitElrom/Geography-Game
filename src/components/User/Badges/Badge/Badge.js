import React from "react";
import { BiLock } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";

import classes from "./Badge.module.css";

const Badge = ({ img, name, headline, paragraph, hasBadge }) => {
  return (
    <div className={classes.badge}>
      <h3>
        {headline}{" "}
        <span style={{ color: "green" }}>
          {hasBadge ? <GrStatusGood /> : <BiLock color="grey" />}
        </span>
      </h3>
      <img
        className={hasBadge && classes["badge-img"]}
        width={120}
        height={120}
        src={img}
        alt={name}
      />
      <p>{paragraph}</p>
    </div>
  );
};

export default Badge;
