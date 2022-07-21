import { shallowEqual, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../UI/Card/Card';

import Flag from '../Flag/Flag';
import Options from '../Options General/Options/Options';


const Question = () => {

    const navigate = useNavigate();

    const { countryNumber } = useParams();
    let countryIndex = +countryNumber - 1;
    const state = useSelector(state => state);
    console.log(state);
    const { countries } = state;
    const question = countries[countryIndex];
    const { questionsQuantity } = useSelector(state => state);
    const answer = question[0];

    const nextCountryHandler = () => {
        if (+countryNumber !== questionsQuantity) {
            navigate(`/countries/${+countryNumber + 1}`)
        } else {
            navigate('/welcome')
        }
    }

    return (
        <Card className='centered-horizontally' style={{ width: '40%' }} >
            <Flag flag={answer.flag} />
            <Options onNext={nextCountryHandler} questionData={question} />
        </Card>
    )
}

export default Question