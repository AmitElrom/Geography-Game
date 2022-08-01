import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import Card from '../../UI/Card/Card';

import Flag from '../Flag/Flag';
import Options from '../Options General/Options/Options';

import { countriesActions } from '../../../store/countries-slice';

import './Question.css';

const Question = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questions, questionsQuantity, score } = useSelector(state => state);

    const [questionIndex, setQuestionIndex] = useState(0);

    const question = questions[questionIndex];
    const answer = question[0];


    const nextCountryHandler = () => {
        if (questionIndex !== questionsQuantity - 1) {
            setQuestionIndex(questionIndex => questionIndex + 1)
        } else {
            dispatch(countriesActions.nullifyScore())
            navigate('/welcome')
        }
    }

    return (
        <Card className='centered-horizontally' style={{ width: '40%' }} >
            <div className='numbers' >
                <p>Number {questionIndex + 1}</p>
                <p>Score {score}</p>
            </div>
            <Flag flag={answer.flag} />
            <Options onNext={nextCountryHandler} questionData={question} />
        </Card>
    )
}

export default Question