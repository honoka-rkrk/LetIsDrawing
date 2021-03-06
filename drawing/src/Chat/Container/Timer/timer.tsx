import React, { useState, useEffect, useCallback } from 'react';
import moment, { Moment } from 'moment';
import { useHistory } from 'react-router-dom';

import CompTimer from '../../Component/Timer/timer';

const Timer: React.FC = () => {
  const [clock, setClock] = useState<Moment | null>(null);
  const [end, setEnd] = useState<Moment | null>(null);
  const [tmMinutes, setTmMinutes] = useState<string>('');
  const [tmSeconds, setTmSeconds] = useState<string>('');
  const [danger, setDanger] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    const dtNow = moment().startOf('day');
    // const endTime = dtNow.add(18, 'hours');
    const endTime = moment().add(18, 'seconds');
    setEnd(endTime);
  }, [setEnd]);

  const updateTime = useCallback(async () => {
    const dtNow = moment();
    if (end) {
      const timerDiff = end.diff(dtNow, 'second');
      setTmMinutes(String(Math.floor(timerDiff / 60)));
      setTmSeconds(String(timerDiff % 60));
      if (timerDiff === 0) {
        setIsEnd(true);
      }
      if (Math.floor(timerDiff / 60) <= 5) {
        setDanger(true);
      }
      setClock(dtNow);
    }
  }, [end]);

  useEffect(() => {
    if (!isEnd) {
      const updateTimeId = setInterval(updateTime, 500);
      updateTime();
      return () => {
        clearInterval(updateTimeId);
      };
    } else {
      return;
    }
  }, [updateTime]);

  const clickOK = useCallback(() => {
    history.push('/upload');
  }, []);

  return (
    <CompTimer
      tmMinutes={tmMinutes}
      tmSeconds={tmSeconds}
      danger={danger}
      isEnd={isEnd}
      clickOK={clickOK}
    />
  );
};

export default Timer;
