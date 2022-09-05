import React, { useContext, useEffect, useState } from 'react';

import ResultPage from '../ResultPage/ResultPage';
import Timer from '../../../components/Timer/Timer';
import { Card } from './Card';
import { IWord } from '../../../models/IWord';
import { GameContent, GameLifes, SprintGameWrapper } from './SprintGame.styled';
import { IWordsForPlay } from './CreateCouples';
import {
  primaryCorrectObjectSprint,
  primaryWrongObjectSprint,
  sentResultsToServer,
} from '../../../service/sentResultsToServer';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

interface Props {
  wordsForPlay: IWordsForPlay[];
  allWords: IWord[];
  setAllWords: (words: []) => void;
}
export const Play = ({ wordsForPlay, allWords, setAllWords }: Props) => {
  //смотрит запущена ли игра
  const [playMode, setPlayMode] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [lineRightAnswers, setLineRightAnswers] = useState(0);
  const [maxLineRightAnswers, setMaxLineRightAnswers] = useState(0);
  const [coefficient, setCoefficient] = useState(1);
  const [checkCircles, setCheckCircles] = useState(0);
  const [correctList, setCorrectList] = useState<IWord[]>([]);
  const [wrongList, setWrongList] = useState<IWord[]>([]);
  //окно результата
  const [showResult, setShowResult] = useState(false);
  const { isAuthorized } = useContext(ApplicationContext);

  useEffect(() => {
    if (playMode === false) {
      setShowResult(true);
      setAllWords([]);
      if (isAuthorized) {
        sentResultsToServer(correctList, primaryCorrectObjectSprint, 1, 0, 0, 1, 0);
        sentResultsToServer(wrongList, primaryWrongObjectSprint, 0, 0, 0, 0, 1);
      }
    }
  }, [playMode]);

  return (
    <SprintGameWrapper>
      {showResult === true ? (
        <ResultPage correctAnswers={correctList} wrongAnswers={wrongList} />
      ) : (
        <>
          <GameContent>
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
              setLineRightAnswers={(value) => setLineRightAnswers(value)}
              maxLineRightAnswers={maxLineRightAnswers}
              setMaxLineRightAnswers={(value) => setMaxLineRightAnswers(value)}
            />
          </GameContent>
          <Timer setPlayMode={(mode: boolean) => setPlayMode(mode)} />
        </>
      )}
    </SprintGameWrapper>
  );
};
