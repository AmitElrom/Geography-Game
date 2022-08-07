
import { useDispatch } from 'react-redux';

import { countriesActions } from '../../../store/countries-slice';

import classes from './DifficultyLevel.module.css';

const DifficultyLevel = ({ onClick, className, size, children: level }) => {

    const dispatch = useDispatch();

    const clickLevelHandler = () => {
        dispatch(countriesActions.startPlaying())
    }

    const classNames = `${classes.level} ${className}`;

    return (
        <div onClick={onClick ? onClick : clickLevelHandler} className={classNames} style={{
            width: `${size}px`,
            height: `${size}px`,
            lineHeight: `${size}px`,
        }} >
            {level}
        </div>
    )
}

export default DifficultyLevel