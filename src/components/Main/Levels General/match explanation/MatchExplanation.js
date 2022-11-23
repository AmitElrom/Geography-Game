import React, { useEffect, useState } from "react";

import classes from '../MainLevel.module.css';

const LEVELS_EXPLANATIONS = [
  {
    level: "Beginner",
    explanation:
      "At the Beginner level, you have 10 questions. The flags on this level are the 10 most known country flags and are always the same ten flags. ",
  },
  {
    level: "Amateur",
    explanation:
      "At the Amateur level, you have 20 questions. The flags on this level are chosen randomly from the 70 most known flags.",
  },
  {
    level: "Medium",
    explanation:
      "At the Medium level, you have 20 questions. The flags on this level are chosen randomly from the 120 most known flags. Additionally, on this level, almost in every question, one of the wrong country options will be a country whose flag is similar to the correct country's flag.",
  },
  {
    level: "Hard",
    explanation:
      "At the Hard level, you have 20 questions. The flags on this level are chosen randomly from the 30th most known flag to the 196th most known flag. Additionally, on this level, almost in every question, two of the wrong country options will be countries whose flag is similar to the correct country's flag.",
  },
  {
    level: "Expert",
    explanation:
      "At the Expert level, you have 20 questions. The flags on this level are chosen randomly from the 130th most known flag to the 197th most known flag. Multiple countries and territories are defined at 197 in terms of their flag's identification. Additionally, on this level, almost in every question, two of the wrong country options will be countries whose flag is similar to the correct country's flag.",
  },
];

const MatchExplanation = ({ level }) => {
  const [levelExplanation, setLevelExplanation] = useState({
    level: "",
    explanation: "",
  });

  useEffect(() => {
    const tempLevelExp = LEVELS_EXPLANATIONS.find((exp) => exp.level === level);
    setLevelExplanation(tempLevelExp);
  }, [level]);

  return (
    <div className={classes["match-explanation"]} >
      <h3>{levelExplanation.level}</h3>
      <p>{levelExplanation.explanation}</p>
    </div>
  );
};

export default MatchExplanation;
