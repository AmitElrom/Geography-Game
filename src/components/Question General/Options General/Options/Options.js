import React from 'react'
import Card from '../../../UI/Card/Card'

import Option from '../Option/Option'

const Options = ({ questionData }) => {

    const optionsList = questionData.map(option => {
        return <Option key={option.id} optionData={option} />
    })

    return (
        <Card>
            {optionsList}
        </Card>
    )
}

export default Options