import { Fragment } from 'react'

import Navigation from '../Navigation/Navigation'

import classes from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navigation />
            <main className={classes.main} >{children}</main>
        </Fragment>
    )
}

export default Layout