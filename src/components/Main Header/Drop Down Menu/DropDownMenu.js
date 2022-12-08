import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import useClickOutside from "../../../hooks/use-click-outside";
import { menuActions } from "../../../store/menu-slice";

import MenuItem from "../Menu Item/MenuItem";

import classes from "./DropDownMenu.module.css";

const menuItems = ["Scores", "Profile", "Badges", "Log Out"];

const DropDownMenu = () => {
  const { pathname } = useLocation();

  const menuRef = useRef();

  useClickOutside(menuRef, menuActions.toggleMenu({ toOpenMenu: false }));

  const menuItemsList = menuItems.map((item) => {
    return <MenuItem key={item}>{item}</MenuItem>;
  });

  return (
    <div ref={menuRef} pathname={pathname} className={classes.dropdown}>
      {menuItemsList}
    </div>
  );
};

export default DropDownMenu;
