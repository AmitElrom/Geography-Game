import { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import authContext from '../../../store/auth-context';

import classes from './MenuItem.module.css';

import { menuActions } from '../../../store/menu-slice';


const MenuItem = ({ children }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { logoutHandler } = useContext(authContext);

    const clickMenuItemHandler = () => {
        dispatch(menuActions.toggleMenu({ toOpenMenu: false }));
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