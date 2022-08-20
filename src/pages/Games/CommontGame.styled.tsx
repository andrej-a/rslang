import styled from 'styled-components';

import { Colors } from '../../styles/constansts';

export const GameWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  height: 100vh;
  color: ${Colors.WHITE};
  h2{
    font-size:30px;
  }
  h3{
    font-size:24px;
    font-weight: 400;
  }
`;

export const GameImage = styled.div`
  display: flex;
`;

export const LevelDiv = styled.div`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LevelButtonsContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 10px;
  flex-wrap:wrap;
`;

export const LevelButton = styled.button`
  width: 52px;
  height: 52px;
  border: 3px solid ${Colors.WHITE};
  font-weight: 500;
  color: ${Colors.WHITE};
  background: transparent;
  border-radius: 4px;
  &:hover {
    color: ${Colors.BLACK};
    background: ${Colors.WHITE};
  }
`;