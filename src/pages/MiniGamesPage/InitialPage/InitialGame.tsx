import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { levels } from '../../../styles/constansts';
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
  const { onSetGroup, onSetIsTextBookInitGame, wordsGroup, isAuthorized } =
    useContext(ApplicationContext);
  const { game } = useParams();
  const { title, img } = getGameInformation(game as string);
  const [isReady, setIsReady] = useState(true);
  const { onSetFooterVisibility } = useContext(ApplicationContext);

  useEffect(() => {
    onSetIsTextBookInitGame(false);
    onSetFooterVisibility(false);
  });

  useEffect(() => {
    onSetGroup(7);
  }, []);

  const changeLevel = (level: number) => {
    setIsReady(false);
    onSetGroup(level);
  };

  const levelsButtons = [];
  for (const [level, { group }] of levels) {
    if ((group < levels.get('D')!.group && !isAuthorized) || isAuthorized)
      levelsButtons.push(
        <LevelButton
          name={level}
          id={group}
          key={`levelButton${level}`}
          activeLevel={wordsGroup}
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
