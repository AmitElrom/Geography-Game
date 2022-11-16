import { Fragment, useEffect } from 'react'
import useHttpAxios from '../../../hooks/use-http-axios';
import { useSelector, useDispatch } from 'react-redux';

import Navigation from '../Navigation/Navigation'

import classes from './Layout.module.css';

import { countriesActions } from '../../../store/countries-slice';

const Layout = ({ children, className }) => {

    const dispatch = useDispatch();

    const { isQuestionnaireOver, startTime, endTime, difficultyLevel, score, questionsToServer } = useSelector(state => state.countries);

    const { error, isLoading, sendRequest: sendScoreRequest } = useHttpAxios();

    useEffect(() => {
        if (isQuestionnaireOver) {
            let token = sessionStorage.getItem('token');
            console.log(questionsToServer);
            sendScoreRequest({
                method: "PATCH",
                url: "http://localhost:8000/score-elrom",
                body: {
                    level: difficultyLevel.toLowerCase(),
                    startTime,
                    endTime,
                    score,
                    questions: questionsToServer
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }, (data) => {
                console.log('score updating', data);
            })
            dispatch(countriesActions.nullify())
        }
    }, [isQuestionnaireOver, dispatch, sendScoreRequest, difficultyLevel, startTime, endTime, score, questionsToServer])


    return (
        <Fragment>
            <Navigation />
            <main className={`${className} ${classes.main}`} >{children}</main>
        </Fragment>
    )
}

export default Layout