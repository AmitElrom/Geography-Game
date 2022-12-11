import React from "react";

import classes from "./TinyBadge.module.css";

const TinyBagde = ({ size = 3, hasBadge }) => {
  return (
    <button className={classes.badge} style={{ width: size, height: size }}>
      TinyBagde
    </button>
  );
};

export default TinyBagde;
