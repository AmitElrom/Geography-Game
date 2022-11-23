import { useState } from "react";
import { useDispatch } from "react-redux";

import Level from "../../UI/Difficulty Level/DifficultyLevel";

import classes from "./Levels.module.css";

import { countriesActions } from "../../../store/countries-slice";

const Levels = () => {
  const [levelsData, setLevelsData] = useState([
    { id: 1, name: "Beginner", isClicked: false },
    { id: 2, name: "Amateur", isClicked: false },
    { id: 3, name: "Medium", isClicked: false },
    { id: 4, name: "Hard", isClicked: false },
    { id: 5, name: "Expert", isClicked: false },
  ]);

  const dispatch = useDispatch();

  const clickLevelHandler = (levelName) => {
    setLevelsData((prevLevels) => {
      const mappedLevels = prevLevels.map((level) => {
        if (level.name === levelName) {
          return { ...level, isClicked: true };
        } else {
          return { ...level, isClicked: false };
        }
      });
      return mappedLevels;
    });

    dispatch(countriesActions.startPlaying(levelName));
  };

  const mouseEnteredLevelHandler = (levelName) => {
    dispatch(countriesActions.setMatchExplanation(levelName));
  };

  const mouseLeftLevelHandler = () => {
    dispatch(countriesActions.setMatchExplanation(null));
  };

  const levelsList = levelsData.map((level) => {
    return (
      <Level
        className={level.isClicked ? classes["level-clicked"] : classes.level}
        key={level.id}
        size={"70"}
        onClick={() => clickLevelHandler(level.name)}
        onMouseEnter={() => mouseEnteredLevelHandler(level.name)}
        onMouseLeave={mouseLeftLevelHandler}
      >
        {level.name}
      </Level>
    );
  });

  return (
    <div className={`centered-horizontally ${classes.levels}`}>
      {levelsList}
    </div>
  );
};

export default Levels;
