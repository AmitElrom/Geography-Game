import React from 'react'
import Card from '../../../UI/Card/Card'

const Option = ({ optionData }) => {
    return (
        <Card>
            {optionData.name}
        </Card>
    )
}

export default Option