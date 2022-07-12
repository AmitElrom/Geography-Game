import React, { Fragment } from 'react'
import Navigation from '../Navigation/Navigation'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navigation />
            <main>{children}</main>
        </Fragment>
    )
}

export default Layout