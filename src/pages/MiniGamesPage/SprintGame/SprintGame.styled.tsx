import styled from 'styled-components';
import { Button } from '@mui/material';

import { Colors } from '../../../styles/constansts';

export const GameContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  color: ${Colors.WHITE};
  padding-left: 10%;
  padding-bottom: 100px;
  @media (max-width: 700px) {
    padding-left: 0;
  }
`;
export const SprintGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  color: ${Colors.WHITE};
  padding-left: 10%;
  padding-bottom: 100px;
  @media (max-width: 700px) {
    padding-left: 0;
  }
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
export const RuWord = styled(EngWord)``;
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 42px;
  @media (max-width: 500px) {
    gap: 20px;
  }
`;
export const ButtonAnswer = styled(Button)`
  &.MuiButton-contained {
    border-radius: 4px;
    transition: all 0.3s ease;
    color: ${Colors.WHITE};
  }
`;
