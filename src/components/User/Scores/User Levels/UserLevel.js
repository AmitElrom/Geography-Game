import React, { useEffect, useState } from "react";
import UserLevelTitle from "./UserLevelTitle";
import UserLevelData from "./UserLevelData";

const UserLevel = (props) => {
  const { checkAll } = props;
  const [isUserLevelDataVisible, setIsUserLevelDataVisible] = useState(false);

  useEffect(() => {
    setIsUserLevelDataVisible(checkAll);
  }, [checkAll]);

  const toggleUserLevelData = () => {
    setIsUserLevelDataVisible((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <div style={{ width: "20%" }}>
      <UserLevelTitle onClick={toggleUserLevelData} titleLevel={props.title} />
      {isUserLevelDataVisible && <UserLevelData {...props} />}
    </div>
  );
};

export default UserLevel;
