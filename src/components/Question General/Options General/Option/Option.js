import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useHttpAxios from "../../../../hooks/use-http-axios";

import Card from "../../../UI/Card/Card";

import classes from "./Option.module.css";

import { countriesActions } from "../../../../store/countries-slice";

import { alertActions } from "../../../../store/alert-slice";

let isOptionClickedOnce = true;

const Option = ({
  answer,
  optionData,
  onDisplayTrueCountryWhenFalseAnswer,
  isTrueCountryDisplayed,
}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    questionIndex,
    questionsQuantity,
    difficultyLevel,
    startTime,
    score,
    questionsToServer,
    isFunFactsShown,
  } = useSelector((state) => state.countries);

  useEffect(() => {
    isOptionClickedOnce = true;
  }, [questionIndex]);

  const { error, sendRequest: sendScoreRequest } = useHttpAxios();

  const [isFinalQuestion, setIsFinalQuestion] = useState();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [optionClasses, setOptionClasses] = useState(classes.option);

  useEffect(() => {
    setIsFinalQuestion(questionIndex !== questionsQuantity - 1);
  }, [questionIndex, questionsQuantity]);

  useEffect(() => {
    if (isOptionClicked) {
      setIsOptionClicked(false);
      if (isFinalQuestion) {
        if (isFunFactsShown) {
          dispatch(countriesActions.showFunFact());
        } else {
          dispatch(countriesActions.nextCountryHandler());
        }
      } else {
        sessionStorage.setItem(
          "last-match-level",
          difficultyLevel.toLowerCase()
        );
        let token = sessionStorage.getItem("token");
        sendScoreRequest(
          {
            method: "PATCH",
            url: `${process.env.REACT_APP_SERVER_BASE_URL}/score-elrom`,
            body: {
              level: difficultyLevel.toLowerCase(),
              startTime,
              endTime: new Date().getTime(),
              score,
              questions: questionsToServer,
            },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          (data) => {
            if (isFunFactsShown) {
              dispatch(countriesActions.showFunFact());
            } else {
              navigate("/match-summary", { replace: true });
            }
          }
        );
      }
    }
  }, [
    isOptionClicked,
    dispatch,
    isFunFactsShown,
    difficultyLevel,
    sendScoreRequest,
    startTime,
    score,
    questionsToServer,
    navigate,
    isFinalQuestion,
  ]);

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
    if (isOptionClickedOnce) {
      isOptionClickedOnce = false;
      if (optionData.isCountry) {
        setOptionClasses(`${classes.option} ${classes.true}`);
        setTimeout(() => {
          dispatch(countriesActions.caseTrueAnswer(optionData.id));
          setIsOptionClicked(true);
        }, 1500);
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
          notDisplayTrueCountry();
          setIsOptionClicked(true);
        }, 1500);
      }
    }
  };

  return (
    <Card className={optionClasses} onClick={clickOptionHandler}>
      {optionData.name}
    </Card>
  );
};

export default Option;
