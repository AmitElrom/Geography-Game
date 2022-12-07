import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';

import Navigation from '../Navigation/Navigation';

import classes from './Layout.module.css';

const Layout = ({ children, className }) => {

    return (
        <Fragment>
            <Navigation />
            <Toaster />
            <main className={`${className} ${classes.main}`} >{children}</main>
        </Fragment>
    )
}

export default Layout