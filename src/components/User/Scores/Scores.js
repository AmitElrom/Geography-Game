import React, { useEffect, useState } from 'react'
import ScoresTable from './Scores Table/Table/ScoresTable'
import useHttpAxios from '../../../hooks/use-http-axios';
import UserLevels from './User Levels/UserLevels';

const Scores = () => {

    const [usersWithScores, setUsersWithScores] = useState([]);

    const { error, isLoading, sendRequest: getUsersScores } = useHttpAxios();

    useEffect(() => {
        let token = sessionStorage.getItem("token");
        getUsersScores(
            {
                url: "http://localhost:8000/score-elrom",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
            (data) => {
                setUsersWithScores(data);
            }
        );
    }, [getUsersScores]);

    return (
        <div>
            <UserLevels />
            <ScoresTable scoresTable={usersWithScores} />
        </div>
    )
}

export default Scores