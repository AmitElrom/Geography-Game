import React, { useContext, useEffect, useState } from "react";
import authContext from "../../../store/auth-context";

import classes from "./Profile.module.css";
import PersonalInfo from "./Personal Info/PersonalInfo";
import UpdatePersonalInfo from "./Update Personal Info/UpdatePersonalInfo";

const Profile = () => {
  const [toUpdateInfo, setToUpdateInfo] = useState(false);
  const [toUpdatePassword, setToUpdatePassword] = useState(false);
  const [userInfo, setUserInfo] = useState([
    { title: "First Name", info: "" },
    { title: "Last Name", info: "" },
    { title: "Email", info: "" },
  ]);

  const { userData } = useContext(authContext);
  const { fullName, firstName, lastName, email } = userData;

  useEffect(() => {
    setUserInfo([
      { name: "firstName", title: "First Name", info: firstName },
      { name: "lastName", title: "Last Name", info: lastName },
      { name: "email", title: "Email", info: email },
    ]);
  }, [firstName, lastName, email]);

  const updatePersonalInfo = () => {
    setToUpdatePassword(false);
    setToUpdateInfo((prevVal) => !prevVal);
  };

  const updatePassword = () => {
    setToUpdateInfo(false);
    setToUpdatePassword((prevVal) => !prevVal);
  };

  return (
    <div className={classes.profile}>
      <h1>{fullName}</h1>
      {!(toUpdatePassword && !toUpdateInfo) && <h4 className={classes.update} onClick={updatePersonalInfo}>
        Update Personal Information
      </h4>}
      {!(toUpdateInfo && !toUpdatePassword) && <h4 className={classes.update} onClick={updatePassword}>
        Change Password
      </h4>}
      {!toUpdateInfo && !toUpdatePassword && <PersonalInfo userInfo={userInfo} />}
      {toUpdateInfo && <UpdatePersonalInfo userInfo={userInfo} setToUpdateInfo={setToUpdateInfo} />}
    </div>
  );
};

export default Profile;
