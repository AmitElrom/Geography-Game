import React from 'react'
import classes from './UserLevelTitle.module.css';

const UserLevelTitle = ({ titleLevel, onClick }) => {
    return (
        <div className={classes.title} onClick={onClick} >{titleLevel}</div>
    )
}

export default UserLevelTitle