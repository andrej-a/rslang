import React, { useContext, useEffect, useState } from 'react';

import { Spinner } from '../../../components/Spinner/Spinner';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import { IWord } from '../../../models/IWord';
import { getWords } from '../../../service/getWords';
import { createCouples, IWordsForPlay } from './CreateCouples';
import { Play } from './Play';

import { GameContentWrapper } from './SprintGame.styled';
import { getNoStudiedWordsFromServer } from './getNotStudiedWord';

const SprintGame = () => {
  const {
    onSetFooterVisibility,
    initialLevel,
    isAuthorized,
    isTextBookInitGame,
    textBookCurrentPage,
  } = useContext(ApplicationContext);
  const [wordsList, setWordsList] = useState<IWord[]>([]);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [wordsForPlay, setwordsForPlay] = useState<IWordsForPlay[] | []>([]);

  const generateRandomPage = (min: number, max: number) => {
    const page = Math.floor(min + Math.random() * (max + 1 - min));
    return page;
  };

  const onRequest = async (level: string, first = 0, second = 0, thirty = 0) => {
    const firstPage = first ?? generateRandomPage(1, 9);
    const secondPage = second ?? generateRandomPage(10, 19);
    const thirtyPage = thirty ?? generateRandomPage(20, 29);
    const words1 = await getWords(level, firstPage);
    const words2 = await getWords(level, secondPage);
    const words3 = await getWords(level, thirtyPage);
    const result: IWord[] = words3.concat(words1, words2);
    console.log(result, 'res');
    setWordsList(result);
  };
console.log('textBookCurrentPage', textBookCurrentPage);

  const getUserWordTextBook = async () => {
    const words = await getNoStudiedWordsFromServer(initialLevel, textBookCurrentPage, [], 60);
    setWordsList(words);
  };

  useEffect(() => {
    onSetFooterVisibility(false);

    if (isTextBookInitGame) {
      if (isAuthorized) {
        getUserWordTextBook();
      } else {
        const secondPage =
          textBookCurrentPage >= 2 ? textBookCurrentPage - 1 : textBookCurrentPage + 1;
        const thirtyPage =
          textBookCurrentPage <= 29 ? textBookCurrentPage + 2 : textBookCurrentPage - 1;
        onRequest(initialLevel, textBookCurrentPage, secondPage, thirtyPage);
      }
    } else {
      onRequest(initialLevel);
    }
  }, []);

  useEffect(() => {
    if (wordsList.length === 60) {
      setwordsForPlay(createCouples(wordsList));
      setIsStart(true);
    }
  }, [wordsList]);

  const content = isStart ? (
    <Play
      wordsForPlay={wordsForPlay}
      allWords={wordsList}
      setAllWords={(words) => setWordsList(words)}
    />
  ) : (
    <Spinner />
  );
  return <GameContentWrapper>{content}</GameContentWrapper>;
};

export default SprintGame;
