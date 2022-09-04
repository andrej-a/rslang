import React from 'react';
import { LevelButtonStyled } from './TextBook.styled';

interface ILevelButton {
  name: string;
  color: string;
  id: string;
  fullname: string;
  activeLevel: string;
  changeLevel: (level: string) => void;
}

const LevelButton = ({ name, color, id, fullname, activeLevel, changeLevel }: ILevelButton) => {
  return (
    <>
      <LevelButtonStyled
        levelColor={color}
        title={fullname}
        state={activeLevel === id}
        onClick={() => changeLevel(id)}
      >
        {name}
      </LevelButtonStyled>
    </>
  );
};

export default LevelButton;
