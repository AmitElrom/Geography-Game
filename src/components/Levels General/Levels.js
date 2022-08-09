import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import classes from './Levels.module.css';

import { countriesActions } from '../../store/countries-slice';

const LEVELS_DATA = ['Beginner', 'Amateur', 'Medium', 'Hard', 'Expert'];

let isInitial = true;

const Levels = () => {

    const [selctedLevel, setSelectedLevel] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
        } else {
            (() => {
                dispatch(countriesActions.startPlaying(selctedLevel))
            })();
        }
    }, [selctedLevel])

    const levelsList = LEVELS_DATA.map(level => {
        return <Level
            key={level}
            size={'70'}
            onClick={() => setSelectedLevel(level)}>
            {level}
        </Level>
    })

    const clickHnadler = e => {
        console.log(e.target.value);
    }

    return (
        <div className={`centered-horizontally ${classes.levels}`} >
            {levelsList}
        </div>
    )
}

export default Levels