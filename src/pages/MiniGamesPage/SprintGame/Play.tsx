/* eslint-disable @typescript-eslint/no-explicit-any */
import Timer from '../../../components/Timer/Timer';
import { Card } from './Card';
import React, { useContext, useEffect, useState } from 'react';
import { IWord } from '../../../models/IWord';
import { GameContent, GameLifes, SprintGameWrapper } from './SprintGame.styled';
import { IWordsForPlay } from './CreateCouples';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import ResultPage from '../ResultPage/ResultPage';
import { setStatisticGame, setStatisticWord } from './setStatistic';

interface Props {
  wordsForPlay: IWordsForPlay[];
  allWords: IWord[];
  setAllWords: (words: []) => void;
}
export const Play = ({ wordsForPlay, allWords, setAllWords }: Props) => {
  const [playMode, setPlayMode] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [lineRightAnswers, setLineRightAnswers] = useState(0);
  const [maxLineRightAnswers, setMaxLineRightAnswers] = useState(0);
  const [coefficient, setCoefficient] = useState(1);
  const [checkCircles, setCheckCircles] = useState(0);
  const [correctList, setCorrectList] = useState<IWord[]>([]);
  const [wrongList, setWrongList] = useState<IWord[]>([]);

  useEffect(() => {
    if (playMode === false) {
      setAllWords([]);
    }
    setStatisticGame(wrongList, correctList, maxLineRightAnswers);
    setStatisticWord(wrongList, correctList);
  }, [playMode]);

  return (
    <SprintGameWrapper>
      <ResultPage
        correctAnswers={correctList}
        wrongAnswers={wrongList}
        isResultOpen={playMode ? 'hidden' : ''}
        countAnswers={wrongList.length + correctList.length}
      />
      <GameContent className={playMode ? '' : 'hidden'}>
        <h3>{totalPoints}</h3>
        <p>+{coefficient * 10} points</p>
        <GameLifes>
          <div id="circle1" className={checkCircles >= 1 ? 'active' : ''}></div>
          <div id="circle2" className={checkCircles >= 2 ? 'active' : ''}></div>
          <div id="circle3" className={checkCircles >= 3 ? 'active' : ''}></div>
        </GameLifes>
        <Card
          allWords={allWords}
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
          setLineRightAnswers={(value) => {
            console.log('lineRightAnswers', value);
            setLineRightAnswers(value);
          }}
          maxLineRightAnswers={maxLineRightAnswers}
          setMaxLineRightAnswers={(value) => {
            console.log('MaxLineRightAnswers', value);
            setMaxLineRightAnswers(value);
          }}
        />
      </GameContent>
      <Timer
        playMode={playMode}
        setPlayMode={(mode: boolean) => setPlayMode(mode)}
        className={playMode ? '' : 'hidden'}
      />
    </SprintGameWrapper>
  );
};
