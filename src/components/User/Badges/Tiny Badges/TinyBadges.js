import React from 'react'
import TinyBagde from '../Tiny Badage/TinyBagde'

import classes from '../Tiny Badges/TinyBadges.module.css';

const TinyBadges = ({ badges }) => {

    const tinyBadgesList = badges?.map((badge, index) => {
        return <TinyBagde key={badge.name} backgroundColor={badge.backgroundColor} index={index} name={badge.name} hasBadge={badge.hasBadge} />
    })

    return (
        <div className={classes.badges} >{tinyBadgesList}</div>
    )
}

export default TinyBadges