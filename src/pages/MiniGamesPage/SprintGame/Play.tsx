/* eslint-disable @typescript-eslint/no-explicit-any */
import Timer from '../../../components/Timer/Timer';
import { Card } from './Card';
import React, { useContext, useEffect, useState } from 'react';
import { IWord } from '../../../models/IWord';
import { GameContent, GameLifes, SprintGameWrapper } from './SprintGame.styled';
import { IWordsForPlay } from './CreateCouples';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

interface Props {
  wordsForPlay: IWordsForPlay[];
}
export const Play = ({ wordsForPlay }: Props) => {
  const [playMode, setPlayMode] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [lineRightAnswers, setLineRightAnswers] = useState(0);
  const [maxLineRightAnswers, setMaxLineRightAnswers] = useState(0);
  const [coefficient, setCoefficient] = useState(1);
  const [checkCircles, setCheckCircles] = useState(0);
  const [isResultsOpen, setIsResultsOpen] = useState<boolean>(false);
  const [correctList, setCorrectList] = useState<IWord[]>([]);
  const [wrongList, setWrongList] = useState<IWord[]>([]);
  const { wordsList } = useContext(ApplicationContext);
  const words = wordsList;
  console.log('wordsForPlay[wordIndex]', wordsForPlay);

  return (
    <SprintGameWrapper>
      {/* <ResultPage /> */}
      <GameContent>
        <h3>{totalPoints}</h3>
        <p>+{coefficient * 10} points</p>
        <GameLifes>
          <div id="circle1" className={checkCircles >= 1 ? 'active' : ''}></div>
          <div id="circle2" className={checkCircles >= 2 ? 'active' : ''}></div>
          <div id="circle3" className={checkCircles === 3 ? 'active' : ''}></div>
        </GameLifes>
        <Card
          allWords={words}
          couple={wordsForPlay[wordIndex]}
          wordIndex={wordIndex}
          setWordIndex={(value) => setWordIndex(value)}
          correctList={correctList}
          setCorrectList={(value) => setCorrectList(value)}
          wrongList={wrongList}
          setWrongList={(value) => setWrongList(value)}
          coefficient={coefficient}
          setCoefficient={(value) => setCoefficient(value)}
          totalPoints={totalPoints}
          setTotalPoints={(value) => setTotalPoints(value)}
          checkCircles={checkCircles}
          setCheckCircles={(value) => setCheckCircles(value)}
          lineRightAnswers={lineRightAnswers}
          setLineRightAnswers={(value) => setLineRightAnswers(value)}
          maxLineRightAnswers={maxLineRightAnswers}
          setMaxLineRightAnswers={(value) => setMaxLineRightAnswers(value)}
        />
      </GameContent>
      <Timer />
    </SprintGameWrapper>
  );
};
