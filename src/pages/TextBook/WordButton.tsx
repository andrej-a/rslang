import React from 'react';
import { IWord } from '../../models/IWord';
import { WordButtonStyled } from './TextBook.styled';

interface IWordButton {
  activeWord: string;
  selectWord: (wordId: string) => void;
  handleClick: () => void;
}

const WordButton = ({
  word,
  wordTranslate,
  id,
  activeWord,
  selectWord,
  handleClick,
}: Partial<IWord> & IWordButton) => {
  return (
    <>
      <WordButtonStyled
        state={id === activeWord}
        onClick={() => {
          selectWord(id as string);
          handleClick();
        }}
      >
        {id === activeWord ? wordTranslate : word}
      </WordButtonStyled>
    </>
  );
};

export default WordButton;
