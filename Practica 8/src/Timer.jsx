import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (seconds === 0) {
      setIsRunning(false); // Остановить таймер, когда он достигнет 0
    }
  }, [isRunning, seconds]);

  const resetTimer = () => {
    setSeconds(60); // Сбросить таймер на 60 секунд
    setIsRunning(true); // Запустить таймер
  };

  return (
    <div className="timer">
      Таймер: {seconds} секунд
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Остановить' : 'Запустить'}
        </button>
        <button onClick={resetTimer}>Сбросить</button>
      </div>
    </div>
  );
};

export default Timer;
