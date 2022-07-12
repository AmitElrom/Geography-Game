import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useHttp from '../../hooks/use-http';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import { getMeRandomElements } from '../../utils/utils-general';
import { countriesActions } from '../../store/countries-slice';
// const { applyCountries } = countriesActions;

const MainLevel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, sendRequest: getCountries } = useHttp();

    const startPlayingHandler = () => {

        const getMeRandomCountries = (countriesData) => {
            getMeRandomElements(20, countriesData)
        };

        // const randomCountries = getCountries({
        //     url: 'http://localhost:8000/countries-elrom'
        // }, getMeRandomCountries)

        const randomCountries = getCountries({
            url: 'http://localhost:8000/countries-elrom',
            method: 'GET'
        }, getMeRandomCountries)

        console.log(randomCountries);
        dispatch(countriesActions.applyCountries(randomCountries))

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