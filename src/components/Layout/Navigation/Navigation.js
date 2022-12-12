import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

import authContext from "../../../store/auth-context";
import { countriesActions } from "../../../store/countries-slice";
import { menuActions } from "../../../store/menu-slice";

const Navigation = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const { isLoggedIn, userData } = useContext(authContext);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  const toAboutPageHandler = () => {
    dispatch(countriesActions.nullify());
  };

  const toggleMenu = () => {
    dispatch(menuActions.toggleMenu());
  };

  return (
    <header className={classes.header}>
      <div className={`${classes["game-name"]} ${classes.responsive}`}>
        <Link className="button-28" to={isLoggedIn ? "/welcome" : "/sign-in"}>
          <span className={classes["game-name-span"]}>Flags </span>
          <span className={classes["game-name-span"]}>Game</span>
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li className={classes.responsive}>
            <NavLink
              to="/about"
              onClick={toAboutPageHandler}
              className={(navLinkObj) =>
                navLinkObj.isActive ? classes.active : ""
              }
            >
              About
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={classes.responsive}>
              <span
                id="username"
                className={`${classes.username} ${classes.responsive}`}
                onClick={toggleMenu}
              >
                {user && user?.fullName}
              </span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
