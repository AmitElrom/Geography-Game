import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

import { countriesActions } from '../../../store/countries-slice';
import { useDispatch } from 'react-redux';

const Navigation = () => {

    const dispatch = useDispatch();

    const toAboutPageHandler = () => {
        dispatch(countriesActions.nullify())
    }

    return (
        <header className={classes.header} >
            <div>
                <Link to='/welcome' >Flags Game</Link>
            </div>
            <nav className={classes.nav} >
                <ul>
                    <li>
                        <NavLink to='/about' onClick={toAboutPageHandler} className={(navLinkObj) => navLinkObj.isActive ? classes.active : ''} >About</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation