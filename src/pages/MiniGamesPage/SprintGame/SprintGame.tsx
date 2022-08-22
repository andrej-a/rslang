import React from 'react';

import { GameSprintWrapper } from './SprintGame.styled';

const SprintGame = () => {
  return (
      <SprintGameWrapper>
        <ProgressBarTime/>
        <GameContent>
          <GameScore></GameScore>
          <GameLifes></GameLifes>
          <GameCard></GameCard>
        </GameContent>
      </SprintGameWrapper>
    );
};

export default SprintGame;