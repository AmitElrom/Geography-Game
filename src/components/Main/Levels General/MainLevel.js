import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Level from '../../UI/Difficulty Level/DifficultyLevel';

import classes from './MainLevel.module.css';

import { countriesActions } from '../../../store/countries-slice';
import useHttpAxios from '../../../hooks/use-http-axios';

import { buildUrl } from '../../../utils/utils-api';
import MatchExplanation from './match explanation/MatchExplanation';


const urlReducer = (state, action) => {
    let url;
    switch (action.type) {
        case 'Beginner':
            url = buildUrl(10, 10);
            return url;
        case 'Amateur':
            url = buildUrl(20, 70);
            return url;
        case 'Medium':
            url = buildUrl(20, 120, 1, 1);
            return url;
        case 'Hard':
            url = buildUrl(20, 196, 30, 2);
            return url;
        case 'Expert':
            url = buildUrl(20, 197, 130, 2);
            return url;
        default:
            return state;
    }
}

const MainLevel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isStartPlaying, difficultyLevel, levelForMatchExplanation } = useSelector(state => state.countries);

    const [urlState, urlDisptch] = useReducer(urlReducer);

    const { isLoading, error, sendRequest: getCountries } = useHttpAxios();

    useEffect(() => {
        console.log(urlState);
        getCountries({
            method: 'GET',
            url: urlState
        }, (data) => {
            console.log(data);
            dispatch(countriesActions.manipulateCountries({
                questions: data,
                questionsQuantity: data.length
            }))
            navigate('/question');
        })
    }, [urlState, dispatch, navigate])


    const startPlayingHandler = () => {
        urlDisptch({
            type: difficultyLevel
        })
    }

    return (
        <div className='centered-horizontally'>
            {levelForMatchExplanation && <MatchExplanation level={levelForMatchExplanation} />}
            <Level
                size='100'
                className={classes["main-level"] && !isStartPlaying ? classes.disabled : undefined}
                onClick={isStartPlaying ? startPlayingHandler : undefined} >
                start playing
            </Level>
        </div >
    )
}

export default MainLevel