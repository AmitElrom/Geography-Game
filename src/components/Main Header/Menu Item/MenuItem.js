import React from 'react'

import classes from './MenuItem.module.css';

const MenuItem = ({ children }) => {
    return (
        <li className={classes.item} >{children}</li>
    )
}

export default MenuItem