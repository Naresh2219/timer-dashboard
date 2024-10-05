// Timer.js (continued)
import React, { useState, useEffect } from 'react';

function Timer({ time = 0, isRunning = false, handleStart, handleStop, handleReset }) {
  const [currentTime, setCurrentTime] = useState(time);
  const [running, setRunning] = useState(isRunning);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  const handleStartClick = () => {
    setRunning(true);
    handleStart();
  };

  const handleStopClick = () => {
    setRunning(false);
    handleStop();
  };

  const handleResetClick = () => {
    setCurrentTime(0);
    setRunning(false);
    handleReset();
  };

  const minutes = Math.floor(currentTime / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = Math.floor(currentTime % 1000);

  return (
    <div className="timer-container">
      <h1 className="timer-display">
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(3, '0')}
      </h1>
      <div className="timer-controls">
        <button onClick={handleStartClick} disabled={running} className="start-button">
          Start
        </button>
        <button onClick={handleStopClick} disabled={!running} className="stop-button">
          Stop
        </button>
        <button onClick={handleResetClick} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;