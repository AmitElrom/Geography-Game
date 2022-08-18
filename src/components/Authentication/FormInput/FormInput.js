import React from "react";

import classes from "./FormInput.module.css";

const FormInput = ({ label, placeholder, name, onChange, type, error }) => {
  return (
    <div className={classes.input}>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <p>{error}</p>
    </div>
  );
};

export default FormInput;
