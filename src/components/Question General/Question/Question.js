import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';

const Question = () => {

    const [isMoreCountrirs, setIsMoreCountries] = useState(true);

    const navigate = useNavigate();
    const { countryNumber } = useParams();
    const { countries } = useSelector(state => state);

    let countryIndex = countryNumber - 1;
    const country = countries[countryIndex];

    const nextCountryHandler = () => {
        // if (country !== null) {
        // increase countryNumber by 1
        navigate(`/countries/${+countryNumber + 1}`)
        // } else {
        //     setIsMoreCountries(false);
        // }
    }

    return (
        <div>
            {country.name}
            {isMoreCountrirs && <button onClick={nextCountryHandler} >Next</button>}
        </div>
    )
}

export default Question