import React, { useEffect, useState } from 'react';
import { ProgressBarInfo } from '../../styles/constansts';

import { CircleContainer, TimerContainer } from '../Timer/Timer.styled';

type Props = {
  percent: number;
};

const Timer = () => {
  const timeLimit = 60;
  const [counter, setCounter] = useState(timeLimit);
  const radius = ProgressBarInfo.SIZE_MEDIUM;
  const circumference = ProgressBarInfo.FOR_CIRCLE_LENGTH * radius;
  const [offset, setOffset] = useState(timeLimit);

  useEffect(() => {
    if (counter >= 0) {
      const id = setTimeout(() => {
        setCounter(counter - 1);
        setOffset(circumference - (counter / timeLimit) * circumference);
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
    return undefined;
  }, [circumference, counter, timeLimit]);

  const formatTimeLeft = (time: number) => {
    if (time <= 0) return '0:00';
    const minutes = Math.floor(time / timeLimit);
    let seconds: number | string = time % timeLimit;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${minutes}:${seconds}`;
  };

  return (
    <TimerContainer>
      <p>{formatTimeLeft(counter)}</p>
      <CircleContainer>
        <circle
          r={radius}
          cy={61}
          cx={61}
          strokeDashoffset={offset}
          strokeDasharray={`${circumference} ${circumference}`}
        ></circle>
      </CircleContainer>
    </TimerContainer>
  );
};

export default Timer;
