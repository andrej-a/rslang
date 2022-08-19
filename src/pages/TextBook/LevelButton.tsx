import React from 'react';
import { useState } from 'react';
import { LevelButtonStyled } from './TextBook.styled';

const LevelButton = ({ name, color, fullname, activeLevel, changeLevel }: { name: string, color: string, fullname: string, activeLevel: string, changeLevel: (level: string) => void }) => {

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