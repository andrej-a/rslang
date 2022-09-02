import React, { useState } from 'react';
import { IWord } from '../../../models/IWord';
import { words } from '../AudioChallengeGame/testDB';
import { GameCard, EngWord, RuWord, ButtonContainer, ButtonAnswer } from './SprintGame.styled';

export const Card = ({
  word,
  randomWord,
  onChange,
}: {
  word: IWord;
  randomWord: string;
  onChange: (coefficient: number, score: number, userAnswer: boolean, checkCoeff: number) => void;
}) => {
  console.log(word);
  const [coefficient, setCoefficient] = useState(1);
  const [score, setScore] = useState(0);
  const [lineRightAnswers, setLineRightAnswers] = useState(0);
  const [maxLineRightAnswers, setMaxLineRightAnswers] = useState(0);
  const [checkCoeff, setCheckCoeff] = useState(0);
  const [userAnswer, setUserAnswer] = useState(false);
  const [wordGame, setWord] = useState(word.word);

  const handelCardState = () => {
    onChange(coefficient, score, userAnswer, checkCoeff);
  };

  const rightAnswer = () => {
    setUserAnswer(true);
    setScore((prevState) => prevState + coefficient * 10);
    setLineRightAnswers((prevState) => prevState + 1);
    setCheckCoeff((prevState) => prevState + 1);
    if (checkCoeff === 3) {
      setCoefficient((prevState) => prevState + 1);
    }
    if (lineRightAnswers > maxLineRightAnswers) {
      setMaxLineRightAnswers(lineRightAnswers);
    }
    handelCardState();
  };

  const wrongAnswer = () => {
    setUserAnswer(false);
    setLineRightAnswers(0);
    setCheckCoeff(0);
    setCoefficient(1);
    handelCardState();
  };

  const checkAnswer = (value: boolean) => {
    const answer = word.word === randomWord ? true : false;
    if (answer === value) return rightAnswer();
    return wrongAnswer();
  };

  return (
    <GameCard>
      <EngWord>{wordGame}</EngWord>
      <RuWord>{randomWord}</RuWord>
      <ButtonContainer>
        <ButtonAnswer
          variant="contained"
          color="success"
          size="large"
          onClick={() => checkAnswer(true)}
        >
          Right
        </ButtonAnswer>
        <ButtonAnswer
          variant="contained"
          color="warning"
          size="large"
          onClick={() => checkAnswer(false)}
        >
          Wrong
        </ButtonAnswer>
      </ButtonContainer>
    </GameCard>
  );
};
