import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import authContext from '../../../store/auth-context';

import classes from './MenuItem.module.css';

const MenuItem = ({ children, onLogout }) => {

    const navigate = useNavigate();

    const { logoutHandler } = useContext(authContext);

    const clickMenuItemHandler = () => {
        switch (children) {
            case 'Scores':
                navigate('/scores')
                break
            case 'Profile':
                navigate('/profile')
                break
            case "Badges":
                navigate('/badges')
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