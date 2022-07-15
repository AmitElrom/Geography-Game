import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../UI/Card/Card';

import Flag from '../Flag/Flag';
import Options from '../Options General/Options/Options';

const Question = () => {

    const navigate = useNavigate();

    const { countryNumber } = useParams();
    let countryIndex = countryNumber - 1;
    const question = useSelector(state => state.countries[countryIndex]);
    const answer = question[0];

    const nextCountryHandler = () => {
        navigate(`/countries/${+countryNumber + 1}`)
    }

    return (
        <Card className='centered-horizontally' >
            <Flag flag={answer.flag} />
            <Options questionData={question} />
            <button onClick={nextCountryHandler} >Next</button>
        </Card>
    )
}

export default Question