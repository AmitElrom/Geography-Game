import React from 'react'

const CustomToolTip = ({ active, payload, label }) => {
    console.log(active, payload, label)
    if (active && payload && payload.length) {
        return (
            <div>
                <p >{`${payload[0].payload.countryName} : ${payload[0].value}`}</p>
                <p >{ }</p>
                <p>Anything you want can be displayed here.</p>
            </div>
        );
    }
}

export default CustomToolTip