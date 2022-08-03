import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import Card from '../../UI/Card/Card';

import Flag from '../Flag/Flag';
import Options from '../Options General/Options/Options';

import classes from './Question.module.css';


const Question = () => {

    const navigate = useNavigate();
    const { questions, questionsQuantity, score } = useSelector(state => state);

    const [questionIndex, setQuestionIndex] = useState(0);

    const question = questions[questionIndex];
    const answer = question[0];


    const nextCountryHandler = () => {
        if (questionIndex !== questionsQuantity - 1) {
            setQuestionIndex(questionIndex => questionIndex + 1)
        } else {
            navigate('/welcome')
        }
    }

    let cardClasses = `centered-horizontally ${classes.question}`

    return (
        <Card className={cardClasses} >
            <div className={classes.numbers} >
                <p>No. {questionIndex + 1}</p>
                <p>Score {score}</p>
            </div>
            <Flag flag={answer.flag} />
            <Options onNext={nextCountryHandler} questionData={question} />
        </Card>
    )
}

export default Question