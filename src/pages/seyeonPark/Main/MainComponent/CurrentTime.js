import React, { useState, useEffect } from 'react';
import TimeTable from './TimeTable';

const CurrentTime = () => {
  const [time, setTime] = useState(0);
  const getTime = () => {
    const current = new Date().toLocaleTimeString('en-us', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(current);
  };

  useEffect(() => {
    setInterval(getTime, 1000);
    return () => {
      setInterval(getTime, 1000);
    };
  }, []);

  // const hour = {time.toLocaleString().split('0')[0]}

  return (
    <TimeTable
      hour={time.toLocaleString().split(':')[0]}
      minute={time.toLocaleString().split(':')[1]}
    />
  );
};

export default CurrentTime;
