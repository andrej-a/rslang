import React from 'react';
import { LevelButtonStyled } from './TextBook.styled';

interface ILevelButton {
  name: string;
  group: number;
  color: string;
  fullname: string;
  activeLevel: string;
  changeLevel: (level: string) => void;
  onSetGroup: (value: number) => void;
}

const LevelButton = ({
  name,
  group,
  color,
  fullname,
  activeLevel,
  changeLevel,
  onSetGroup,
}: ILevelButton) => {
  return (
    <>
      <LevelButtonStyled
        levelColor={color}
        title={fullname}
        state={activeLevel === name}
        onClick={() => {
          changeLevel(name);
          onSetGroup(group);
        }}
      >
        {name}
      </LevelButtonStyled>
    </>
  );
};

export default LevelButton;
