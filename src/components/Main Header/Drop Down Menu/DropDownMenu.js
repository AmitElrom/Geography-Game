import React from "react";

import MenuItem from "../Menu Item/MenuItem";

import classes from "./DropDownMenu.module.css";

const menuItems = [
  { name: "Scores", path: "scores" },
  { name: "Profile", path: "profile" },
  { name: "Badges", path: "badges" },
  { name: "Log Out", path: "sign-in" },
];

const DropDownMenu = () => {
  const menuItemsList = menuItems.map((item) => {
    return (
      <MenuItem key={item.name} menuItem={{ ...item }}>
        {item.name}
      </MenuItem>
    );
  });

  return <ul className={classes.dropdown}>{menuItemsList}</ul>;
};

export default DropDownMenu;
