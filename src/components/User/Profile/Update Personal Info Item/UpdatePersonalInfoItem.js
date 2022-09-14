import React from 'react'

import classes from '../../../Authentication/FormInput/FormInput.module.css';

const UpdatePersonalInfoItem = ({ title, type, name, value, onChange, error }) => {

    return (
        <div className={classes.input}>
            <label htmlFor={title}>{title}</label>
            <input
                id={title}
                type={!type ? "text" : type}
                name={name}
                value={value}
                onChange={onChange}
            />
            <p>{error}</p>
        </div>
    )
}

export default UpdatePersonalInfoItem