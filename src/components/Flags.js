import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './UI/Card/Card';

import { getMeRandomElements } from '../utils/utils-general';

const Flags = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            const { data: countriesData } = await axios.get('http://localhost:8000/countries-elrom?minknown?=1&maxknown=4')
            const randomCountries = getMeRandomElements(countriesData, 3);
            setCountries(randomCountries)
        })()
    }, [])

    const statesList = countries.map(country => {
        return <Card style={{
            width: '30%'
        }} key={country.name} ><img style={{
            boxSizing: 'content-box',
            width: '100%'
        }} src={country.flag} alt={`${country.name} flag`} />
            <div>{country.flagKnown}</div></Card>
    })

    return (
        <div >
            {statesList}
        </div>
    )
}

export default Flags