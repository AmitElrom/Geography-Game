import React from 'react'
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header className={classes.header} >
            <div>
                <Link to='/welcome' >Flags Game</Link>
            </div>
            <nav className={classes.nav} >
                <ul>
                    <li>
                        <Link to='/about' className={navData => navData.isActive && classes.active} >About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation