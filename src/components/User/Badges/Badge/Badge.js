import React, { useState } from "react";
import { BiLock } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";

import BadgeToolTip from "./Badge Tooltip/BadgeToolTip";

import classes from "./Badge.module.css";

const Badge = ({
  img,
  name,
  headline,
  paragraph,
  hasBadge,
  date,
  duration,
}) => {
  const [isToolTipVisible, setIsToolTipVisible] = useState(false);
  const [imgScaled, setImgScaled] = useState(false);

  const mouseEnterBadgeImgHandler = () => {
    setIsToolTipVisible(true);
  };

  const mouseLeaveBadgeImgHandler = () => {
    setIsToolTipVisible(false);
  };

  const mouseEnterBadgeToolTipHandler = () => {
    setIsToolTipVisible(true);
    setImgScaled(true);
  };

  const mouseLeaveBadgeToolTipHandler = () => {
    setIsToolTipVisible(false);
    setImgScaled(false);
  };

  return (
    <div className={classes.badge}>
      <h3>
        {headline}{" "}
        <span>
          {hasBadge ? <GrStatusGood color="green" /> : <BiLock color="grey" />}
        </span>
      </h3>
      {isToolTipVisible && hasBadge && (
        <BadgeToolTip
          onMouseEnter={mouseEnterBadgeToolTipHandler}
          onMouseLeave={mouseLeaveBadgeToolTipHandler}
          date={date}
          duration={duration}
        />
      )}
      <img
        className={`${hasBadge && classes["badge-img"]} ${imgScaled && hasBadge && classes["badge-img-scale"]
          }`}
        width={120}
        height={120}
        src={img}
        alt={name}
        onMouseEnter={mouseEnterBadgeImgHandler}
        onMouseLeave={mouseLeaveBadgeImgHandler}
      />
      <p>{paragraph}</p>
    </div>
  );
};

export default Badge;
