import { Spinner } from '../../../components/Spinner/Spinner';
import { SettingsInputComponent } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import Timer from '../../../components/Timer/Timer';
import { IWord } from '../../../models/IWord';
import { getWords } from '../../../service/getWords';
import { Card } from './Card';

import { GameContent, GameLifes, SprintGameWrapper, GameContentWrapper } from './SprintGame.styled';

const SprintGame = () => {
  const { onSetFooterVisibility, initialLevel, initialPage, onSetWordsList, wordsList } =
    useContext(ApplicationContext);
  const [loading, setLoading] = useState<boolean>(wordsList.length < 2 ? true : false);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [coefficient, setCoefficient] = useState(1);
  const [score, setScore] = useState(0);
  console.log(wordsList);
  const wrongAnswers: IWord[] = [];
  const rightAnswers: IWord[] = [];
  const word = wordsList[wordIndex];

  const getRandomWord = () => {
    const randomWord = 'lololo';
    return randomWord;
  };

  useEffect(() => {
    onSetFooterVisibility(false);
  }, []);

  useEffect(() => {
    if (wordsList.length > 10) {
      setLoading(false);
    }
  }, [wordsList]);

  
  // useEffect(() => {
  //   setWordIndex((prev) => prev + 1);
  //   getRandomWord();
  // }, [rightAnswers, wrongAnswers]);

  const handelCardState = (
    coefficient_: number,
    score_: number,
    userAnswer: boolean,
    checkCoeff: number,
  ) => {
    setScore(score_);
    setCoefficient(coefficient_);
    if (userAnswer === true) {
      rightAnswers.push(word);
    } else {
      wrongAnswers.push(word);
    }
  };

  const viewGame = (
    <SprintGameWrapper>
      <GameContent>
        <h3>{score}</h3>
        <p>+{coefficient * 10}points</p>
        <GameLifes>
          <div id="circle1" className="active"></div>
          <div id="circle2"></div>
          <div id="circle3"></div>
        </GameLifes>
        <Card word={word} randomWord={getRandomWord()} onChange={handelCardState} />
      </GameContent>
      <Timer />
    </SprintGameWrapper>
  );
  const content = loading ? <Spinner /> : viewGame;

  return <GameContentWrapper>{content}</GameContentWrapper>;
};

export default SprintGame;
