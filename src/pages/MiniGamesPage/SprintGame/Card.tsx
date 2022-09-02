import React, { useState } from 'react';
import { IWord } from '../../../models/IWord';
import { IWordsForPlay } from './CreateCouples';
import { GameCard, EngWord, RuWord, ButtonContainer, ButtonAnswer } from './SprintGame.styled';

interface ICardInfo {
  allWords: IWord[];
  couple: IWordsForPlay;
  wordIndex: number;
  setWordIndex: (wordIndex: number) => void;
  totalPoints: number;
  setTotalPoints: (totalPoints: number) => void;
  correctList: IWord[];
  setCorrectList: (correctList: IWord[]) => void;
  wrongList: IWord[];
  setWrongList: (wrongList: IWord[]) => void;
  coefficient: number;
  setCoefficient: (coefficient: number) => void;
  checkCircles: number;
  setCheckCircles: (circles: number) => void;
  lineRightAnswers: number;
  setLineRightAnswers: (lineRightAnswers: number) => void;
  maxLineRightAnswers: number;
  setMaxLineRightAnswers: (maxLineRightAnswers: number) => void;
}

export const Card = ({
  allWords,
  couple,
  wordIndex,
  setWordIndex,
  totalPoints,
  setTotalPoints,
  correctList,
  setCorrectList,
  wrongList,
  setWrongList,
  coefficient,
  setCoefficient,
  checkCircles,
  setCheckCircles,
  lineRightAnswers,
  setLineRightAnswers,
  maxLineRightAnswers,
  setMaxLineRightAnswers,
}: ICardInfo) => {
  console.log(couple);
  const rightAnswer = () => {
    setTotalPoints(totalPoints + coefficient * 10);
    setLineRightAnswers(lineRightAnswers + 1);
    setCheckCircles(coefficient + 1);
    if (checkCircles === 3) {
      setCoefficient(coefficient + 1);
      setCheckCircles(0);
    }
    if (lineRightAnswers > maxLineRightAnswers) {
      setMaxLineRightAnswers(lineRightAnswers);
    }
    setWordIndex(wordIndex + 1);
    correctList.push(allWords[wordIndex]);
    setCorrectList(correctList);
  };

  const wrongAnswer = () => {
    setLineRightAnswers(0);
    setCheckCircles(0);
    setCoefficient(1);
    setWordIndex(wordIndex + 1);
    wrongList.push(allWords[wordIndex]);
    setWrongList(wrongList);
  };

  const checkAnswer = (res: number) => {
    if (wordIndex < allWords.length - 1) {
      if (res === couple.yes) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
    }
  };

  return (
    <GameCard>
      <EngWord>{couple.word}</EngWord>
      <RuWord>{couple.translate}</RuWord>
      <ButtonContainer>
        <ButtonAnswer
          variant="contained"
          color="success"
          size="large"
          onClick={() => checkAnswer(1)}
        >
          Right
        </ButtonAnswer>
        <ButtonAnswer
          variant="contained"
          color="warning"
          size="large"
          onClick={() => checkAnswer(0)}
        >
          Wrong
        </ButtonAnswer>
      </ButtonContainer>
    </GameCard>
  );
};
