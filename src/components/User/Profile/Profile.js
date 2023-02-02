import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import authContext from "../../../store/auth-context";

import classes from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const {
    userData: { fullName },
  } = useContext(authContext);

  return (
    <div className={classes.profile}>
      <h1 onClick={() => navigate("/profile")}>{fullName}</h1>
      <div className={classes.options}>
        <NavLink
          to="/profile/update-personal-info"
          className={(navLinkObj) =>
            navLinkObj.isActive
              ? `${classes.link} ${classes.active}`
              : classes.link
          }
        >
          <h4>Update Personal Information</h4>
        </NavLink>
        <NavLink
          to="/profile/change-password"
          className={(navLinkObj) =>
            navLinkObj.isActive
              ? `${classes.link} ${classes.active}`
              : classes.link
          }
        >
          <h4>Change Password</h4>
        </NavLink>
        <NavLink
          to="/profile/delete-user"
          className={(navLinkObj) =>
            navLinkObj.isActive
              ? `${classes.link} ${classes.active}`
              : classes.link
          }
        >
          <h4>Delete User</h4>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
