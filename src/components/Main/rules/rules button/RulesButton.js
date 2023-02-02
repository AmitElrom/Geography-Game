import React from "react";

import classes from "./RulesButton.module.css";

const RulesButton = ({ onClick, isOpen }) => {
  return (
    <button
      className={`button-28 ${classes.button} ${
        isOpen ? classes["button-active"] : undefined
      }`}
      onClick={onClick}
    >
      Rules Of The Game
    </button>
  );
};

export default RulesButton;
