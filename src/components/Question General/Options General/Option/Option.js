import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Card from '../../../UI/Card/Card'

import classes from './Option.module.css';

import { countriesActions } from '../../../../store/countries-slice';

const Option = ({ optionData, onNext, onDisplayTrueCountryWhenFalseAnswer, isTrueCountryDisplayed }) => {

    const dispatch = useDispatch();

    const [optionClasses, setOptionClasses] = useState(classes.option);

    useEffect(() => {
        if (isTrueCountryDisplayed) {
            setOptionClasses(`${classes.option} ${classes['true-when-false']}`)
        }
    }, [isTrueCountryDisplayed])

    const displayTrueCountry = () => {
        onDisplayTrueCountryWhenFalseAnswer(true)
    }

    const notDisplayTrueCountry = () => {
        onDisplayTrueCountryWhenFalseAnswer(false)
    }

    const clickOptionHandler = () => {
        if (optionData.isCountry) {
            setOptionClasses(`${classes.option} ${classes.true}`)
            setTimeout(() => {
                dispatch(countriesActions.incrementScore())
                onNext()
            }, 800);
        } else {
            setOptionClasses(`${classes.option} ${classes.false}`)
            displayTrueCountry()
            setTimeout(() => {
                notDisplayTrueCountry()
                onNext()
            }, 800);
        }
    }

    return (
        <Card className={optionClasses} onClick={clickOptionHandler} >
            {optionData.name}
        </Card>
    )
}

export default Option