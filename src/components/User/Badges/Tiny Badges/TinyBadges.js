import React from "react";
import TinyBagde from "../Tiny Badage/TinyBagde";

import classes from "../Tiny Badges/TinyBadges.module.css";

const TinyBadges = ({ badges }) => {
  // eslint-disable-next-line array-callback-return
  const tinyBadgesFirstList = badges?.map((badge, index) => {
    if (index < 5) {
      return (
        <TinyBagde
          key={badge.name}
          backgroundColor={badge.backgroundColor}
          index={index}
          name={badge.name}
          hasBadge={badge.hasBadge}
        />
      );
    }
  });

  // eslint-disable-next-line array-callback-return
  const tinyBadgesSecondList = badges?.map((badge, index) => {
    if (index >= 5) {
      return (
        <TinyBagde
          key={badge.name}
          backgroundColor={badge.backgroundColor}
          index={index}
          name={badge.name}
          hasBadge={badge.hasBadge}
        />
      );
    }
  });

  return (
    <div className={classes.badges}>
      <span>{tinyBadgesFirstList}</span>
      <span>{tinyBadgesSecondList}</span>
    </div>
  );
};

export default TinyBadges;
