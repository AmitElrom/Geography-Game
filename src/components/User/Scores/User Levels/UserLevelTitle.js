import React, { useEffect, useState } from "react";

import classes from "./UserLevelTitle.module.css";

const UserLevelTitle = ({ titleLevel, onClick, checked }) => {
  const [backgroundColor, setBackgroundColor] = useState("#7e57c2");

  useEffect(() => {
    switch (titleLevel) {
      case "Beginner":
        setBackgroundColor("#824A02");
        break;
      case "Amateur":
        setBackgroundColor("#A77044");
        break;
      case "Medium":
        setBackgroundColor("#D9B033");
        break;
      case "Hard":
        setBackgroundColor("#D7D7D7");
        break;
      case "Expert":
        setBackgroundColor("#FEE101");
        break;
      default:
        break;
    }
  }, [titleLevel]);

  return (
    <div>
      <input
        className={classes.checkbox}
        type="checkbox"
        name={titleLevel}
        checked={checked}
        id={titleLevel}
        onChange={onClick}
      />
      <label
        style={{
          background: `radial-gradient(transparent, 0.5%, ${backgroundColor})`,
        }}
        className={`button-28 ${classes.label} ${
          checked && classes["label-active"]
        }`}
        htmlFor={titleLevel}
      >
        {titleLevel}
      </label>
    </div>
  );
};

export default UserLevelTitle;
