import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useHttp from '../../hooks/use-http';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import { getMeRandomCountriesNoNumber } from '../../utils/utils-general';
import { countriesActions } from '../../store/countries-slice';
import useHttpAxios from '../../hooks/use-http-axios';


const getMeRandomCountries = (countriesData) => {
    const randomCountries = getMeRandomCountriesNoNumber(countriesData, 10);
    return randomCountries;
};

const MainLevel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, sendRequest: getCountries } = useHttpAxios();

    const startPlayingHandler = async () => {

        const randomCountries = await getCountries({
            method: 'GET',
            url: 'http://localhost:8000/countries-elrom'
        }, getMeRandomCountries)

        dispatch(countriesActions.maipulateCountries(randomCountries))

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