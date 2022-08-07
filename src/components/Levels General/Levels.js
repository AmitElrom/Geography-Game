import Level from '../UI/Difficulty Level/DifficultyLevel';

import classes from './Levels.module.css';

const LEVELS_DATA = ['Beginner', 'Amateur', 'Medium', 'Hard', 'Expert'];

const Levels = () => {

    const levelsList = LEVELS_DATA.map(level => {
        return <Level key={level} size={'70'}  >{level}</Level>
    })

    return (
        <div className={`centered-horizontally ${classes.levels}`} >
            {levelsList}
        </div>
    )
}

export default Levels