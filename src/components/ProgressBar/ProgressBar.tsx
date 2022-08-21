import React, { useState } from 'react';

import { CircleContainer, ProgressBarContainer } from './ProgressBar.styled';

type Props = {
  percent: number;
};

const ProgressBar = ({ percent }: Props) => {

  const radius = 53;
  const circumference = Math.PI * 2 * radius;
  const offset = circumference - percent / 100 * circumference;
  const [offsetNew, setOffset] = useState(offset);
  
  return (
    <ProgressBarContainer>
      <p>{percent}%</p>
      <CircleContainer>
        <circle r={radius} cy={61} cx={61} strokeDashoffset={offsetNew} strokeDasharray={`${circumference} ${circumference}`} ></circle>
      </CircleContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;