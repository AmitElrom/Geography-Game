import React from 'react'
import { useDispatch } from 'react-redux';
import Card from '../../../UI/Card/Card'

import classes from './Option.module.css';

import { countriesActions } from '../../../../store/countries-slice';

const Option = ({ optionData, onNext }) => {

    const dispatch = useDispatch();

    const clickOptionHandler = () => {
        onNext()
        if (optionData.isCountry) {
            dispatch(countriesActions.incrementScore())
        }
    }

    return (
        <Card className={classes.option} onClick={clickOptionHandler} >
            {optionData.name}
        </Card>
    )
}

export default Option