import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const TimerContainer = styled.div`
  width: 122px;
  height: 122px;
  position: relative;
  p {
    position: absolute;
    width: 122px;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    line-height: 124px;
  }
`;

export const CircleContainer = styled.svg`
  width: 122px;
  height: 122px;
  circle {
    stroke: ${Colors.WHITE};
    stroke-width: 16px;
    border-radius: 116px;
    transform-origin: center;
    fill: transparent;
    transform: rotate(-90deg);
    transition: stroke-dashoffest 0.3s;
  }
`;
