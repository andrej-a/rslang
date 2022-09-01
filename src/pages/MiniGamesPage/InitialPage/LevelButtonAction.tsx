import { levels, TextbookInfo } from '../../../styles/constansts';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import React, { useContext } from 'react';
import { LevelButtonStyled } from './InitialGame.styled';

const { MAX_PAGE, MIN_PAGE } = TextbookInfo;

interface ILevelButton {
  name: string;
  id: string;
}

export const LevelButton = ({ name, id }: ILevelButton) => {
  const { onSetInitialPage, onSetInitialLevel } = useContext(ApplicationContext);

  const setInfoToGetWords = () => {
    onSetInitialLevel(id);
    const randomPage = Math.floor(MIN_PAGE + Math.random() * (MAX_PAGE + 1 - MIN_PAGE));
    onSetInitialPage(String(randomPage));
  };

  return (
    <>
      <LevelButtonStyled id={id} onClick={() => setInfoToGetWords()}>
        {name}
      </LevelButtonStyled>
    </>
  );
};
