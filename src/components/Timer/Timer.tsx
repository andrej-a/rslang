import React, { useEffect, useState } from 'react';
import { ProgressBarInfo, TimerInfo } from '../../styles/constansts';

import { CircleContainer, TimerContainer } from '../Timer/Timer.styled';

interface ITimerProps {
  playMode: boolean;
  setPlayMode: (playMode: boolean) => void;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  className: string;
}

const Timer = ({ playMode, setPlayMode, isActive, setIsActive, className }: ITimerProps) => {
  const timeLimit = TimerInfo.TIMER_LIMIT_MINUTE;
  const [counter, setCounter] = useState(timeLimit);
  const radius = TimerInfo.SIZE_MEDIUM;
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
    if (counter < 0) {
      setPlayMode(false);
      setIsActive(true);
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
    <TimerContainer className={className}>
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
