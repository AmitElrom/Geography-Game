import React from 'react'
import UserLevel from './UserLevel';

const UserLevels = ({ userLevelsData }) => {
    console.log(userLevelsData);

    const userLevelsDataList = Object.values(userLevelsData).map(level => {
        return <UserLevel key={level} {...level} />
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >{userLevelsDataList}</div>
    )
}

export default UserLevels