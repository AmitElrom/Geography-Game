import React, { useEffect, useState } from "react";
import UserLevelTitle from "./UserLevelTitle";
import UserLevelData from "./UserLevelData";

const UserLevel = (props) => {
  const { checkAll, setCheckLevels } = props;
  const [isUserLevelDataVisible, setIsUserLevelDataVisible] = useState(false);

  useEffect(() => {
    if (checkAll) {
      setIsUserLevelDataVisible(true);
    }
  }, [checkAll]);

  const toggleUserLevelData = () => {
    setIsUserLevelDataVisible((prevValue) => {
      return !prevValue;
    });
    setCheckLevels((prevValue) => {
      return {
        ...prevValue,
        [props.title]: !prevValue[props.title],
      };
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
