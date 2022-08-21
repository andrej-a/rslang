import React from 'react';

import { IGameCommomInfo } from '../../../components/Interfaces';
import { GameWrapper, LevelDiv, LevelButtonsContainer, LevelButton, GameImage } from './InitialGame.styled';

const InitialGame = ({ title, img }: IGameCommomInfo) => {
  return (
    <GameWrapper>
      <GameImage>
        <img src={img} alt="icon" />
      </GameImage>
      <h2>{title}</h2>
      <LevelDiv>
        <h3>Select the level</h3>
        <LevelButtonsContainer>
          <LevelButton>A1</LevelButton>
          <LevelButton>A2</LevelButton>
          <LevelButton>B1</LevelButton>
          <LevelButton>B2</LevelButton>
          <LevelButton>C1</LevelButton>
          <LevelButton>C2</LevelButton>
        </LevelButtonsContainer>
      </LevelDiv>
    </GameWrapper>
  );
};

export default InitialGame;
