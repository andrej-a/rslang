import React from 'react';
import { LevelButtonStyled } from './TextBook.styled';

interface ILevelButton {
  name: string;
  color: string;
  fullname: string;
  activeLevel: string;
  group: number;
  changeLevel: (level: string, group: number) => void;
}

const LevelButton = ({ name, color, fullname, activeLevel, group, changeLevel }: ILevelButton) => {
  return (
    <>
      <LevelButtonStyled
        levelColor={color}
        title={fullname}
        state={activeLevel === name}
        onClick={() => changeLevel(name, group)}
      >
        {name}
      </LevelButtonStyled>
    </>
  );
};

export default LevelButton;
