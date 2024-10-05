import React, { useState } from 'react';

function Alarm() {
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmMessage, setAlarmMessage] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [error, setError] = useState(null);

  const handleSetAlarm = () => {
    const alarmTimeMs = Date.parse(alarmTime);
    if (isNaN(alarmTimeMs) || alarmTimeMs < Date.now()) {
      setError('Invalid or past date');
      return;
    }
    if (!alarmMessage) {
      setError('Please enter an alarm message');
      return;
    }

    setIsAlarmSet(true);
    setTimeout(() => {
      alert(alarmMessage);
      setIsAlarmSet(false);
    }, alarmTimeMs - Date.now());
  };

  const handleClearAlarm = () => {
    setIsAlarmSet(false);
  };

  return (
    <div className="alarm-container">
      <h2 className="alarm-header">Alarm</h2>
      <div className="alarm-inputs">
        <input
          type="datetime-local"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
          className="alarm-time-input"
        />
        <input
          type="text"
          value={alarmMessage}
          onChange={(e) => setAlarmMessage(e.target.value)}
          placeholder="Alarm message"
          className="alarm-message-input"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="alarm-buttons">
        <button
          onClick={handleSetAlarm}
          disabled={isAlarmSet}
          className={isAlarmSet ? "alarm-set-button" : "set-alarm-button"}
        >
          {isAlarmSet ? 'Alarm Set' : 'Set Alarm'}
        </button>
        {isAlarmSet && (
          <button
            onClick={handleClearAlarm}
            className="clear-alarm-button"
          >
            Clear Alarm
          </button>
        )}
      </div>
    </div>
  );
}

export default Alarm;