import styled from 'styled-components';

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
  margin-bottom: 327px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    margin-bottom: 0px;
  }

  @media (max-height: 1600px) {
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
  @media (max-width: 1024px) {
    flex-direction: column;
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
  @media (max-width: 1024px) {
    padding-left: 0px;
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
  @media (max-width: 1024px) {
    padding-left: 0px;
  }
`;

export const PrimaryPicture = styled.div`
  min-width: 404px;
  min-height: 520px;
  background: rgba(255, 255, 255, 0.39);
  backdrop-filter: blur(4px);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SoundPictureWrapper = styled.div`
  width: 96px;
  height: 96px;
  background: #fff;
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
  background: #fd1e1e;

  p {
    font-size: 45px;
    font-weight: 300;
    color: #fff;
  }
`;

export const Picture = styled(PrimaryPicture)`
  justify-content: flex-start;
  background: #fff;
`;

export const WordWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const PlayAudioInAnswerCard = styled.div`
  width: 20%;
  height: 100%;
  padding-top: 27px;
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
    margin-top: 22px;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: #000000;
  }

  .translate {
    margin-right: 53px;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: #9b9b9b;
  }
`;

export const AnswerButton = styled.button`
  width: 328px;
  height: 58px;
  padding-left: 52px;
  background: linear-gradient(1.8deg, #fefefe -43.56%, #e6e6e6 123.62%);
  box-shadow: 3px 4px 11px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.015em;
  color: #000;
  display: flex;
  align-items: center;
  gap: 15px;

  &.correct {
    border: 2px solid #fff;
    background: linear-gradient(0.16deg, #4ee57e -94.42%, #07d6a0 321.64%);
  }

  &.wrong {
    color: #fd1e1e;
  }

  &.current {
    color: green;
  }
`;

export const SkipQuestion = styled(AnswerButton)`
  min-width: 328px;
  padding: 4px 97px;
  background: #ffffff;
  border-radius: 38px;
`;
