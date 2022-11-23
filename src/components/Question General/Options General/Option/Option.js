import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../UI/Card/Card";

import classes from "./Option.module.css";

import { countriesActions } from "../../../../store/countries-slice";

const Option = ({
  answer,
  optionData,
  onDisplayTrueCountryWhenFalseAnswer,
  isTrueCountryDisplayed,
}) => {
  const dispatch = useDispatch();

  const { questionIndex, questionsQuantity } = useSelector(state => state);

  const [optionClasses, setOptionClasses] = useState(classes.option);

  useEffect(() => {
    if (isTrueCountryDisplayed) {
      setOptionClasses(`${classes.option} ${classes["true-when-false"]}`);
    }
  }, [isTrueCountryDisplayed]);

  const displayTrueCountry = () => {
    onDisplayTrueCountryWhenFalseAnswer(true);
  };

  const notDisplayTrueCountry = () => {
    onDisplayTrueCountryWhenFalseAnswer(false);
  };

  const clickOptionHandler = () => {
    // let isFinalQuestion = questionIndex === (questionsQuantity - 1)
    if (optionData.isCountry) {
      setOptionClasses(`${classes.option} ${classes.true}`);
      setTimeout(() => {
        dispatch(countriesActions.caseTrueAnswer(optionData.id));
        // dispatch(countriesActions.caseAnswer({ isCorrect: true, trueCountry: optionData.id, isFinalQuestion }));
        dispatch(countriesActions.showFunFact());
      }, 800);
    } else {
      setOptionClasses(`${classes.option} ${classes.false}`);
      displayTrueCountry();
      setTimeout(() => {
        dispatch(
          countriesActions.caseFalseAnswer({
            falseCountry: optionData.id,
            trueCountry: answer,
          })
        );
        // dispatch(countriesActions.caseAnswer({ isCorrect: false, trueCountry: answer, falseCountry: optionData.id, isFinalQuestion }));
        notDisplayTrueCountry();
        dispatch(countriesActions.showFunFact());
      }, 800);
    }
  };

  return (
    <Card className={optionClasses} onClick={clickOptionHandler}>
      {optionData.name}
    </Card>
  );
};

export default Option;
