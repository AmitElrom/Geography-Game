import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '../../UI/Card/Card';

import Flag from '../Flag/Flag';
import Options from '../Options General/Options/Options';

import classes from './Question.module.css';


const Question = () => {

    const navigate = useNavigate();

    const { questions, score, questionIndex } = useSelector(state => state.countries);

    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState({});

    useEffect(() => {
        if (questions.length === 0) {
            console.log(questions, 'questions.length === 0');
            navigate('/welcome', { replace: true })
            return
        } else {
            setQuestion(questions[questionIndex])
            setAnswer(questions[questionIndex][0])
        }
    }, [questions, navigate, questionIndex])

    let cardClasses = `centered-horizontally ${classes.question}`

    return (
        <Card className={cardClasses} >
            <div className={classes.numbers} >
                <p>No. {questionIndex + 1}</p>
                <p>Score {score}</p>
            </div>
            <Flag flag={answer.flag} />
            <Options questionData={question} />
        </Card>
    )
}

export default Question