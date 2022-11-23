import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Levels from './Levels General/Levels';
import MainLevel from './Levels General/MainLevel';

import { countriesActions } from '../../store/countries-slice';
import GameRules from './rules/rules/GameRules';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countriesActions.nullify());
    }, [dispatch])

    return (
        <Fragment>
            <GameRules />
            <Levels />
            <MainLevel />
        </Fragment>
    )
}

export default Main