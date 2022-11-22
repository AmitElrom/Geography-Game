import classes from './DifficultyLevel.module.css';

const DifficultyLevel = ({ onClick, onMouseEnter, onMouseLeave, className, size, children: level }) => {

    const classNames = `${classes.level} ${className}`;

    return (
        <div
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={classNames}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`,
            }} >
            {level}
        </div>
    )
}

export default DifficultyLevel