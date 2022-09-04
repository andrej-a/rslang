import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { levels, TextbookInfo } from '../../../styles/constansts';
import getGameInformation from '../../../utils/getGameInformation';
import { LevelButton } from './LevelButtonAction';
import {
  GameWrapper,
  LevelDiv,
  LevelButtonsContainer,
  GameImage,
  ButtonStartGame,
} from './InitialGame.styled';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

const InitialGame = () => {
  const { onSetInitialLevel, onSetIsTextBookInitGame } = useContext(ApplicationContext);
  const { game } = useParams();
  const { title, img } = getGameInformation(game as string);
  const [isReady, setIsReady] = useState(true);
  const [activeLevel, setActiveLevel] = useState<string>('');
  const { onSetFooterVisibility } = useContext(ApplicationContext);

  useEffect(() => {
    onSetIsTextBookInitGame(false);
    onSetFooterVisibility(false);
  }, []);

  const changeLevel = (level: string) => {
    setActiveLevel(() => level);
    setIsReady(false);
    onSetInitialLevel(level);
  };

  const levelsButtons = [];
  for (const [level, { difficulty }] of levels) {
    levelsButtons.push(
      <LevelButton
        name={level}
        id={difficulty}
        key={`levelButton${level}`}
        activeLevel={activeLevel}
        changeLevel={changeLevel}
      />,
    );
  }

  return (
    <GameWrapper>
      <GameImage>
        <img src={img} alt="icon" />
      </GameImage>
      <h2>{title}</h2>
      <LevelDiv>
        <h3>Select the level</h3>
        <LevelButtonsContainer>{levelsButtons}</LevelButtonsContainer>
        <Link to={`/games/${game}/start`}>
          <ButtonStartGame disabled={isReady}>Start</ButtonStartGame>
        </Link>
      </LevelDiv>
    </GameWrapper>
  );
};

export default InitialGame;
