import classes from './DifficultyLevel.module.css';

const DifficultyLevel = ({ onClick, onMouseEnter, onMouseLeave, className, children: level }) => {

    const classNames = `${className} ${classes.level} button-28`;

    return (
        <input
            type="button"
            className={classNames}
            level={level.toLowerCase()}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            value={level}
        />
    )
}

export default DifficultyLevel