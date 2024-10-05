// ProgressBar.js
import React, { useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress((prevProgress) => {
      if (prevProgress >= 100) return prevProgress;
      return Math.min(prevProgress + 10, 100);
    });
  };

  const handleDecrement = () => {
    setProgress((prevProgress) => {
      if (prevProgress <= 0) return prevProgress;
      return Math.max(prevProgress - 10, 0);
    });
  };

  return (
    <div>
      <h2>Progress Bar:</h2>
      <div
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: '200px',
          height: '20px',
          backgroundColor: '#ccc',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#4CAF50',
            borderRadius: '5px',
            transition: 'width 0.5s',
          }}
        />
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Progress: {progress}%</p>
    </div>
  );
}

export default ProgressBar;