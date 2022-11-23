import React, { useEffect, useState } from "react";

import expert_and_timer_badge_img from "../../../../imgs/badges/expert_and_timer.png";
import expert_and_timer__disabled_badge_img from "../../../../imgs/badges/expert_and_timer_disabled.png";
import Badge from "../Badge/Badge";

const BADGES = [
  {
    name: "expert_and_timer_badge",
    headline: "Expert and Time Badge",
    paragraph:
      "At Expert Level - Answered correctly all questions and did it in less than 1 minute and 30 seconds",
    imgHaveBadge: expert_and_timer_badge_img,
    imgDontHaveBadge: expert_and_timer__disabled_badge_img,
  },
];

const BADGES_API = [{ name: "expert_and_timer_badge", hasBadge: true }];

const Badges = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const transformedBadges = BADGES.map((badge) => {
      let apiBadge = BADGES_API.find(
        (apiBadge) => apiBadge.name === badge.name
      );
      return {
        name: badge.name,
        img: apiBadge.hasBadge ? badge.imgHaveBadge : badge.imgDontHaveBadge,
        headline: badge.headline,
        paragraph: badge.paragraph,
        hasBadge: apiBadge.hasBadge,
      };
    });
    setBadges(transformedBadges);
  }, []);

  const badgesList = badges.map((badge) => {
    return <Badge key={badge.name} {...badge} />;
  });

  return <div>{badgesList}</div>;
};

export default Badges;
