import React from 'react';
import { IWord } from '../../models/IWord';
import { WordButtonStyled } from './TextBook.styled';

const WordButton = ({ word, wordTranslate, id, activeWord, selectWord, handleClick }: Partial<IWord> & { activeWord: string, selectWord: (wordId: string) => void, handleClick: () => void }) => {

  return (
    <>
      <WordButtonStyled
        state={id === activeWord}
        onClick={() => {
          selectWord(id as string);
          handleClick();
        }}
      >
        { id === activeWord ? wordTranslate : word }
      </WordButtonStyled>
    </>
  );
};

export default WordButton;