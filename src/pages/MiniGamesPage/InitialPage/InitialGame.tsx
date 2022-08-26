import React from 'react';
import { useParams } from 'react-router-dom';
import getGameInformation from '../../../utils/getGameInformation';
import { GameWrapper, LevelDiv, LevelButtonsContainer, LevelButton, GameImage } from './InitialGame.styled';

const InitialGame = () => {
  const { game } = useParams();
  const { title, img } = getGameInformation(game as string);
  
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
