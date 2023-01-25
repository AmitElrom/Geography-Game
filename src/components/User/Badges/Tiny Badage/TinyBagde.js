import React from "react";
import { Button } from "react-scroll";

import classes from "./TinyBadge.module.css";

const TinyBagde = ({ size = 30, hasBadge, name, backgroundColor, index }) => {
  return (
    <Button
      type="button"
      to={name}
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      className={classes.badge}
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderColor: hasBadge ? "var(--green)" : "var(--red)",
      }}
      value={index + 1}
    />
  );
};

export default TinyBagde;
