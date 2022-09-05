import React from 'react';
import { LevelButtonStyled } from './InitialGame.styled';

interface ILevelButton {
  name: string;
  id: number;
  activeLevel: number;
  changeLevel: (level: number) => void;
}

export const LevelButton = ({ name, id, activeLevel, changeLevel }: ILevelButton) => {
  return (
    <>
      <LevelButtonStyled id={`${id}`} state={activeLevel === id} onClick={() => changeLevel(id)}>
        {name}
      </LevelButtonStyled>
    </>
  );
};
