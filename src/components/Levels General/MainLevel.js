import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import { countriesActions } from '../../store/countries-slice';
import useHttpAxios from '../../hooks/use-http-axios';

const MainLevel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, sendRequest: getCountries } = useHttpAxios();


    const startPlayingHandler = () => {

        getCountries({
            method: 'GET',
            url: 'http://localhost:8000/countries-elrom'
        }, (data) => {
            dispatch(countriesActions.manipulateCountries({
                countriesFromAPI: data,
                questionsQuantity: 10
            }))
            navigate('/countries/1');
        })
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