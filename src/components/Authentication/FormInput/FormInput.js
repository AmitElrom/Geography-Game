import React, { useState, useEffect } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";

import classes from "./FormInput.module.css";

const FormInput = ({
  placeholder,
  name,
  onChange,
  onBlur,
  error,
  value,
  title,
  className,
  style
}) => {
  const [typeState, setTypeState] = useState("");
  const [isPasswordVisibile, setIsPasswordVisibile] = useState(false);

  useEffect(() => {
    console.log(name, isPasswordVisibile);
    if (
      name === "email" ||
      name === "firstName" ||
      name === "lastName" ||
      (name === "password" && isPasswordVisibile) ||
      (name === "password1" && isPasswordVisibile) ||
      (name === "password2" && isPasswordVisibile) ||
      (name === "newPassword" && isPasswordVisibile) ||
      (name === "confirmedPassword" && isPasswordVisibile) ||
      (name === "code" && isPasswordVisibile)
    ) {
      setTypeState("text");
    }
    if (
      (name === "password" && !isPasswordVisibile) ||
      (name === "password1" && !isPasswordVisibile) ||
      (name === "password2" && !isPasswordVisibile) ||
      (name === "newPassword" && !isPasswordVisibile) ||
      (name === "confirmedPassword" && !isPasswordVisibile) ||
      (name === "code" && !isPasswordVisibile)
    ) {
      setTypeState("password");
    }
  }, [name, isPasswordVisibile]);

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    e.target.blur()
    setIsPasswordVisibile((prevValue) => !prevValue);
  };

  return (
    <div className="outer-div">
      {title && <p className={classes.title}>{title}</p>}
      <div className={classes["input-element-wrapper"]}>
        <input
          className={`${classes["input-field"]} ${className} ${error && classes["input-field-error"]}`}
          autoComplete={(name === "password" ||
            name === "password1" ||
            name === "password2" ||
            name === "newPassword" ||
            name === "confirmedPassword" ||
            name === "code") ? "off" : undefined}
          type={typeState}
          style={style}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <span
          onClick={togglePasswordVisibility}
          className={`${classes.span} ${(name === "password" ||
            name === "password1" ||
            name === "password2" ||
            name === "newPassword" ||
            name === "confirmedPassword" ||
            name === "code") &&
            classes["password-icon"]
            }`}
        >
          {isPasswordVisibile &&
            (name === "password" ||
              name === "password1" ||
              name === "password2" ||
              name === "newPassword" ||
              name === "confirmedPassword" ||
              name === "code") && <BsEye />}
          {!isPasswordVisibile &&
            (name === "password" ||
              name === "password1" ||
              name === "password2" ||
              name === "newPassword" ||
              name === "confirmedPassword" ||
              name === "code") && <BsEyeSlash />}
          {name === "email" && <FiMail />}
          {(name === "firstName" || name === "lastName") && <FiUser />}
        </span>
      </div>
      <p className={`${classes.error} ${error && classes["error-true"]}`}>
        {error}
      </p>
    </div>
  );
};

export default FormInput;
