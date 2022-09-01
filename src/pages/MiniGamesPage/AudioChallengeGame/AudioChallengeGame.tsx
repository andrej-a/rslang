import React, { useState, useContext, useEffect } from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

import AudioImage from '../../../assets/AudioBlack.svg';
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
import { IWord } from '../../../models/IWord';
import { getWords } from '../../../service/getWords';

const AudioChallengeGame = () => {
  //тут отслеживание футера и его скрытие в игре
  const { onSetFooterVisibility, currentPage, wordsGroup, onSetTextBookWords, textBookWords } =
    useContext(ApplicationContext);

  useEffect(() => {
    onSetFooterVisibility(false);
    getWords(wordsGroup, currentPage - 1).then((data) =>
      onSetTextBookWords(data as unknown as IWord[]),
    );
  }, []);
  //текущее слово для ответа
  const [currentWord, setCurrentWord] = useState(textBookWords[0]);
  //отслеживание слова в массиве
  const [wordNumber, setWordNumber] = useState(0);
  //процент прогресса
  const [progressPercent, setProgressPercent] = useState(0);

  const onSetCurrentWord = (word: IWord) => {
    setCurrentWord(word);
  };

  const onSetWordNumber = (number: number) => {
    setWordNumber(number);
  };

  const onSetProgressPercent = (percent: number) => {
    setProgressPercent(percent);
  };

  useEffect(() => {
    onSetCurrentWord(textBookWords[wordNumber]);
    console.log(currentWord, 'PREVIOUS');
  }, [textBookWords]);

  useEffect(() => {
    onSetCurrentWord(textBookWords[wordNumber]);
    onSetProgressPercent(Math.floor((wordNumber / 20) * 100));
    //здесь делакм рандомный массив ответов
    console.log(currentWord, 'AFTER CHANGE');
  }, [wordNumber]);

  return (
    <AudioChallengeWrapper>
      <MainBlock>
        <InnerBlock>
          <ButtonBlock>
            <AnswerButton>Current variant</AnswerButton>
            <AnswerButton className="correct">Correct variant</AnswerButton>
            <AnswerButton className="wrong">Wrong variant</AnswerButton>
            <AnswerButton>Variant</AnswerButton>
            <SkipQuestion>Don`t know</SkipQuestion>
          </ButtonBlock>
          <PictureBlock>
            <ProgressBarWrapper>
              <ProgressBar percent={progressPercent} color={Colors.WHITE as string} />
            </ProgressBarWrapper>
            <PrimaryPicture>
              {/*               <WrongAnswerPictureWrapper>
                <RedCircle>
                  <p>X</p>
                </RedCircle>
              </WrongAnswerPictureWrapper>
              <SoundPictureWrapper>
                <img src={CorrectAnswer} alt="correct_answer" />
              </SoundPictureWrapper>
 */}{' '}
              <SoundPictureWrapper
                onClick={() => {
                  const audioExample = new Audio(
                    `https://react-rslang-back.herokuapp.com/${currentWord.audio}`,
                  );
                  audioExample.play();
                }}
              >
                <img src={AudioImage} alt="play_button" />
              </SoundPictureWrapper>
            </PrimaryPicture>
            {/* тут будет либо primary подложка (если ответа еще не было), либо картинка от слова */}
            {/*             <Picture>
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
 */}{' '}
            <NextButtonWrapper>
              <NextButton
                onClick={() => {
                  const nextNumber = wordNumber === 20 ? wordNumber : wordNumber + 1;
                  onSetWordNumber(nextNumber);
                }}
              >
                Next
              </NextButton>
            </NextButtonWrapper>
          </PictureBlock>
        </InnerBlock>
      </MainBlock>
    </AudioChallengeWrapper>
  );
};

export default AudioChallengeGame;
