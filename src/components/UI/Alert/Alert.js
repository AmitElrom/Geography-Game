import React from "react";
import { useSelector } from "react-redux";

import classes from "./Alert.module.css";

const Alert = () => {
  const { isError, data } = useSelector((state) => state.alert);

  return (
    <div className={`${classes.alert} ${isError ? classes.error : classes.ok}`}>
      {isError
        ? data?.response?.data?.error || data?.message || "Error"
        : data?.message || "Success"}
    </div>
  );
};

export default Alert;
