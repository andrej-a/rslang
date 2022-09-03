import styled from 'styled-components';
import '../../../index.scss';
import { Colors, WindowSizes } from '../../../styles/constansts';
const { laptop, tablet, ultraWidth } = WindowSizes;
const {
  PRIMARY_PICTURE_GREY,
  WHITE,
  GREY_GRADIENT,
  BLACK,
  DISABLED,
  RED,
  GREEN,
  LIGHT_GREY,
  PLAY_BUTTON_GRADIENT,
} = Colors;

export const AudioChallengeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainBlock = styled.div`
  min-width: 280px;
  min-height: 400px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${laptop}px) {
    margin-bottom: 0px;
  }
`;

export const InnerBlock = styled.div`
  width: 80%;
  min-height: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: ${laptop}px) {
    flex-direction: column-reverse;
  }
`;

export const ButtonBlock = styled.div`
  width: 50%;
  height: auto;
  padding-left: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;

  @media (max-width: ${laptop}px) {
    padding-left: 0px;
  }
  @media (min-width: ${ultraWidth}px) {
    align-items: flex-end;
  }
`;

export const AnswerButton = styled.button`
  width: 328px;
  height: 58px;
  padding-left: 52px;
  background: ${GREY_GRADIENT};
  box-shadow: 3px 4px 11px ${BLACK};
  border-radius: 15px;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.015em;
  color: ${BLACK};

  &.correct {
    border: 2px solid ${WHITE};
    background: ${PLAY_BUTTON_GRADIENT};
    color: ${WHITE};
    &:hover {
      color: ${WHITE};
    }
  }

  &.wrong {
    color: ${RED};
    &:hover {
      color: ${RED};
    }
  }

  &:hover {
    color: ${GREEN};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${tablet}px) {
    width: 280px;
  }
`;

export const SkipQuestion = styled(AnswerButton)`
  width: 328px;
  background: ${WHITE};
  border-radius: 38px;
  padding-left: 0;
  justify-content: center;
  &:disabled {
    cursor: not-allowed;
    &:hover {
      color: ${BLACK};
    }
  }
  @media (max-width: ${tablet}px) {
    width: 280px;
  }
`;

export const PictureBlock = styled.div`
  width: 50%;
  height: auto;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${laptop}px) {
    padding-left: 0px;
  }
  @media (min-width: ${ultraWidth}px) {
    align-items: flex-start;
  }
`;

export const PrimaryPicture = styled.div`
  width: 404px;
  height: 520px;
  background: ${PRIMARY_PICTURE_GREY};
  backdrop-filter: blur(4px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${tablet}px) {
    width: 280px;
  }
`;

export const SoundPictureWrapper = styled.div`
  width: 96px;
  height: 96px;
  background: ${WHITE};
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const WrongAnswerPictureWrapper = styled(SoundPictureWrapper)``;
export const RedCircle = styled(SoundPictureWrapper)`
  width: 72px;
  height: 72px;
  background: ${RED};

  p {
    font-size: 45px;
    font-weight: 300;
    color: ${WHITE};
  }
`;

export const Picture = styled(PrimaryPicture)`
  justify-content: flex-start;
  background: ${WHITE};
  @media (max-width: ${tablet}px) {
    width: 280px;
  }

  .answer_picture {
    min-height: 350px;
    width: 100%;
    @media (max-width: ${tablet}px) {
      width: 280px;
    }
  }
`;

export const WordWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${tablet}px) {
    gap: 20px;
  }
`;

export const PlayAudioInAnswerCard = styled.div`
  width: 20%;
  height: 100%;
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Word = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .word {
    margin-right: 53px;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: ${BLACK};
  }

  .translate {
    margin-right: 53px;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: ${LIGHT_GREY};
  }
`;

export const NextButtonWrapper = styled.div`
  max-width: 404px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 51px;

  @media (min-width: ${ultraWidth}px) {
    justify-content: center;
  }

  @media (max-width: ${laptop}px) {
    justify-content: center;
    padding-top: 15px;
  }
`;
export const NextButton = styled.button`
  width: 189px;
  height: 46px;
  background: ${WHITE};
  border-radius: 46px;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.015em;
  color: ${BLACK};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${GREEN};
  }

  &:disabled {
    background: ${DISABLED};
    cursor: not-allowed;
    color: ${BLACK};
  }
  @media (min-width: ${ultraWidth}px) {
    margin-right: 0;
  }

  @media (max-width: ${laptop}px) {
    margin-right: 0;
  }
`;

export const ProgressBarWrapper = styled(NextButtonWrapper)`
  padding-top: 0;
  margin-top: 80px;
  margin-bottom: 15px;

  @media (min-width: ${ultraWidth}px) {
    padding-right: 0;
  }

  @media (max-width: ${laptop}px) {
    padding-right: 0;
  }
`;
