import React from 'react'

import PersonalInfoItem from '../Personal Info Item/PersonalInfoItem';

const PersonalInfo = ({ userInfo }) => {
    const PersonalInfoItems = userInfo.map((info) => {
        return (
            <PersonalInfoItem
                key={info.title}
                // value={formik.values[info.name]}
                title={info.title}
                info={info.info}
                name={info.name}
            // toUpdate={toUpdateInfo}
            // onChange={changeInputHandler}
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