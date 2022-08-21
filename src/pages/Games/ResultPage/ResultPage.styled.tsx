import styled from 'styled-components';

import { GreenButton } from '../../../components/Buttons.styled';
import { Colors } from '../../../styles/constansts';

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${Colors.WHITE};
  width: 510px;
  height: 494px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 4px;
  @media (max-width: 560px) {
    width: 320px;
    gap: 0px;
  }
`;
export const HeaderButtonContainer = styled.div`
  display: flex;
  gap: 52px;
`;
export const SeeResultButton = styled.button`
  font-size: 24px;
  font-weight: 400;
  color: ${Colors.GRAY};
  background-color: transparent;
  border: none;
  transition: all 0.3s;
  &.active,
  &:hover {
    color: ${Colors.BLACK};
  }
  &.active {
    border-bottom: 3px solid ${Colors.BLACK};
  }
`;
export const SeeWordButton = styled(SeeResultButton)``;

export const ResultViewWindowContainer = styled.div`
  height: 308px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  h4 {
    width: 316px;
    font-weight: 500;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    @media (max-width: 560px) {
      margin-top: 16px;
      width: 280px;
    }
  }
  @media (max-width: 560px) {
    gap: 10px;
  }
`;
export const ResultTextInfo = styled.p``;
export const ResultStatistic = styled.div`
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 166px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const CircleStatistic = styled.div`
  width: 124px;
  height: 124px;
  background-color: ${Colors.GREEN};
  border-radius: 50%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 44px;
  @media (max-width: 560px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
`;
export const PlayAgainButton = styled(GreenButton)`
  width: 188px;
  @media (max-width: 560px) {
    height: 36px;
  }
`;
export const ToTextbookButton = styled(PlayAgainButton)``;
export const WorldViewWindowContainer = styled.div`
  display: flex;
  width: 300px;
  height: 276px;
  flex-direction: column;
  margin: 16px 0;
  overflow-y: scroll;
  gap: 16px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #d9d9d9;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a5a5a5;
    border-radius: 4px;
  }
  @media (max-width: 560px) {
    width: 280px;
  }
`;
export const RightAnswers = styled.ul``;
export const RightAnswersTitle = styled.p`
  width: fit-content;
  padding-bottom: 4px;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  margin-top: 10px;
  border-bottom: 3px solid ${Colors.LIGHT_GREEN};
`;
export const WrongAnswersTitle = styled(RightAnswersTitle)`
  border-bottom: 3px solid ${Colors.RED};
`;
export const RightAnswersContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const WrongAnswersContainer = styled(RightAnswersContainer)``;
export const Word = styled.li`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  line-height: 40px;
`;
export const AudioButton = styled.button`
  background-color: transparent;
  margin-right: 16px;
  cursor: pointer;
`;
export const WordEng = styled.p`
  display: flex;
`;
export const WordRu = styled.p`
  display: flex;
  color: ${Colors.GRAY};
  letter-spacing: 0.02em;
`;
