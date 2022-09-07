import React from "react";

const PersonalInfoItem = ({ title, info, toUpdate, type }) => {
  return (
    <div>
      {!toUpdate ? (
        <div>
          <span>{title} : &nbsp;</span>
          <span>{info}</span>
        </div>
      ) : (
        <div>
          <input type={!type ? "text" : type} />
        </div>
      )}
    </div>
  );
};

export default PersonalInfoItem;
