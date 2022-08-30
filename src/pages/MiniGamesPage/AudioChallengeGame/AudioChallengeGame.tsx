import React, { useContext, useEffect } from 'react';

import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

import Audio from '../../../assets/AudioBlack.svg';
import CorrectAnswer from '../../../assets/CorrectAnswer.svg';
import TestAnswerPicture from '../../../assets/test_answer.jpg';

import { Colors } from '../../../styles/constansts';

import {
  AnswerButton,
  AudioChallengeWrapper,
  ButtonBlock,
  InnerBlock,
  MainBlock,
  NextButton,
  NextButtonWrapper,
  Picture,
  PictureBlock,
  PlayAudioInAnswerCard,
  PrimaryPicture,
  ProgressBarWrapper,
  RedCircle,
  SkipQuestion,
  SoundPictureWrapper,
  Word,
  WordWrapper,
  WrongAnswerPictureWrapper,
} from './AudioChallengeGame.styled';

const AudioChallengeGame = () => {
  const { onSetFooterVisibility } = useContext(ApplicationContext);
  useEffect(() => {
    onSetFooterVisibility(false);
  }, []);

  return (
    <AudioChallengeWrapper>
      <MainBlock>
        <InnerBlock>
          <ButtonBlock>
            <AnswerButton className="current">Current variant</AnswerButton>
            <AnswerButton className="correct">Correct variant</AnswerButton>
            <AnswerButton className="wrong">Wrong variant</AnswerButton>
            <AnswerButton>Variant</AnswerButton>
            <SkipQuestion>Don`t know</SkipQuestion>
          </ButtonBlock>
          <PictureBlock>
            <ProgressBarWrapper>
              <ProgressBar percent={10} color={Colors.WHITE as string} />
            </ProgressBarWrapper>
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
            */}{' '}
            {/* тут будет либо primary подложка (если ответа еще не было), либо картинка от слова */}
            <Picture>
              <img className="answer_picture" src={TestAnswerPicture} alt="word_picture" />
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
            <NextButtonWrapper>
              <NextButton>Next</NextButton>
            </NextButtonWrapper>
          </PictureBlock>
        </InnerBlock>
      </MainBlock>
    </AudioChallengeWrapper>
  );
};

export default AudioChallengeGame;
