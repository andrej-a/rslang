/* eslint-disable @typescript-eslint/indent */
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
import { shuffle } from '../../../utils/shuffleArray';
import { Capitalize } from '../../../utils/utils';
import { getRandomWordsFromArray } from '../../../utils/getRandomWordsFromArray';
import ResultPage from '../ResultPage/ResultPage';

const AudioChallengeGame = () => {
  //тут отслеживание футера и его скрытие в игре
  const { onSetFooterVisibility, currentPage, wordsGroup, onSetTextBookWords, textBookWords } =
    useContext(ApplicationContext);

  useEffect(() => {
    onSetFooterVisibility(false);
    getWords(wordsGroup, currentPage - 1)
      .then((data) => shuffle(data as unknown as IWord[]))
      .then((data) => onSetTextBookWords(data as unknown as IWord[]));
  }, []);
  //текущее слово для ответа
  const [currentWord, setCurrentWord] = useState(textBookWords[0]);
  //отслеживание слова в массиве
  const [wordNumber, setWordNumber] = useState(0);
  //процент прогресса
  const [progressPercent, setProgressPercent] = useState(0);
  //массив рандомных ответов с одним правильным
  const [randomArray, setRandomArray] = useState<IWord[]>([]);
  //смотрим, ответил ли пользователь
  const [isAnswered, setIsAnswered] = useState(false);
  //смотрим, верный ли ответ
  const [statusAnswered, setStatusAnswered] = useState('');
  //показываем ответ
  const [showAnswer, setShowAnswer] = useState(false);
  //правильные и неправильные ответы
  const [correctAnswers, setCorrectAnswers] = useState<IWord[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<IWord[]>([]);
  const onSetCurrentWord = (word: IWord) => {
    setCurrentWord(word);
  };

  const onSetWordNumber = (number: number) => {
    setWordNumber(number);
  };

  const onSetProgressPercent = (percent: number) => {
    setProgressPercent(percent);
  };

  const onSetRandomArray = (data: IWord[]) => {
    setRandomArray(data);
  };

  const onSetIsAnswered = (value: boolean) => {
    setIsAnswered(value);
  };

  const onSetStatusAnswered = (value: string) => {
    setStatusAnswered(value);
  };

  const onSetShowAnswer = (value: boolean) => {
    setShowAnswer(value);
  };

  const onSetCorrectAnswers = (value: IWord) => {
    setCorrectAnswers([...correctAnswers, value]);
  };

  const onSetWrongAnswers = (value: IWord) => {
    setWrongAnswers([...wrongAnswers, value]);
  };

  useEffect(() => {
    onSetFooterVisibility(false);
    onSetCurrentWord(textBookWords[wordNumber]);
    onSetProgressPercent(Math.ceil((wordNumber / textBookWords.length) * 100));
    onSetRandomArray([]);
    if (currentWord) {
      onSetRandomArray(
        shuffle([...getRandomWordsFromArray(textBookWords, 4, currentWord), currentWord]),
      );
    }
  }, [wordNumber, currentWord, textBookWords]);

  useEffect(() => {
    if (currentWord && wordNumber <= textBookWords.length) {
      const audioExample = new Audio(
        `https://react-rslang-back.herokuapp.com/${currentWord.audio}`,
      );
      audioExample.play();
    }
  }, [currentWord]);

  const buttons = randomArray.map((item) => {
    return (
      <AnswerButton
        className={
          isAnswered && item.id === currentWord.id && statusAnswered
            ? 'correct'
            : isAnswered && item.id !== currentWord.id && statusAnswered
            ? 'wrong'
            : ''
        }
        onClick={() => {
          onSetIsAnswered(true);
          if (item.id === currentWord.id) {
            onSetStatusAnswered('correct');
            onSetCorrectAnswers(currentWord);
          } else {
            onSetStatusAnswered('wrong');
            onSetWrongAnswers(currentWord);
          }
          setTimeout(() => {
            onSetShowAnswer(true);
          }, 1000);
        }}
        key={item.id}
      >
        {Capitalize(item.wordTranslate)}
      </AnswerButton>
    );
  });
  return (
    <AudioChallengeWrapper>
      {textBookWords.length && wordNumber < 20 && (
        <MainBlock>
          <InnerBlock>
            <ButtonBlock>
              {buttons}
              <SkipQuestion
                onClick={() => {
                  onSetIsAnswered(true);
                  onSetStatusAnswered('wrong');
                  onSetWrongAnswers(currentWord);
                  setTimeout(() => {
                    onSetShowAnswer(true);
                  }, 1000);
                }}
              >
                {'Я не знаю :('}
              </SkipQuestion>
            </ButtonBlock>
            <PictureBlock>
              <ProgressBarWrapper>
                <ProgressBar percent={progressPercent} color={Colors.WHITE as string} />
              </ProgressBarWrapper>

              {!showAnswer && (
                <PrimaryPicture>
                  {statusAnswered === 'wrong' && (
                    <WrongAnswerPictureWrapper>
                      <RedCircle>
                        <p>X</p>
                      </RedCircle>
                    </WrongAnswerPictureWrapper>
                  )}
                  {statusAnswered === 'correct' && (
                    <SoundPictureWrapper>
                      <img src={CorrectAnswer} alt="correct_answer" />
                    </SoundPictureWrapper>
                  )}

                  {!statusAnswered && (
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
                  )}
                </PrimaryPicture>
              )}

              {showAnswer && (
                <Picture>
                  <img
                    className="answer_picture"
                    src={`https://react-rslang-back.herokuapp.com/${currentWord.image}`}
                    alt="word_picture"
                  />
                  <WordWrapper>
                    <PlayAudioInAnswerCard
                      onClick={() => {
                        const audioExample = new Audio(
                          `https://react-rslang-back.herokuapp.com/${currentWord.audio}`,
                        );
                        audioExample.play();
                      }}
                    >
                      <img src={AudioImage} alt="play_button" />
                    </PlayAudioInAnswerCard>
                    <Word>
                      <p className="word">{currentWord.word}</p>
                      <p className="translate">{currentWord.wordTranslate}</p>
                    </Word>
                  </WordWrapper>
                </Picture>
              )}

              <NextButtonWrapper>
                <NextButton
                  disabled={!isAnswered}
                  onClick={() => {
                    const nextNumber =
                      wordNumber === textBookWords.length ? wordNumber : wordNumber + 1;
                    onSetWordNumber(nextNumber);
                    onSetIsAnswered(false);
                    onSetStatusAnswered('');
                    onSetShowAnswer(false);
                  }}
                >
                  Next
                </NextButton>
              </NextButtonWrapper>
            </PictureBlock>
          </InnerBlock>
        </MainBlock>
      )}
      {wordNumber < 20 ? null : (
        <ResultPage correctAnswers={correctAnswers} wrongAnswers={wrongAnswers}></ResultPage>
      )}
    </AudioChallengeWrapper>
  );
};

export default AudioChallengeGame;
