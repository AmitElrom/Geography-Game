import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import { countriesActions } from '../../store/countries-slice';
import useHttpAxios from '../../hooks/use-http-axios';
import { useEffect } from 'react';

const MainLevel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, sendRequest: getCountries } = useHttpAxios();

    const state = useSelector(state => state)

    const startPlayingHandler = () => {

        getCountries({
            method: 'GET',
            url: 'http://localhost:8000/countries-elrom'
        }, (data) => {
            dispatch(countriesActions.manipulateCountries({
                countriesFromAPI: data,
                questionsQuantity: 10
            }))
        })

        if (state.countries.length) {
            navigate('/countries/1');
        }
    }

    return (
        <div className='centered-horizontally' >
            <Level size='100' onClick={startPlayingHandler} >
                start playing
            </Level>
        </div>
    )
}

export default MainLevel