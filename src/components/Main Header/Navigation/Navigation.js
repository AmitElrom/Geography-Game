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
      <div className={classes["game-name"]}>
        <Link className="button-28" to={isLoggedIn ? "/welcome" : "/sign-in"}>
          Flags Game
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li
            style={{
              paddingBottom: "2rem",
              marginTop: "2rem",
            }}
          >
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
            <li
              style={{
                paddingBottom: "2rem",
                marginTop: "2rem",
              }}
            >
              <span className={classes.username} onClick={toggleMenu}>
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
