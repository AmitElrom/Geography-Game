import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Levels from '../Levels General/Levels';
import MainLevel from '../Levels General/MainLevel';

import { countriesActions } from '../../store/countries-slice';

const Main = () => {

    const dispatch = useDispatch();

    const { isStartPlaying } = useSelector(state => state)

    useEffect(() => {
        dispatch(countriesActions.nullify())
    }, [dispatch])

    return (
        <Fragment>
            <Levels />
            {isStartPlaying && <MainLevel />}
        </Fragment>
    )
}

export default Main