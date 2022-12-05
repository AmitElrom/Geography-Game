import React from "react";

import classes from './RulesButton.module.css';

const RulesButton = ({ onClick }) => {
  return <button className={`button-28 ${classes.button}`} onClick={onClick}>Rules Of The Game</button>;
};

export default RulesButton;
