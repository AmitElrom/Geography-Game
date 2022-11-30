import { useEffect, useState, useCallback } from "react";

const useStopWatch = () => {
  const [time, setTime] = useState({
    hundredthSecond: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimeRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = { ...prevTime };
          newTime.hundredthSecond = newTime.hundredthSecond + 1;
          if (newTime.hundredthSecond === 100) {
            newTime.hundredthSecond = 0;
            newTime.seconds = newTime.seconds + 1;
            if (newTime.seconds === 60) {
              newTime.seconds = 0;
              newTime.minutes = newTime.minutes + 1;
              if (newTime.minutes === 60) {
                newTime.minutes = 0;
                newTime.hours = newTime.hours + 1;
                if (newTime.hours === 24) {
                  newTime.hours = 0;
                  newTime.days = newTime.days + 1;
                }
              }
            }
          }
          return newTime;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimeRunning]);

  const toggleIsTimeRunning = useCallback(() => {
    setIsTimeRunning((prevValue) => !prevValue);
  }, []);

  const rewriteTimeFields = (timeField) => {
    return time[timeField] < 10 ? `0${time[timeField]}` : time[timeField];
  };

  const resetTime = () => {
    setTime((prevTime) => {
      return {
        ...prevTime,
        hundredthSecond: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
      };
    });
  };

  return {
    time,
    toggleIsTimeRunning,
    resetTime,
    rewriteTimeFields,
    isPause: isTimeRunning, //for presentational purposes - 
    // usually for pause/resume button - 
    // if on button appears 'pause' the time is running (isTimeRunning is truthy)
    // if on button appears 'resume' the time is not running (isTimeRunning is falsy)
  };
};

export default useStopWatch;
