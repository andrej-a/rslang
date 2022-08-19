import React, { useState } from 'react';
import { TextBookWrapper, LevelButtonsWrapper, WordButtonsWrapper, GameBlock } from './TextBook.styled';
import LevelButton from './LevelButton';
import WordButton from './WordButton';
import { Colors } from '../../styles/constansts';
import { Capitalize } from '../../utils/utils';
import { totalCountPages, words } from './ExampleData';
import Pagination from './Pagination';
import WordCard from './WordCard';
import { IWord } from '../../models/IWord';


const TextBookContent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeLevel, setActiveLevel] = useState<string>('A1');
  const [activeWord, setActiveWord] = useState<IWord>({
    id: '',
    group: 0,
    page: 0,
    word: '',
    image: '',
    audio: '',
    audioMeaning: '',
    audioExample: '',
    textMeaning: '',
    textExample: '',
    transcription: '',
    textExampleTranslate: '',
    textMeaningTranslate: '',
    wordTranslate: '',
  });

  const changeLevel = (level: string) => {
    setActiveLevel(() => level);
  };
  const selectWord = (wordId: string) => {
    setActiveWord(() => (words.find(word => word.id === wordId) as IWord));
  };
  const paginate = (direction: number, numButt = false) => {
    if (numButt) setCurrentPage(page => direction);
    else setCurrentPage(page => page + direction);
  };

  const levels = new Map([
    ['A1', { color: Colors.BOOK_GRREN, fullname: 'Elementary 1' }],
    ['A2', { color: Colors.BOOK_YELLOW, fullname: 'Elementary 2' }],
    ['B1', { color: Colors.BOOK_AZURE_BLUE, fullname: 'Elementary 1' }],
    ['B2', { color: Colors.BOOK_BLUE, fullname: 'Elementary 2' }],
    ['C1', { color: Colors.BOOK_ORANGE, fullname: 'Elementary 1' }],
    ['C2', { color: Colors.BOOK_RED, fullname: 'Elementary 4' }]]);

  const levelsButtons = [];
  for (const [level, { color, fullname }] of levels) {
    levelsButtons.push((<LevelButton name={level} color={color} fullname={fullname} activeLevel={activeLevel} changeLevel={changeLevel} key={`levelButton${color}`} />));
  }


  return (
        <TextBookWrapper className='TEST'>
            <GameBlock>
                <LevelButtonsWrapper>
                    {levelsButtons}
                </LevelButtonsWrapper>
                <WordButtonsWrapper>
                    {words.map((word, index) =>
                      (<WordButton
                        word={Capitalize(word.word)}
                        wordTranslate={Capitalize(word.wordTranslate)}
                        id={word.id}
                        key={word.id + index}
                        activeWord={activeWord.id}
                        selectWord={selectWord} />))}
                </WordButtonsWrapper>
                <Pagination currentPage={currentPage} pagination={paginate} totalCount={totalCountPages} />
            </GameBlock>
            <WordCard
                word={activeWord}
                color={levels.get(activeLevel)?.color ?? ''}
                 />
        </TextBookWrapper>
  );
};

export default TextBookContent;