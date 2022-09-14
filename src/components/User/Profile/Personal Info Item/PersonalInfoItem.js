import React from "react";

const PersonalInfoItem = ({ title, info }) => {
  return (
    <div>
      <span>{title} : &nbsp;</span>
      <span>{info}</span>
    </div>
  );
};

export default PersonalInfoItem;
