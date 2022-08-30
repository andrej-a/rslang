import React from 'react';
import { LevelButtonStyled } from './TextBook.styled';

interface ILevelButton {
  name: string;
  color: string;
  fullname: string;
  activeLevel: string;
  changeLevel: (level: string) => void;
}

const LevelButton = ({ name, color, fullname, activeLevel, changeLevel }: ILevelButton) => {
  return (
    <>
      <LevelButtonStyled
        levelColor={color}
        title={fullname}
        state={activeLevel === name}
        onClick={() => changeLevel(name)}
      >
        {name}
      </LevelButtonStyled>
    </>
  );
};

export default LevelButton;
