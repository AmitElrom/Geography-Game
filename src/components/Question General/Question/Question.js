import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StopWatch from "../../UI/StopWatch/StopWatch";

import Card from "../../UI/Card/Card";

import Flag from "../Flag/Flag";
import Options from "../Options General/Options/Options";

import classes from "./Question.module.css";

const Question = () => {
  const navigate = useNavigate();

  const {
    questions,
    score,
    questionIndex,
    difficultyLevel,
    questionsQuantity,
  } = useSelector((state) => state.countries);

  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState({});
  const [isStopWatchActivated, setIsStopWatchActivated] = useState(false);

  useEffect(() => {
    if (questionIndex === 0) {
      setIsStopWatchActivated(true);
    }
  }, [questionIndex]);

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/welcome", { replace: true });
      return;
    } else {
      setQuestion(questions[questionIndex]);
      setAnswer(questions[questionIndex][0]);
    }
  }, [questions, navigate, questionIndex]);

  let cardClasses = `centered-horizontally ${classes.question}`;

  return (
    <Card className={cardClasses}>
      <Card className={classes.numbers}>
        <div>
          <ul className={classes["numbers-list"]}>
            <li>
              <StopWatch isStopWatchActivated={isStopWatchActivated} />
            </li>
            <li>
              No. {questionIndex + 1} / {questionsQuantity}
            </li>
            <li>Score {score}</li>
          </ul>
        </div>
        <div>
          <p>{difficultyLevel} Level</p>
        </div>
      </Card>
      <Flag flag={answer.flag} />
      <Options questionData={question} />
    </Card>
  );
};

export default Question;
