import React, { useState } from 'react';
import { ProgressBarInfo } from '../../styles/constansts';

import { CircleContainer, ProgressBarContainer } from './ProgressBar.styled';

type Props = {
  percent: number;
  color: string;
  diametr?: number;
  strokeWidth?: number;
};

const ProgressBar = ({
  percent,
  color,
  diametr = ProgressBarInfo.SIZE_MEDIUM,
  strokeWidth = 4,
}: Props) => {
  const radius = diametr / 2 - strokeWidth * 2;
  const circumference = ProgressBarInfo.FOR_CIRCLE_LENGTH * radius;
  const offset = circumference - (percent / ProgressBarInfo.PERSENT) * circumference;
  const [offsetNew, setOffset] = useState(offset);

  return (
    <ProgressBarContainer className="Container" radius={radius} strokeWidth={strokeWidth}>
      <p>{percent}%</p>
      <CircleContainer radius={radius} strokeWidth={strokeWidth}>
        <circle r={radius} cy={radius + strokeWidth} cx={radius + strokeWidth} stroke={color} />
        <circle
          className="active"
          r={radius}
          cy={radius + strokeWidth}
          cx={radius + strokeWidth}
          strokeDasharray={`${circumference - offset} ${offset}`}
        ></circle>
      </CircleContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
