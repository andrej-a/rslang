import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const ProgressBarContainer = styled.div.attrs(
  (props: { radius: number; strokeWidth: number }) => props,
)`
  width: calc((${(props) => props.radius + props.strokeWidth * 2}px) * 2);
  height: calc((${(props) => props.radius + props.strokeWidth * 2}px) * 2);
  position: relative;
  p {
    position: absolute;
    width: calc((${(props) => props.radius + props.strokeWidth * 2}px) * 2);
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    line-height: calc((${(props) => props.radius + props.strokeWidth * 2}px + 1px) * 2);
  }
`;

export const CircleContainer = styled.svg.attrs(
  (props: { stroke: string; radius: number; strokeWidth: number }) => props,
)`
  position: relative;
  z-index: 100;
  width: calc((${(props) => props.radius + props.strokeWidth * 2}px) * 2);
  height: calc((${(props) => props.radius + props.strokeWidth * 2}px) * 2);
  circle {
    stroke: ${(props) => props.stroke};
    stroke-width: ${(props) => props.strokeWidth}px;
    border-radius: calc((${(props) => props.radius + props.strokeWidth * 2}px - 3px) * 2);
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
