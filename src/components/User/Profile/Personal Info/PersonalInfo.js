import React from "react";

import PersonalInfoItem from "../Personal Info Item/PersonalInfoItem";

import profileImg from "../../../../imgs/Resume-bro.png";

const PersonalInfo = ({ userInfo }) => {
  const PersonalInfoItems = userInfo.map((info) => {
    return (
      <PersonalInfoItem
        key={info.title}
        title={info.title}
        info={info.info}
        name={info.name}
      />
    );
  });
  return (
    <div>
      <div>{PersonalInfoItems}</div>
      <img src={profileImg} alt="Resume bro" className="img-reset-password" />
    </div>
  );
};

export default PersonalInfo;
