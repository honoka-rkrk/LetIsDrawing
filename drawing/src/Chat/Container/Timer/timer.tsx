import React, { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from 'moment';

import CompTimer from '../../Component/Timer/timer';

const Timer: React.FC = () => {
  const [clock, setClock] = useState<Moment | null>(null);
  const [end, setEnd] = useState<Moment | null>(null);
  const [tmMinutes, setTmMinutes] = useState<string>('');
  const [tmSeconds, setTmSeconds] = useState<string>('');
  const [danger, setDanger] = useState<boolean>(false);

  useEffect(() => {
    const dtNow = moment().startOf('day');
    const endTime = dtNow.add(18, 'hours');
    setEnd(endTime);
  }, [setEnd]);

  const updateTime = useCallback(async () => {
    const dtNow = moment();
    if (end) {
      const timerDiff = end.diff('second');
      setTmMinutes(String(Math.floor(timerDiff / 60)));
      setTmSeconds(String(timerDiff % 60));
      if (Math.floor(timerDiff / 60) <= 5) {
        setDanger(true);
      }
      setClock(dtNow);
    }
  }, [[setTmMinutes, setTmSeconds]]);

  useEffect(() => {
    const updateTimeId = setInterval(updateTime, 500);
    updateTime();
    return () => {
      clearInterval(updateTimeId);
    };
  }, [updateTime]);

  return <CompTimer tmMinutes={tmMinutes} tmSeconds={tmSeconds} danger={danger} />;
};

export default Timer;
