// WorldClock.js
import React from 'react';

function WorldClock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date, timezone) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: timezone,
    });
    return formatter.format(date);
  };

  return (
    <div className="world-clock">
      <h2>World Clock</h2>
      <ul>
        <li>
          <span>New York:</span>
          <span>{formatTime(time, 'America/New_York')}</span>
        </li>
        <li>
          <span>Los Angeles:</span>
          <span>{formatTime(time, 'America/Los_Angeles')}</span>
        </li>
        <li>
          <span>Chicago:</span>
          <span>{formatTime(time, 'America/Chicago')}</span>
        </li>
        <li>
          <span>London:</span>
          <span>{formatTime(time, 'Europe/London')}</span>
        </li>
        <li>
          <span>Paris:</span>
          <span>{formatTime(time, 'Europe/Paris')}</span>
        </li>
        <li>
          <span>Berlin:</span>
          <span>{formatTime(time, 'Europe/Berlin')}</span>
        </li>
        <li>
          <span>Tokyo:</span>
          <span>{formatTime(time, 'Asia/Tokyo')}</span>
        </li>
        <li>
          <span>Beijing:</span>
          <span>{formatTime(time, 'Asia/Shanghai')}</span>
        </li>
        <li>
          <span>Sydney:</span>
          <span>{formatTime(time, 'Australia/Sydney')}</span>
        </li>
        <li>
          <span>Melbourne:</span>
          <span>{formatTime(time, 'Australia/Melbourne')}</span>
        </li>
        <li>
          <span>Mumbai:</span>
          <span>{formatTime(time, 'Asia/Kolkata')}</span>
        </li>
        <li>
          <span>Rio de Janeiro:</span>
          <span>{formatTime(time, 'America/Sao_Paulo')}</span>
        </li>
        <li>
          <span>Cairo:</span>
          <span>{formatTime(time, 'Africa/Cairo')}</span>
        </li>
        <li>
          <span>Johannesburg:</span>
          <span>{formatTime(time, 'Africa/Johannesburg')}</span>
        </li>
      </ul>
    </div>
  );
}

export default WorldClock;