import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Levels from '../Levels General/Levels';
import MainLevel from '../Levels General/MainLevel';

import { countriesActions } from '../../store/countries-slice';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countriesActions.nullifyScore())
    }, [dispatch])

    return (
        <Fragment>
            <Levels />
            <MainLevel />
        </Fragment>
    )
}

export default Main