import { useState } from "react";

import classes from "./ChangePasswordItem.module.css";

import hiddenEye from "../../../../imgs/hidden_eye.png";
import shownEye from "../../../../imgs/shown_eye.png";

const ChangePaswordItem = ({ title, error, value, name, onChange, onBlur }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePassword = () => {
    setIsPasswordShown((prevVal) => !prevVal);
  };

  return (
    <div>
      <input
        type={isPasswordShown ? "text" : "password"}
        placeholder={title}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <img
        className={classes.icon}
        src={isPasswordShown ? shownEye : hiddenEye}
        onClick={togglePassword}
        style={{ width: "15px", height: "15px", marginLeft: "1%" }}
        alt={isPasswordShown ? "shown_eye" : "hidden_eye"}
      />
      <p>{error}</p>
    </div>
  );
};

export default ChangePaswordItem;
