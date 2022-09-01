import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { levels } from '../../../styles/constansts';
import getGameInformation from '../../../utils/getGameInformation';
import { LevelButton } from './LevelButtonAction';
import { GameWrapper, LevelDiv, LevelButtonsContainer, GameImage } from './InitialGame.styled';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import { getWords } from '../../../service/getWords';
import { IWord } from '../../../models/IWord';

const InitialGame = () => {
  const { game } = useParams();
  const { title, img } = getGameInformation(game as string);
  const [wordList, setWordList] = useState<IWord[]>([]);

  const { initialLevel, initialPage } = useContext(ApplicationContext);

  useEffect(() => {
    const words = getWords(initialLevel, initialPage);

    setWordList(words);
  }, [initialLevel, initialPage]);

  const levelsButtons = [];
  for (const [level, { difficulty }] of levels) {
    levelsButtons.push(<LevelButton name={level} id={difficulty} key={`levelButton${level}}`} />);
  }

  return (
    <GameWrapper>
      <GameImage>
        <img src={img} alt="icon" />
      </GameImage>
      <h2>{title}</h2>
      <LevelDiv>
        <h3>Select the level</h3>
        <Link to={`/games/${game}/start`}>
          <LevelButtonsContainer>{levelsButtons}</LevelButtonsContainer>
        </Link>
      </LevelDiv>
    </GameWrapper>
  );
};

export default InitialGame;
