import React, { useContext, useEffect, useState } from 'react';

import { Spinner } from '../../../components/Spinner/Spinner';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import { IWord } from '../../../models/IWord';
import { getWords } from '../../../service/getWords';
import { createCouples, IWordsForPlay } from './CreateCouples';
import { Play } from './Play';

import { GameContentWrapper } from './SprintGame.styled';

const SprintGame = () => {
  const { onSetFooterVisibility, initialLevel, initialPage, onSetWordsList, wordsList } =
    useContext(ApplicationContext);
  const [isStart, setIsStart] = useState<boolean>(wordsList.length < 2 ? true : false);
  const [words, setWords] = useState<IWordsForPlay[] | []>([]);
  let wordsForPlay: IWordsForPlay[] = [];
  useEffect(() => {
    onSetFooterVisibility(false);
  }, []);

  useEffect(() => {
    if (wordsList.length === 20) {
      wordsForPlay = createCouples(wordsList);
      setWords(wordsForPlay);
      setIsStart(false);
    }
  }, [wordsList]);

  const content = isStart ? <Spinner /> : <Play wordsForPlay={words} />;
  return <GameContentWrapper>{content}</GameContentWrapper>;
};

export default SprintGame;
