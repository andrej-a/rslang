import React, { useContext, useEffect, useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import { IWord } from '../../../models/IWord';
import { getWords } from '../../../service/getWords';
import { createCouples, IWordsForPlay } from './CreateCouples';
import { Play } from './Play';
import { GameContentWrapper } from './SprintGame.styled';
import { getNoStudiedWordsFromServer } from '../../../utils/getNoStudiedWordsFromServer';

const SprintGame = () => {
  const {
    onSetFooterVisibility,
    wordsGroup,
    isAuthorized,
    isTextBookInitGame,
    currentPage,
    userDictionary,
  } = useContext(ApplicationContext);
  const [wordsList, setWordsList] = useState<IWord[]>([]);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [wordsForPlay, setwordsForPlay] = useState<IWordsForPlay[] | []>([]);

  const generateRandomPage = (min: number, max: number) => {
    const page = Math.floor(min + Math.random() * (max + 1 - min));
    return page;
  };

  const onRequest = async (
    level: number,
    firstPage: number,
    secondPage: number,
    thirdPage: number,
  ) => {
    const words1 = await getWords(level, firstPage);
    const words2 = await getWords(level, secondPage);
    const words3 = await getWords(level, thirdPage);
    console.log(firstPage, '1');
    console.log(secondPage, '2');
    console.log(thirdPage, '3');
    const result: IWord[] = words3.concat(words1, words2);
    console.log(result, 'res');
    setWordsList(result);
  };

  const onRequestWhenAuthorizedInTextBook = async () => {
    console.log('запрос со страницы');
    console.log('wordsGroup', wordsGroup);
    //проверяем если группа слов это сложные слова пользователя
    if (wordsGroup === 6) {
      setWordsList(userDictionary);
    } else {
      //если со стандартной группы вызываем то проверяем наличие выученых слов и отбрасывем их
      const words = await getNoStudiedWordsFromServer(wordsGroup, currentPage, [], 60);
      setWordsList(words.items);
    }
  };

  useEffect(() => {
    onSetFooterVisibility(false);
    //проверяем с какой страницы вызывает пользователь игру
    //если с textbook
    if (isTextBookInitGame) {
      if (isAuthorized) {
        //вызываем функцию получения слов если юсер авторизован
        onRequestWhenAuthorizedInTextBook();
      } else {
        //если пользователь неавторизован то просто выбираем странички относительно той
        //страницы где сейчас находится пользователь
        let firstPage = currentPage;
        if (currentPage === 30) firstPage = 29;
        const secondPage = firstPage >= 1 ? firstPage - 1 : firstPage + 1;
        const thirtyPage = firstPage <= 27 ? firstPage + 1 : firstPage - 2;
        onRequest(wordsGroup, firstPage, secondPage, thirtyPage);
      }
      //если со страницы инициализации
    } else {
      if (wordsGroup === 6) {
        setWordsList(userDictionary);
      } else {
        const firstPage = generateRandomPage(1, 9);
        const secondPage = generateRandomPage(10, 19);
        const thirdPage = generateRandomPage(20, 29);
        onRequest(wordsGroup, firstPage, secondPage, thirdPage);
      }
    }
  }, []);

  useEffect(() => {
    if (wordsList.length >= 60) {
      setwordsForPlay(createCouples(wordsList));
      setIsStart(true);
      onSetFooterVisibility(false);
    }
  }, [wordsList]);

  return (
    <GameContentWrapper>
      {wordsGroup === 6 && wordsList.length < 60 ? (
        <>
          <p className="userMessage">В группе Dictionary не хватает слов!</p>
        </>
      ) : isStart ? (
        <Play
          wordsForPlay={wordsForPlay}
          allWords={wordsList}
          setAllWords={(words) => setWordsList(words)}
        />
      ) : (
        <>
          <MoonLoader color="#fff" />
          <p className="userMessage">Слова еще не загрузились, либо вы уже все выучили!</p>
        </>
      )}
    </GameContentWrapper>
  );
};

export default SprintGame;
