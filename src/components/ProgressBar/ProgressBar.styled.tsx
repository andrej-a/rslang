import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const ProgressBarContainer = styled.div`
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

export const CircleContainer = styled.svg.attrs((props: { stroke: string }) => props)`
  position: relative;
  z-index: 100;
  width: 122px;
  height: 122px;
  circle {
    stroke: ${(props) => props.stroke};
    stroke-width: 4px;
    border-radius: 116px;
    transform-origin: center;
    fill: transparent;
    transform: rotate(-90deg);
    transition: stroke-dashoffest 0.3s;
    z-index: 10;
    &.active {
      stroke: ${Colors.GREEN};
      z-index: 100;
    }
  }
`;
