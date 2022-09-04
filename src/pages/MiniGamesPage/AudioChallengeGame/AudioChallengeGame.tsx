/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
import React, { useState, useContext, useEffect, useRef } from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

import AudioImage from '../../../assets/AudioBlack.svg';
import CorrectAnswer from '../../../assets/CorrectAnswer.svg';
import TestAnswerPicture from '../../../assets/test_answer.jpg';
import MoonLoader from 'react-spinners/MoonLoader';

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
import { getNoStudiedWordsFromServer } from '../../../utils/getNoStudiedWordsFromServer';
import { UpdateOrCreateUserWord } from '../../../service/userWords';
const defaultWord = {
  audio: 'files/01_0002.mp3',
  audioExample: 'files/01_0002_example.mp3',
  audioMeaning: 'files/01_0002_meaning.mp3',
  group: 0,
  id: '5e9f5ee35eb9e72bc21af4a0',
  image: 'files/01_0002.jpg',
  page: 0,
  textExample: 'A person should not drive a car after he or she has been drinking <b>alcohol</b>.',
  textExampleTranslate: 'Человек не должен водить машину после того, как он выпил алкоголь',
  textMeaning: '<i>Alcohol</i> is a type of drink that can make people drunk.',
  textMeaningTranslate: 'Алкоголь - это тип напитка, который может сделать людей пьяными',
  transcription: '[ǽlkəhɔ̀ːl]',
  word: 'alcohol',
  wordTranslate: 'алкоголь',
};
let sortedArray: IWord[] = [];
const AudioChallengeGame = () => {
  //тут отслеживание футера и его скрытие в игре
  const {
    onSetFooterVisibility,
    currentPage,
    wordsGroup,
    onSetTextBookWords,
    textBookWords,
    isAuthorized,
  } = useContext(ApplicationContext);

  //текущее слово для ответа
  const [currentWord, setCurrentWord] = useState(defaultWord);
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
  //disabled кнопок
  const [isDisabled, setIsDisabled] = useState(false);
  //окно результата
  const [showResult, setShowResult] = useState(false);

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

  const onSetDisabled = (value: boolean) => {
    setIsDisabled(value);
  };

  const onSetShowResult = (value: boolean) => {
    setShowResult(value);
  };

  useEffect(() => {
    onSetFooterVisibility(false);
    onSetShowResult(false);
    if (isAuthorized) {
      getNoStudiedWordsFromServer(wordsGroup, currentPage, sortedArray, 20).then((data) => {
        onSetTextBookWords(shuffle(data.items));
      });
    } else {
      console.log('NO AUTHORIZADE');
      getWords(wordsGroup, currentPage - 1)
        .then((data) => shuffle(data as unknown as IWord[]))
        .then((data) => onSetTextBookWords(data as unknown as IWord[]));
    }
    return () => {
      onSetTextBookWords([]);
      sortedArray = [];
    };
  }, []);

  useEffect(() => {
    onSetFooterVisibility(false);
    if (textBookWords.length) {
      onSetCurrentWord(textBookWords[wordNumber]);
    }
    onSetProgressPercent(Math.ceil((wordNumber / textBookWords.length) * 100));
    onSetRandomArray([]);
    if (currentWord && textBookWords.length > 0) {
      const maxWordsNumber = textBookWords.length > 4 ? 4 : textBookWords.length - 1;
      onSetRandomArray(
        shuffle([
          ...getRandomWordsFromArray(textBookWords, maxWordsNumber, currentWord),
          currentWord,
        ]),
      );
    }
  }, [wordNumber, currentWord, textBookWords]);

  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (Number(e.key) > 0 && Number(e.key) <= randomArray.length && !statusAnswered) {
        if (randomArray[+e.key - 1].id === currentWord.id) {
          onSetDisabled(true);
          onSetStatusAnswered('correct');
          onSetCorrectAnswers(currentWord);
        } else {
          onSetStatusAnswered('wrong');
          onSetWrongAnswers(currentWord);
        }
        setTimeout(() => {
          onSetIsAnswered(true);
          onSetShowAnswer(true);
        }, 1000);
      }
      if (e.code === 'Space') {
        const audioExample = new Audio(
          `https://react-rslang-back.herokuapp.com/${currentWord.audio}`,
        );
        audioExample.play();
      }
      if (e.code === 'Enter' && statusAnswered) {
        onSetDisabled(false);
        const nextNumber = wordNumber === textBookWords.length ? wordNumber : wordNumber + 1;
        onSetWordNumber(nextNumber);
        onSetIsAnswered(false);
        onSetStatusAnswered('');
        onSetShowAnswer(false);
        sortedArray = [];
        if (wordNumber === textBookWords.length - 1) {
          onSetShowResult(true);
          onSetTextBookWords([]);
        }
        if (isAuthorized && wordNumber === textBookWords.length - 1) {
          const userID = localStorage.getItem('userId') as string;
          correctAnswers.forEach((word) => {
            UpdateOrCreateUserWord(
              userID,
              word.id,
              {
                difficulty: 'learned',
                optional: {
                  rightAnswers: 1,
                  rightAudio: 1,
                  wrongAudio: 0,
                  rightSprint: 0,
                  wrongSprint: 0,
                },
              },
              1,
              1,
              0,
            );
          });
          wrongAnswers.forEach((word) => {
            UpdateOrCreateUserWord(
              userID,
              word.id,
              {
                difficulty: 'learned',
                optional: {
                  rightAnswers: 0,
                  rightAudio: 0,
                  wrongAudio: 1,
                  rightSprint: 0,
                  wrongSprint: 0,
                },
              },
              0,
              0,
              1,
            );
          });
        }

      }
    };
    window.addEventListener('keyup', onKeyPress);
    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [randomArray, statusAnswered]);

  const buttons = randomArray.map((item, id) => {
    return (
      <AnswerButton
        disabled={isDisabled}
        className={
          isAnswered && item.id === currentWord.id && statusAnswered
            ? 'correct'
            : isAnswered && item.id !== currentWord.id && statusAnswered
              ? 'wrong'
              : ''
        }
        onClick={() => {
          onSetDisabled(true);
          if (item.id === currentWord.id) {
            onSetStatusAnswered('correct');
            onSetCorrectAnswers(currentWord);
          } else {
            onSetStatusAnswered('wrong');
            onSetWrongAnswers(currentWord);
          }
          setTimeout(() => {
            onSetIsAnswered(true);
            onSetShowAnswer(true);
          }, 1000);
        }}
        key={item.id}
      >
        <p className="number">{id + 1}</p> {Capitalize(item.wordTranslate)}
      </AnswerButton>
    );
  });
  return (
    <AudioChallengeWrapper>
      {textBookWords.length && wordNumber < textBookWords.length && !showResult ? (
        <MainBlock>
          <InnerBlock>
            <ButtonBlock>
              {buttons}
              <SkipQuestion
                disabled={isDisabled}
                onClick={() => {
                  onSetDisabled(true);
                  onSetStatusAnswered('wrong');
                  onSetWrongAnswers(currentWord);
                  setTimeout(() => {
                    onSetIsAnswered(true);
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
                    onSetDisabled(false);
                    const nextNumber =
                      wordNumber === textBookWords.length ? wordNumber : wordNumber + 1;
                    onSetWordNumber(nextNumber);
                    onSetIsAnswered(false);
                    onSetStatusAnswered('');
                    onSetShowAnswer(false);
                    sortedArray = [];
                    if (wordNumber === textBookWords.length - 1) {
                      onSetShowResult(true);
                      onSetTextBookWords([]);
                    }
                    if (isAuthorized && wordNumber === textBookWords.length - 1) {
                      const userID = localStorage.getItem('userId') as string;
                      correctAnswers.forEach((word) => {
                        UpdateOrCreateUserWord(
                          userID,
                          word.id,
                          {
                            difficulty: 'learned',
                            optional: {
                              rightAnswers: 1,
                              rightAudio: 1,
                              wrongAudio: 0,
                              rightSprint: 0,
                              wrongSprint: 0,
                            },
                          },
                          1,
                          1,
                          0,
                        );
                      });
                      wrongAnswers.forEach((word) => {
                        UpdateOrCreateUserWord(
                          userID,
                          word.id,
                          {
                            difficulty: 'learned',
                            optional: {
                              rightAnswers: 0,
                              rightAudio: 0,
                              wrongAudio: 1,
                              rightSprint: 0,
                              wrongSprint: 0,
                            },
                          },
                          0,
                          0,
                          1,
                        );
                      });
                    }
                  }}
                >
                  Next
                </NextButton>
              </NextButtonWrapper>
            </PictureBlock>
          </InnerBlock>
        </MainBlock>
      ) : showResult ? null : (
        <>
          <MoonLoader color="#fff" />
          <p className='userMessage'>Слова еще не загрузились, либо вы уже все выучили!</p>
        </>
      )}
      {showResult && (
        <ResultPage correctAnswers={correctAnswers} wrongAnswers={wrongAnswers}></ResultPage>
      )}
    </AudioChallengeWrapper>
  );
};

export default AudioChallengeGame;
