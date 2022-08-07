import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import { countriesActions } from '../../store/countries-slice';
import useHttpAxios from '../../hooks/use-http-axios';

let questionsQuantity = 10;

const MainLevel = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isStartPlaying } = useSelector(state => state);

    const { isLoading, error, sendRequest: getCountries } = useHttpAxios();


    const startPlayingHandler = () => {
        console.log('hello');
        getCountries({
            method: 'GET',
            url: `http://localhost:8000/countries-elrom?questions-quantity=${questionsQuantity}`
        }, (data) => {
            dispatch(countriesActions.manipulateCountries({
                questions: data,
                questionsQuantity
            }))
            navigate('/question');
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