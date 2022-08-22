import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../UI/Card/Card";

import classes from "./Modal.module.css";

import { countriesActions } from "../../store/countries-slice";

import { getMeRandomElement } from "../../utils/utils-general";

const FunFactModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { questionIndex, questionsQuantity, questions } = useSelector(
    (state) => state
  );

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
      navigate("/welcome", { replace: true });
    }
  };

  const Modal = () => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>{answer.name}</header>
        <div className={classes.content}>{funFact}</div>
        <footer className={classes.content}>
          <button onClick={nextQuestionHandler}>Next</button>
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
