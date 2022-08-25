import React, { useState } from 'react';
import { ProgressBarInfo } from '../../styles/constansts';

import { CircleContainer, ProgressBarContainer } from './ProgressBar.styled';

type Props = {
  percent: number;
  color: string;
};

const ProgressBar = ({ percent, color }: Props) => {
  const radius = ProgressBarInfo.SIZE_MEDIUM;
  const circumference = ProgressBarInfo.FOR_CIRCLE_LENGTH * radius;
  const offset = circumference - (percent / ProgressBarInfo.PERSENT) * circumference;
  const [offsetNew, setOffset] = useState(offset);

  return (
    <ProgressBarContainer>
      <p>{percent}%</p>
      <CircleContainer>
        <circle r={radius} cy={61} cx={61} stroke={color} />
        <circle
          className="active"
          r={radius}
          cy={61}
          cx={61}
          strokeDashoffset={offsetNew}
          strokeDasharray={`${circumference} ${circumference}`}
        ></circle>
      </CircleContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
