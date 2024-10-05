// LapList.js
import React, { useState, useEffect } from 'react';

function LapList() {
  const [lapTimes, setLapTimes] = useState([]);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const handleStart = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
    setLapTimes([]);
  };

  const handleLap = () => {
    setLapTimes((prevLapTimes) => [...prevLapTimes, time]);
    setTime(0);
  };

  return (
    <div className="lap-list-container">
      <h2 className="lap-list-header">Lap Times:</h2>
      <ul className="lap-list">
        {lapTimes.map((lapTime, index) => (
          <li key={index} className="lap-list-item">
            <span className="lap-number">Lap {index + 1}:</span>
            <span className="lap-time">{lapTime}</span>
          </li>
        ))}
      </ul>
      <div className="controls">
        <button
          onClick={handleLap}
          disabled={!isRunning}
          className="lap-button"
        >
          Lap
        </button>
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="start-button"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          className="stop-button"
        >
          Stop
        </button>
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      </div>
      <p className="current-time">Current Time: {time}</p>
    </div>
  );
}

export default LapList;