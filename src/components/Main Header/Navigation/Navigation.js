import React from 'react'
import { Link, NavLink } from 'react-router-dom';

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
                        <NavLink to='/about' className={(navLinkObj) => navLinkObj.isActive && classes.active} >About</NavLink>
                    </li>
                    {/*  className={navData => navData.isActive && classes.active} */}
                </ul>
            </nav>
        </header>
    )
}

export default Navigation