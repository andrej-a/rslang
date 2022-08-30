import React from 'react';
import { Link, useParams } from 'react-router-dom';
import getGameInformation from '../../../utils/getGameInformation';
import {
  GameWrapper,
  LevelDiv,
  LevelButtonsContainer,
  LevelButton,
  GameImage,
} from './InitialGame.styled';

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
          <Link to={`/games/${game}/start`}>
            <LevelButton>A1</LevelButton>
          </Link>
          <Link to={`/games/${game}/start`}>
            <LevelButton>A2</LevelButton>
          </Link>
          <Link to={`/games/${game}/start`}>
            <LevelButton>B1</LevelButton>
          </Link>
          <Link to={`/games/${game}/start`}>
            <LevelButton>B2</LevelButton>
          </Link>
          <Link to={`/games/${game}/start`}>
            <LevelButton>C1</LevelButton>
          </Link>
          <Link to={`/games/${game}/start`}>
            <LevelButton>C2</LevelButton>
          </Link>
        </LevelButtonsContainer>
      </LevelDiv>
    </GameWrapper>
  );
};

export default InitialGame;
