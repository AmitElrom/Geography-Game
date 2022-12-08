import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useHttpAxios from "../../../../hooks/use-http-axios";

import Card from "../../../UI/Card/Card";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./Option.module.css";

import { countriesActions } from "../../../../store/countries-slice";

import { alertActions } from "../../../../store/alert-slice";


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

  const { error, isLoading, sendRequest: sendScoreRequest } = useHttpAxios();

  useEffect(() => {
    if (error) {
      dispatch(alertActions.activateAlert({ isError: true, data: error }));
    }
  }, [error, dispatch]);

  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [optionClasses, setOptionClasses] = useState(classes.option);

  let isFinalQuestion = questionIndex === questionsQuantity;

  useEffect(() => {
    if (isOptionClicked) {
      console.log(questionIndex);
      setIsOptionClicked(false);
      if (questionIndex !== questionsQuantity - 1) {
        if (isFunFactsShown) {
          dispatch(countriesActions.showFunFact());
        } else {
          dispatch(countriesActions.nextCountryHandler());
        }
      } else {
        console.log(questionIndex, questionsQuantity);
        console.log("final question clicked");
        sessionStorage.setItem(
          "last-match-level",
          difficultyLevel.toLowerCase()
        );
        let token = sessionStorage.getItem("token");
        sendScoreRequest(
          {
            method: "PATCH",
            url: "http://localhost:8000/score-elrom",
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
    isFinalQuestion,
    dispatch,
    isFunFactsShown,
    difficultyLevel,
    sendScoreRequest,
    startTime,
    score,
    questionsToServer,
    navigate,
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
    if (optionData.isCountry) {
      setOptionClasses(`${classes.option} ${classes.true}`);
      setTimeout(() => {
        console.log(optionData.id);
        dispatch(countriesActions.caseTrueAnswer(optionData.id));
        // dispatch(countriesActions.showFunFact());
        setIsOptionClicked(true);
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
        notDisplayTrueCountry();
        // dispatch(countriesActions.showFunFact());
        setIsOptionClicked(true);
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
