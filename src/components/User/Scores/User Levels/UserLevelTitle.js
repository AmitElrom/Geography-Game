import React, { useEffect, useState } from "react";

import classes from "./UserLevelTitle.module.css";

const UserLevelTitle = ({ titleLevel, onClick, checked }) => {
  const [backgroundColor, setBackgroundColor] = useState("#7e57c2");

  useEffect(() => {
    setBackgroundColor(`--${titleLevel.toLowerCase()}`)
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
          background: `radial-gradient(transparent, 0.5%, var(${backgroundColor}))`,
        }}
        className={`button-28 ${classes.label} ${checked && classes["label-active"]
          }`}
        htmlFor={titleLevel}
      >
        {titleLevel}
      </label>
    </div>
  );
};

export default UserLevelTitle;
