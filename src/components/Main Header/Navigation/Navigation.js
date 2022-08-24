import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

import { countriesActions } from "../../../store/countries-slice";
import { authenticationActions } from "../../../store/authentication-slice";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => state.auth)

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')))
  }, [])

  const toAboutPageHandler = () => {
    dispatch(countriesActions.nullify());
  };

  const logoutAppHandler = () => {
    dispatch(authenticationActions.logoutHandler())
  }

  return (
    <header className={classes.header}>
      <div>
        <Link to={isLoggedIn ? "/welcome" : "/sign-in"}>Flags Game</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
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
          {isLoggedIn && <li>
            <NavLink to="/welcome">{user && user?.fullName}</NavLink>
          </li>}
          {isLoggedIn && <li>
            <NavLink to="/sign-in" onClick={logoutAppHandler} >Log Out</NavLink>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
