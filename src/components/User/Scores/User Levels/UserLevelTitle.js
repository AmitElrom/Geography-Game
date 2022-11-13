import React from 'react'

const UserLevelTitle = ({ titleLevel, onClick }) => {
    return (
        <div onClick={onClick} >{titleLevel}</div>
    )
}

export default UserLevelTitle