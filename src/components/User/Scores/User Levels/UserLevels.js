import React, { useState } from "react";
import UserLevel from "./UserLevel";

const UserLevels = ({ userLevelsData }) => {
  const [checkAll, setCheckAll] = useState(false);

  const toggleCheckAll = (e) => {
    setCheckAll(e.target.checked);
  };

  const userLevelsDataList = Object.values(userLevelsData).map((level) => {
    return <UserLevel key={level.id} {...level} checkAll={checkAll} />;
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
