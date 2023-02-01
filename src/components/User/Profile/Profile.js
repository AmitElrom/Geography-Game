import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import authContext from "../../../store/auth-context";

import classes from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const {
    userData: { fullName },
  } = useContext(authContext);

  const navigateHandler = (e) => {
    navigate(`/profile${e.target.id}`);
  };

  return (
    <div className={classes.profile}>
      <h1 onClick={navigateHandler}>{fullName}</h1>
      <div className={classes.options}>
        <h4 onClick={navigateHandler} id="/update-personal-info">
          Update Personal Information
        </h4>
        <h4 onClick={navigateHandler} id="/change-password">
          Change Password
        </h4>
        <h4 onClick={navigateHandler} id="/reset-score">
          Reset Score
        </h4>
        <h4 onClick={navigateHandler} id="/delete-user">
          Delete User
        </h4>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
