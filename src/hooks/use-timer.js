import { useEffect, useState } from "react";

const useTimer = () => {
    const [time, setTime] = useState({
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        months: 0,
        years: 0
    });

    const [isTimeRuns, setIsTimeRuns] = useState(false);

    const toggleTimeRuns = () => {
        setIsTimeRuns(prevValue => !prevValue);
    };

    const resetTime = () => {
        setTime(prevValue => {
            const timeReset = {};
            for (let prop in prevValue) {
                timeReset[prop] = 0;
            }
            return { ...prevValue, ...timeReset };
        })
    };

    useEffect(() => {
        if (isTimeRuns) {
            setInterval(() => {
                setTime(prevValue => {
                    const newTime = {};

                    if (prevValue.milliseconds === 999) {
                        newTime.milliseconds = 0;
                        newTime.seconds = prevValue.seconds + 1;
                    }
                    if (prevValue.seconds === 59) {
                        newTime.seconds = 0;
                    }
                })
            }, 1)
        }
    }, [isTimeRuns])

    return {
        toggleTimeRuns,
        resetTime
    }
};

export default useTimer;