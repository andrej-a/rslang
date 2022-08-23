import styled from 'styled-components';
import { Button } from '@mui/material';

import { Colors } from '../../../styles/constansts';

export const SprintGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: auto;
  color: ${Colors.WHITE};
  margin-bottom: 140px;
`;

export const GameContent = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 500;
    font-size: 40px;
    line-height: 40px;
  }
  p {
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    margin-left: 116px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
  }
  @media (max-width: 500px) {
    gap: 0;
  }
`;

export const GameLifes = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 10px;
  div {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 3px solid ${Colors.WHITE};
    background-color: transparent;
    &.active {
      background-color: ${Colors.WHITE};
    }
  }
`;
export const GameCard = styled.div`
  width: 460px;
  height: 240px;
  color: ${Colors.BLACK};
  background-color: ${Colors.WHITE};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 500px) {
    width: 320px;
    height: 200px;
  }
`;
export const EngWord = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 28px;
`;
export const RuWord = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 42px;
  @media (max-width: 500px) {
    gap: 20px;
  }
`;
export const ButtonRight = styled(Button)`
  &.MuiButton-contained {
    width: 178px;
    height: 58px;
    background-color: ${Colors.LIGHT_GREEN};
    border-radius: 4px;
    transition: all 0.3s ease;
    @media (max-width: 500px) {
      width: 140px;
      height: 40px;
    }
  }
  &.MuiButton-contained:hover {
    box-shadow: 2px 4px 10px rgba(114, 114, 114, 0.5);
    background-color: ${Colors.LIGHT_GREEN};
  }
`;
export const ButtonWrong = styled(Button)`
  &.MuiButton-contained {
    width: 178px;
    height: 58px;
    background-color: ${Colors.RED};
    border-radius: 4px;
    transition: all 0.3s ease;
    @media (max-width: 500px) {
      width: 140px;
      height: 40px;
    }
  }
  &.MuiButton-contained:hover {
    box-shadow: 2px 4px 10px rgba(114, 114, 114, 0.5);
    background-color: ${Colors.RED};
  }
`;
