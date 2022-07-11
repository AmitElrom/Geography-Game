import React from 'react'

import classes from './Card.module.css';

const Card = ({ className, style, children }) => {

    let classNames = `${classes.card} ${className}`;

    return (
        <div style={style} className={classNames} >
            {children}
        </div>
    )
}

export default Card