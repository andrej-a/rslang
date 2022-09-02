import React from 'react';
import { LevelButtonStyled } from './InitialGame.styled';

interface ILevelButton {
  name: string;
  id: string;
  activeLevel: string;
  changeLevel: (level: string) => void;
}

export const LevelButton = ({ name, id, activeLevel, changeLevel }: ILevelButton) => {
  return (
    <>
      <LevelButtonStyled id={id} state={activeLevel === id} onClick={() => changeLevel(id)}>
        {name}
      </LevelButtonStyled>
    </>
  );
};
