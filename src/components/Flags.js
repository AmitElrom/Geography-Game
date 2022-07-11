import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './UI/Card/Card';

const Flags = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async () => {
            const { data: countriesData } = await axios.get('http://localhost:8000/countries-elrom')
            setCountries(countriesData)
        })()
    }, [])

    const statesList = countries.map(country => {
        return <Card style={{
            margin: '1rem',
            width: '30%',
            height: '10%'
        }} key={country.name} ><img style={{
            boxSizing: 'content-box',
            width: '100%'
        }} src={country.flag} alt={`${country.name} flag`} /></Card>
    })

    return (
        <div>
            {statesList}
        </div>
    )
}

export default Flags