import React from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import Audio from '../../../assets/AudioBlack.svg';
import CorrectAnswer from '../../../assets/CorrectAnswer.svg';
import TestAnswerPicture from '../../../assets/test_answer.jpg';
import {
  AnswerButton,
  AudioChallengeWrapper,
  ButtonBlock,
  InnerBlock,
  MainBlock,
  Picture,
  PictureBlock,
  PlayAudioInAnswerCard,
  PrimaryPicture,
  RedCircle,
  SkipQuestion,
  SoundPictureWrapper,
  Word,
  WordWrapper,
  WrongAnswerPictureWrapper,
} from './AudioChallengeGame.styled';

const AudioChallengeGame = () => {
  return (
    <AudioChallengeWrapper>
      <MainBlock>
        <ProgressBar percent={10} />
        <InnerBlock>
          <ButtonBlock>
            <AnswerButton className="current">Current variant</AnswerButton>
            <AnswerButton className="correct">Correct variant</AnswerButton>
            <AnswerButton className="wrong">Wrong variant</AnswerButton>
            <AnswerButton>Variant</AnswerButton>
            <SkipQuestion>Don`t know</SkipQuestion>
          </ButtonBlock>
          <PictureBlock>
            {/*             <PrimaryPicture>
              <WrongAnswerPictureWrapper>
                <RedCircle>
                  <p>X</p>
                </RedCircle>
              </WrongAnswerPictureWrapper>
              <SoundPictureWrapper>
                <img src={CorrectAnswer} alt="correct_answer" />
              </SoundPictureWrapper>
              <SoundPictureWrapper>
                <img src={Audio} alt="play_button" />
              </SoundPictureWrapper>
            </PrimaryPicture>
 */}
            <Picture>
              <img src={TestAnswerPicture} alt="word_picture" />
              <WordWrapper>
                <PlayAudioInAnswerCard>
                  <img src={Audio} alt="play_button" />
                </PlayAudioInAnswerCard>
                <Word>
                  <p className="word">Academic</p>
                  <p className="translate">Перевод</p>
                </Word>
              </WordWrapper>
            </Picture>
          </PictureBlock>
        </InnerBlock>
      </MainBlock>
    </AudioChallengeWrapper>
  );
};

export default AudioChallengeGame;
