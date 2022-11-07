import React from 'react'

import PersonalInfoItem from '../Personal Info Item/PersonalInfoItem';

const PersonalInfo = ({ userInfo }) => {
    const PersonalInfoItems = userInfo.map((info) => {
        return (
            <PersonalInfoItem
                key={info.title}
                title={info.title}
                info={info.info}
                name={info.name}
            />
        );
    });
    return (
        <div>
            <div>{PersonalInfoItems}</div>
        </div>
    )
}

export default PersonalInfo