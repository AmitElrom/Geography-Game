import classes from './DifficultyLevel.module.css';

const DifficultyLevel = ({ onClick, diffictultyLevel, className, size, children: level }) => {

    const classNames = `${classes.level} ${className}`;

    return (
        <div onClick={onClick} className={classNames} style={{
            width: `${size}px`,
            height: `${size}px`,
            lineHeight: `${size}px`,
        }} >
            {level}
        </div>
    )
}

export default DifficultyLevel