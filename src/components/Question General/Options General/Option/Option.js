import React from 'react'
import Card from '../../../UI/Card/Card'

import classes from './Option.module.css';

const Option = ({ optionData, onNext }) => {
    return (
        <Card className={classes.option} onClick={onNext} >
            {optionData.name}
        </Card>
    )
}

export default Option