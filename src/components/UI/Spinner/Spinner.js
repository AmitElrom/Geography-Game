import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

const Spinner = ({
  color = "var(--blue)",
  loading,
  cssOverride = override,
  size = 80,
}) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={cssOverride}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
