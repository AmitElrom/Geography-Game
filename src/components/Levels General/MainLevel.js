import { useState } from 'react';
import axios from 'axios';

import Level from '../UI/Difficulty Level/DifficultyLevel';

import { getMeRandomElements } from '../../utils/utils-general';

const MainLevel = () => {

    // pending - work with redux
    const [countries, setCountries] = useState([]);

    const startPlayingHandler = async () => {
        const { data: countriesData } = await axios.get('http://localhost:8000/countries-elrom?minknown?=1&maxknown=4')
        const randomCountries = getMeRandomElements(countriesData, 3);
        setCountries(randomCountries)
    }

    return (
        //className='centered'
        <Level size='100' className={'centered-horizontally'} onClick={startPlayingHandler} >
            start playing
        </Level>
    )
}

export default MainLevel