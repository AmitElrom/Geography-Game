import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

      <LazyLoadImage
        src={profileImg}
        placeholderSrc={profileImg}
        effect="blur"
        alt="Resume bro"
        className="img-reset-password"
      />
    </div>
  );
};

export default PersonalInfo;
