import { useContext } from 'react'

import authContext from '../../../store/auth-context';

import classes from './MenuItem.module.css';

const MenuItem = ({ children, onLogout }) => {

    const { logoutHandler } = useContext(authContext);

    const clickMenuItemHandler = () => {
        switch (children) {
            case 'Scores':
                console.log('scores');
                break
            case 'Profile':
                console.log('Profile');;
                break
            case "Badges":
                console.log("Badges");
                break
            case "Log Out":
                onLogout()
                logoutHandler();
                break
            default:
                break
        }
    }

    return (
        <div className={classes.item} onClick={clickMenuItemHandler} >{children}</div>
    )
}

export default MenuItem