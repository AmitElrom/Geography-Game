import { useState, useEffect } from 'react';

import Option from '../Option/Option'

import Card from '../../../UI/Card/Card'

import { shuffleArray } from '../../../../utils/utils-general';

import classes from './Options.module.css';

const Options = ({ questionData, onNext }) => {

    const [options, setOptions] = useState([]);
    const [isTrueCountryDisplayed, setIsTrueCountryDisplayed] = useState(false);

    useEffect(() => {
        const shuffledOptions = shuffleArray(questionData);
        setOptions(shuffledOptions)
    }, [questionData])

    const displayTrueCountryWhenFalseAnswer = (boolean) => {
        setIsTrueCountryDisplayed(boolean)
    }

    const optionsList = options.map(option => {
        return <Option
            key={option.id}
            optionData={option}
            onNext={onNext}
            isTrueCountryDisplayed={isTrueCountryDisplayed && option.isCountry}
            onDisplayTrueCountryWhenFalseAnswer={displayTrueCountryWhenFalseAnswer}
        />
    })

    return (
        <Card className={classes.options} >
            {optionsList}
        </Card>
    )
}

export default Options