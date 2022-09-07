import React, { useContext, useEffect, useState } from "react";
import authContext from "../../../store/auth-context";

import PersonalInfoItem from "./Personal Info Item/PersonalInfoItem";

const Profile = () => {
  const [toUpdateInfo, setToUpdateInfo] = useState(false);
  const [userInfo, setUserInfo] = useState([
    { title: "First Name", info: "" },
    { title: "Last Name", info: "" },
    { title: "Email", info: "" },
  ]);

  const { userData } = useContext(authContext);
  const { fullName, firstName, lastName, email } = userData;

  useEffect(() => {
    setUserInfo([
      { title: "First Name", info: firstName },
      { title: "Last Name", info: lastName },
      { title: "Email", info: email },
    ]);
  }, [firstName, lastName, email]);

  const updatePersonalInfo = () => {
    setToUpdateInfo((prevVal) => !prevVal);
  };

  const PersonalInfoItems = userInfo.map((info) => {
    console.log(info);
    return (
      <PersonalInfoItem
        key={info.title}
        title={info.title}
        info={info.info}
        toUpdate={toUpdateInfo}
      />
    );
  });

  return (
    <div>
      <h1>{fullName}</h1>
      <h4 onClick={updatePersonalInfo}>Update Personal Information</h4>
      <div>{PersonalInfoItems}</div>
    </div>
  );
};

export default Profile;
