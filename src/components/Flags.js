import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Flags = () => {

    const [states, setStates] = useState([]);

    console.log(states);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://restcountries.com/v2/all')
            const statesData = data.map(state => {
                return {
                    name: state.name,
                    flag: state.flags.svg
                }
            })
            setStates(statesData)
        })()
    }, [])

    const statesList = states.map(state => {
        return <img style={{
            margin: '1rem',
            width: '30%',
            height: '10%'
        }} src={state.flag} alt={state.name} />
    })

    return (
        <div>
            {statesList}
        </div>
    )
}

export default Flags