import React from "react";

import classes from "./FormInput.module.css";

const PasswordFormInput = ({
  placeholder,
  name,
  onChange,
  onBlur,
  error,
  value,
}) => {
  return (
    <div className={classes.input}>
      <input
        type="password"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p>{error}</p>
    </div>
  );
};

export default PasswordFormInput;
