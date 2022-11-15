import React from "react";

import classes from "./FormInput.module.css";

const FormInput = ({
  placeholder,
  name,
  onChange,
  onBlur,
  type,
  error,
  value,
}) => {
  return (
    <div className={classes.input}>
      <input
        type={!type ? "text" : type}
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

export default FormInput;
