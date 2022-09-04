import React, { useContext } from 'react';
import { ApplicationContext } from '../../components/Context/ApplicationContext';
import { LevelButtonStyled } from './TextBook.styled';

interface ILevelButton {
  name: string;
  group: number;
  color: string;
  fullname: string;
  activeLevel: string;
  changeLevel: (level: string) => void;
}

const LevelButton = ({ name, group, color, fullname, activeLevel, changeLevel }: ILevelButton) => {
  const { onSetGroup } = useContext(ApplicationContext);
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
