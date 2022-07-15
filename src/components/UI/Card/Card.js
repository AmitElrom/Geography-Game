import React from 'react'

import classes from './Card.module.css';

const Card = ({ className, style, children, onClick }) => {

    let classNames = `${classes.card} ${className}`;

    return (
        <div style={style} className={classNames} onClick={onClick} >
            {children}
        </div>
    )
}

export default Card