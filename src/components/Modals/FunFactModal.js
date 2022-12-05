import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card/Card";

import classes from "./Modal.module.css";

import { countriesActions } from "../../store/countries-slice";
import { sendScoreRequest } from "../../store/countries-slice";

import { getMeRandomElement } from "../../utils/utils-general";
import useHttpAxios from "../../hooks/use-http-axios";

const FunFactModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isLoading, sendRequest: sendScoreRequest } = useHttpAxios();

  const {
    questionIndex,
    questionsQuantity,
    questions,
    difficultyLevel,
    startTime,
    score,
    questionsToServer,
  } = useSelector((state) => state.countries);

  const [answer, setAnswer] = useState({});
  const [funFact, setFunFact] = useState("");

  useEffect(() => {
    setAnswer(questions[questionIndex][0]);
    let chosenFunFact = getMeRandomElement(
      questions[questionIndex][0].funFact.data
    );
    setFunFact(chosenFunFact);
  }, [questionIndex, questions]);

  const nextQuestionHandler = () => {
    dispatch(countriesActions.hideFunFact());
    if (questionIndex !== questionsQuantity - 1) {
      dispatch(countriesActions.nextCountryHandler());
    } else {
      console.log("that was the final question");
      // dispatch(countriesActions.caseFinalQuestion())
      // dispatch(sendScoreRequest())
      sessionStorage.setItem("last-match-level", difficultyLevel.toLowerCase());
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
          console.log("score sent to server status", data);
          navigate("/match-summary", { replace: true });
        }
      );
    }
  };

  const Modal = () => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>{answer.name}</header>
        <div className={classes.content}>{funFact}</div>
        <footer className={classes.content}>
          <button className="button-28" onClick={nextQuestionHandler}>
            {questionIndex !== questionsQuantity - 1
              ? "Next"
              : "To game summary page"}
          </button>
        </footer>
      </Card>
    );
  };

  const portalElement = document.getElementById("modal");

  return (
    <div>
      <div className={classes.backdrop}></div>
      {createPortal(<Modal />, portalElement)}
    </div>
  );
};

export default FunFactModal;
