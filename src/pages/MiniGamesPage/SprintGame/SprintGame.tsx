import React, { useContext, useEffect } from 'react';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import { getWords } from '../../../service/getWords';
import { GameInfo } from './GameContent';

import { GameContent, GameLifes, SprintGameWrapper } from './SprintGame.styled';

const SprintGame = () => {
  const { onSetFooterVisibility } = useContext(ApplicationContext);
  useEffect(() => {
    onSetFooterVisibility(false);
  }, []);

  return (
    <SprintGameWrapper>
      <GameInfo />
    </SprintGameWrapper>
  );
};

export default SprintGame;
