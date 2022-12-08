import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import DropDownMenu from '../Drop Down Menu/DropDownMenu';
import Alert from '../../UI/Alert/Alert';

import classes from './Layout.module.css';

import { alertActions } from '../../../store/alert-slice';

const Layout = ({ children, className }) => {

    const dispatch = useDispatch();

    const { isAlertActivated } = useSelector(state => state.alert);
    const { isMenuOpen } = useSelector(state => state.menu);

    useEffect(() => {
        if (isAlertActivated) {
            setTimeout(() => {
                dispatch(alertActions.deactivateAlert());
            }, [3000])
        }
    }, [isAlertActivated, dispatch])

    return (
        <Fragment>
            {isAlertActivated && <Alert />}
            <Navigation />
            {isMenuOpen && <DropDownMenu />}
            <main className={`${className} ${classes.main}`} >{children}</main>
        </Fragment>
    )
}

export default Layout