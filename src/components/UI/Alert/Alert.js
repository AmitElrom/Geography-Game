import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

import classes from "./Alert.module.css";

const Alert = () => {
  const { isError, data } = useSelector((state) => state.alert);

  let alertElement = document.getElementById("alert");

  return (
    createPortal(< div className={`${classes.alert} ${isError ? classes.error : classes.ok}`
    }>
      {
        isError
          ? data?.response?.data?.error || data?.message || "Error"
          : data?.message || "Success"}
    </div >, alertElement)
  );
};

export default Alert;
