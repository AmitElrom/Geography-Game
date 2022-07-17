import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import { countriesActions } from '../../store/countries-slice';
import useHttpAxios from '../../hooks/use-http-axios';

const MainLevel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, sendRequest: getCountries } = useHttpAxios();

    const startPlayingHandler = () => {

        const countriesFromAPI = {};

        getCountries({
            method: 'GET',
            url: 'http://localhost:8000/countries-elrom'
        }).then(data => {
            countriesFromAPI.potentialFalseCountries = data.potentialFalseCountries;
            countriesFromAPI.potentialTrueCountries = data.potentialTrueCountries;
        })

        dispatch(countriesActions.manipulateCountries({
            countriesFromAPI,
            questionsQuantity: 10
        }))

        navigate('/countries/1', { replace: true });
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