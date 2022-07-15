import { useState, useEffect } from 'react';

import Option from '../Option/Option'

import Card from '../../../UI/Card/Card'

import { shuffleArray } from '../../../../utils/utils-general';

const Options = ({ questionData }) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const shuffledOptions = shuffleArray(questionData);
        setOptions(shuffledOptions)
    }, [questionData])

    const optionsList = options.map(option => {
        return <Option key={option.id} optionData={option} />
    })

    return (
        <Card>
            {optionsList}
        </Card>
    )
}

export default Options