import styled from 'styled-components';
import { Colors } from '../../../styles/constansts';

export const SprintGameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 198px;
  color: ${Colors.WHITE};
`;

export const GameContent = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  gap: 24px;
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
`;

export const GameLifes = styled.div`
  display: flex;
  gap: 18px;
  div {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 3px solid ${Colors.WHITE};
    background-color: transparent;
  }
`;
export const GameCard = styled.div`
  width: 484px;
  height: 278px;
  color: ${Colors.BLACK};
  background-color: ${Colors.WHITE};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
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
`;
export const ButtonRight = styled.button`
  width: 178px;
  height: 58px;
  border-radius: 4px;
  color: ${Colors.WHITE};
  background-color: ${Colors.LIGHT_GREEN};
`;
export const ButtonWrong = styled(ButtonRight)`
  background-color: ${Colors.RED};
`;
