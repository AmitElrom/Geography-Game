import React, { useEffect, useState } from "react";
import UserLevel from "./UserLevel";

import { areAllFieldsEqual } from "../../../../utils/utils-validity";

const UserLevels = ({ userLevelsData }) => {
  const [checkAll, setCheckAll] = useState(false);
  const [checkLevels, setCheckLevels] = useState({
    Beginner: false,
    Amateur: false,
    Medium: false,
    Hard: false,
    Expert: false,
  });

  useEffect(() => {
    console.log(checkLevels);
    let isAllFieldsEqual = areAllFieldsEqual(checkLevels);
    if (isAllFieldsEqual && checkLevels.Beginner) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [checkLevels]);

  const toggleCheckAll = (e) => {
    setCheckAll(e.target.checked);
    if (e.target.checked) {
      setCheckLevels((prevVal) => {
        return {
          ...prevVal,
          Beginner: true,
          Amateur: true,
          Medium: true,
          Hard: true,
          Expert: true,
        };
      });
    }
  };

  const userLevelsDataList = Object.values(userLevelsData).map((level) => {
    return (
      <UserLevel
        key={level.id}
        {...level}
        checkAll={checkAll}
        setCheckLevels={setCheckLevels}
      />
    );
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <input type="checkbox" id="check-all" onChange={toggleCheckAll} />
        <label htmlFor="check-all">Show All</label>
      </div>
      {userLevelsDataList}
    </div>
  );
};

export default UserLevels;
