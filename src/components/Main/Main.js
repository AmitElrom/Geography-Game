import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useHttpAxios from '../../hooks/use-http-axios';

import Levels from '../Levels General/Levels';
import MainLevel from '../Levels General/MainLevel';

import { countriesActions } from '../../store/countries-slice';

const Main = () => {

    const state = useSelector(state => state.countries)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(state);
    }, [state])

    useEffect(() => {
        dispatch(countriesActions.nullify())
    }, [dispatch])

    return (
        <Fragment>
            <Levels />
            <MainLevel />
        </Fragment>
    )
}

export default Main