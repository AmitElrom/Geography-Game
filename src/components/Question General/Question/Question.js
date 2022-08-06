import { useSelector } from 'react-redux'

import Card from '../../UI/Card/Card';

import Flag from '../Flag/Flag';
import Options from '../Options General/Options/Options';

import classes from './Question.module.css';


const Question = () => {

    const { questions, score } = useSelector(state => state);


    const { questionIndex } = useSelector(state => state)

    const question = questions[questionIndex];
    const answer = question[0];

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