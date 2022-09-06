import React from "react";

import MenuItem from "../Menu Item/MenuItem";

import classes from "./DropDownMenu.module.css";

const menuItems = ["Scores", "Profile", "Badges", "Log Out"];

const DropDownMenu = ({ onLogout }) => {
  const menuItemsList = menuItems.map((item) => {
    return (
      <MenuItem key={item} onLogout={onLogout}>
        {item}
      </MenuItem>
    );
  });

  return <div className={classes.dropdown}>{menuItemsList}</div>;
};

export default DropDownMenu;
