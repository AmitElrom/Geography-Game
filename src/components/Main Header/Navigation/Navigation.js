import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

import authContext from "../../../store/auth-context";
import { countriesActions } from "../../../store/countries-slice";
import { useDispatch } from "react-redux";
import DropDownMenu from "../Drop Down Menu/DropDownMenu";

const Navigation = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, userData } = useContext(authContext);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  const toAboutPageHandler = () => {
    dispatch(countriesActions.nullify());
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logoutHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes["game-name"]}>
        <Link to={isLoggedIn ? "/welcome" : "/sign-in"}>Flags Game</Link>
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
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <span className={classes.username}>{user && user?.fullName}</span>
              {isMenuOpen && <DropDownMenu onLogout={logoutHandler} />}
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
