import React, { useEffect } from "react";

import useStopWatch from "../../../hooks/use-stop-watch";

const StopWatch = ({ isStopWatchActivated }) => {
  const { time, toggleIsTimeRunning, rewriteTimeFields } =
    useStopWatch();

  console.log(time);

  useEffect(() => {
    if (isStopWatchActivated) {
      toggleIsTimeRunning()
    }
  }, [isStopWatchActivated, toggleIsTimeRunning])

  return (
    <div>
      <span>{rewriteTimeFields("minutes")}:</span>
      <span>{rewriteTimeFields("seconds")}:</span>
      <span>{rewriteTimeFields("hundredthSecond")}</span>
    </div>
  );
};

export default StopWatch;
