import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';

const Question = () => {

    const navigate = useNavigate();

    const { countryNumber } = useParams();
    let countryIndex = countryNumber - 1;
    const question = useSelector(state => state.countries[countryIndex]);

    console.log(question);

    const nextCountryHandler = () => {
        navigate(`/countries/${+countryNumber + 1}`)
    }

    return (
        <div>
            {question.isCountry}
            <button onClick={nextCountryHandler} >Next</button>
        </div>
    )
}

export default Question