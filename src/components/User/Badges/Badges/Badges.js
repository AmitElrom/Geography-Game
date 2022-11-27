import React, { useEffect, useState } from "react";

import useHttpAxios from '../../../../hooks/use-http-axios';

import Badge from "../Badge/Badge";

import beginner_badge_img from "../../../../imgs/badges/beginner.png";
import beginner_disabled_badge_img from "../../../../imgs/badges/beginner_disabled.png";
import amateur_badge_img from "../../../../imgs/badges/amateur.png";
import amateur_disabled_badge_img from "../../../../imgs/badges/amateur_disabled.png";
import medium_badge_img from "../../../../imgs/badges/medium.png";
import medium_disabled_badge_img from "../../../../imgs/badges/medium_disabled.png";
import hard_badge_img from "../../../../imgs/badges/hard.png";
import hard_disabled_badge_img from "../../../../imgs/badges/hard_disabled.png";
import expert_badge_img from "../../../../imgs/badges/expert.png";
import expert_disabled_badge_img from "../../../../imgs/badges/expert_disabled.png";

import expert_and_timer_badge_img from "../../../../imgs/badges/expert_and_timer.png";
import expert_and_timer__disabled_badge_img from "../../../../imgs/badges/expert_and_timer_disabled.png";
import hard_and_timer_badge_img from "../../../../imgs/badges/hard_and_timer.png";
import hard_and_timer__disabled_badge_img from "../../../../imgs/badges/hard_and_timer_disabled.png";
import medium_and_timer_badge_img from "../../../../imgs/badges/medium_and_timer.png";
import medium_and_timer__disabled_badge_img from "../../../../imgs/badges/medium_and_timer_disabled.png";
import amateur_and_timer_badge_img from "../../../../imgs/badges/amateur_and_timer.png";
import amateur_and_timer__disabled_badge_img from "../../../../imgs/badges/amateur_and_timer_disabled.png";
import beginner_and_timer_badge_img from "../../../../imgs/badges/beginner_and_timer.png";
import beginner_and_timer__disabled_badge_img from "../../../../imgs/badges/beginner_and_timer_disabled.png";

import classes from "./Badges.module.css";

const BADGES = [
  {
    name: "expert_badge",
    headline: "Expert Badge",
    paragraph: "At Expert Level - Answered correctly all questions",
    imgHaveBadge: expert_badge_img,
    imgDontHaveBadge: expert_disabled_badge_img,
  },
  {
    name: "hard_badge",
    headline: "Hard Badge",
    paragraph: "At Hard Level - Answered correctly all questions",
    imgHaveBadge: hard_badge_img,
    imgDontHaveBadge: hard_disabled_badge_img,
  },
  {
    name: "medium_badge",
    headline: "Medium Badge",
    paragraph: "At Medium Level - Answered correctly all questions",
    imgHaveBadge: medium_badge_img,
    imgDontHaveBadge: medium_disabled_badge_img,
  },
  {
    name: "amateur_badge",
    headline: "Amateur Badge",
    paragraph: "At Amateur Level - Answered correctly all questions",
    imgHaveBadge: amateur_badge_img,
    imgDontHaveBadge: amateur_disabled_badge_img,
  },
  {
    name: "beginner_badge",
    headline: "Beginner Badge",
    paragraph: "At Beginner Level - Answered correctly all questions",
    imgHaveBadge: beginner_badge_img,
    imgDontHaveBadge: beginner_disabled_badge_img,
  },
  {
    name: "expert_and_timer_badge",
    headline: "Expert and Time Badge",
    paragraph:
      "At Expert Level - Answered correctly all questions and did it in less than 1 minute and 30 seconds",
    imgHaveBadge: expert_and_timer_badge_img,
    imgDontHaveBadge: expert_and_timer__disabled_badge_img,
  },
  {
    name: "hard_and_timer_badge",
    headline: "Hard and Time Badge",
    paragraph:
      "At Hard Level - Answered correctly all questions and did it in less than 1 minute and 20 seconds",
    imgHaveBadge: hard_and_timer_badge_img,
    imgDontHaveBadge: hard_and_timer__disabled_badge_img,
  },
  {
    name: "medium_and_timer_badge",
    headline: "Medium and Time Badge",
    paragraph:
      "At Medium Level - Answered correctly all questions and did it in less than 1 minute and 10 seconds",
    imgHaveBadge: medium_and_timer_badge_img,
    imgDontHaveBadge: medium_and_timer__disabled_badge_img,
  },
  {
    name: "amateur_and_timer_badge",
    headline: "Amateur and Time Badge",
    paragraph:
      "At Amateur Level - Answered correctly all questions and did it in less than 1 minute and 5 seconds",
    imgHaveBadge: amateur_and_timer_badge_img,
    imgDontHaveBadge: amateur_and_timer__disabled_badge_img,
  },
  {
    name: "beginner_and_timer_badge",
    headline: "Beginner and Time Badge",
    paragraph:
      "At Beginner Level - Answered correctly all questions and did it in less than 45 seconds",
    imgHaveBadge: beginner_and_timer_badge_img,
    imgDontHaveBadge: beginner_and_timer__disabled_badge_img,
  },
];

const BADGES_API = [
  { name: "expert_badge", hasBadge: true },
  { name: "hard_badge", hasBadge: true },
  { name: "medium_badge", hasBadge: true },
  { name: "amateur_badge", hasBadge: true },
  { name: "beginner_badge", hasBadge: true },
  { name: "expert_and_timer_badge", hasBadge: true },
  { name: "hard_and_timer_badge", hasBadge: true },
  { name: "medium_and_timer_badge", hasBadge: true },
  { name: "amateur_and_timer_badge", hasBadge: true },
  { name: "beginner_and_timer_badge", hasBadge: true },
];

const Badges = () => {
  const [badges, setBadges] = useState([]);

  const { error, isLoading, sendRequest: getUserBadges } = useHttpAxios();

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    getUserBadges({
      method: "GET",
      url: "http://localhost:8000/badges-elrom",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }, (data) => {
      const transformedBadges = BADGES.map((badge) => {
        let apiBadge = data.find(badgeAPI => badgeAPI.name === badge.name);
        return {
          img: apiBadge.hasBadge ? badge.imgHaveBadge : badge.imgDontHaveBadge,
          headline: badge.headline,
          paragraph: badge.paragraph,
          ...apiBadge
        };
      });
      setBadges(transformedBadges);
    })
  }, [getUserBadges]);

  const badgesList = badges.map((badge) => {
    return <Badge key={badge.name} {...badge} />;
  });

  return <div className={classes.badges}>{badgesList}</div>;
};

export default Badges;
