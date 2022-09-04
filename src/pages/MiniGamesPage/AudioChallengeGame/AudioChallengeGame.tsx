/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/indent */
import React, { useState, useContext, useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
/* COMPONENTS */
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import ResultPage from '../ResultPage/ResultPage';
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

/* ASSETS */
import AudioImage from '../../../assets/AudioBlack.svg';
import CorrectAnswer from '../../../assets/CorrectAnswer.svg';
import TestAnswerPicture from '../../../assets/test_answer.jpg';
/* CONSTANTS */
import { Colors } from '../../../styles/constansts';
/* MODELS */
import { IWord } from '../../../models/IWord';
import { defaultWord } from '../../../models/defaultValueToAudioGame';
import { generateRandomPage } from '../../../models/randomPage';
/* SERVICE */
import { getWords } from '../../../service/getWords';
import { primaryCorrectObject, primaryWrongObject, sentResultsToServer } from '../../../service/sentResultsToServer';
/* UTILS */
import { shuffle } from '../../../utils/shuffleArray';
import { Capitalize } from '../../../utils/utils';
import { getRandomWordsFromArray } from '../../../utils/getRandomWordsFromArray';
import { getNoStudiedWordsFromServer } from '../../../utils/getNoStudiedWordsFromServer';

let sortedArray: IWord[] = [];

const AudioChallengeGame = () => {
  const {
    onSetFooterVisibility,
    currentPage,
    wordsGroup,
    onSetTextBookWords,
    textBookWords,
    isAuthorized,
    isTextBookInitGame,
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

  const onSetBooleanState = (value: boolean, callback: React.Dispatch<React.SetStateAction<boolean>>) => {
    callback(value);
  };

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

  const onSetStatusAnswered = (value: string) => {
    setStatusAnswered(value);
  };

  const onSetCorrectAnswers = (value: IWord) => {
    setCorrectAnswers([...correctAnswers, value]);
  };

  const onSetWrongAnswers = (value: IWord) => {
    setWrongAnswers([...wrongAnswers, value]);
  };

  useEffect(() => {
    onSetBooleanState(false, setShowResult);

    if (isAuthorized && isTextBookInitGame) {
      getNoStudiedWordsFromServer(wordsGroup, currentPage, sortedArray, 20).then((data) => {
        onSetTextBookWords(shuffle(data.items));
      });
    } else {
      getWords(wordsGroup, isTextBookInitGame ? currentPage - 1 : generateRandomPage(0, 29))
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
          onSetBooleanState(true, setIsDisabled);
          onSetStatusAnswered('correct');
          onSetCorrectAnswers(currentWord);
        } else {
          onSetStatusAnswered('wrong');
          onSetWrongAnswers(currentWord);
        }
        setTimeout(() => {
          onSetBooleanState(true, setIsAnswered);
          onSetBooleanState(true, setShowAnswer);
        }, 1000);
      }
      if (e.code === 'Space') {
        const audioExample = new Audio(
          `https://react-rslang-back.herokuapp.com/${currentWord.audio}`,
        );
        audioExample.play();
      }
      if (e.code === 'Enter' && statusAnswered) {
        onSetBooleanState(false, setIsDisabled);
        const nextNumber = wordNumber === textBookWords.length ? wordNumber : wordNumber + 1;
        onSetWordNumber(nextNumber);
        onSetBooleanState(false, setIsAnswered);
        onSetStatusAnswered('');
        onSetBooleanState(false, setShowAnswer);
        sortedArray = [];
        if (wordNumber === textBookWords.length - 1) {
          onSetBooleanState(true, setShowResult);
          onSetTextBookWords([]);
        }
        if (isAuthorized && wordNumber === textBookWords.length - 1) {
          sentResultsToServer(correctAnswers, primaryCorrectObject, 1, 1, 0);
          sentResultsToServer(wrongAnswers, primaryWrongObject, 0, 0, 1);
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
          onSetBooleanState(true, setIsDisabled);
          if (item.id === currentWord.id) {
            onSetStatusAnswered('correct');
            onSetCorrectAnswers(currentWord);
          } else {
            onSetStatusAnswered('wrong');
            onSetWrongAnswers(currentWord);
          }
          setTimeout(() => {
            onSetBooleanState(true, setIsAnswered);
            onSetBooleanState(true, setShowAnswer);
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
                  onSetBooleanState(true, setIsDisabled);
                  onSetStatusAnswered('wrong');
                  onSetWrongAnswers(currentWord);
                  setTimeout(() => {
                    onSetBooleanState(true, setIsAnswered);
                    onSetBooleanState(true, setShowAnswer);
                  }, 1000);
                }}
              >
                {'Пропустить вопрос'}
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
                    onSetBooleanState(true, setIsDisabled);
                    const nextNumber =
                      wordNumber === textBookWords.length ? wordNumber : wordNumber + 1;
                    onSetWordNumber(nextNumber);
                    onSetBooleanState(false, setIsAnswered);
                    onSetStatusAnswered('');
                    onSetBooleanState(false, setShowAnswer);
                    sortedArray = [];
                    if (wordNumber === textBookWords.length - 1) {
                      onSetBooleanState(true, setShowResult);
                      onSetTextBookWords([]);
                    }
                    if (isAuthorized && wordNumber === textBookWords.length - 1) {
                      sentResultsToServer(correctAnswers, primaryCorrectObject, 1, 1, 0);                      
                      sentResultsToServer(wrongAnswers, primaryWrongObject, 0, 0, 1);                    
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
