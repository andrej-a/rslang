import React from 'react';
import TimerBar from '../../../components/ProgressBar/TimerBar';

import { ButtonRight, ButtonWrong, EngWord, GameCard, GameContent, GameLifes, RuWord, SprintGameWrapper, ButtonContainer } from './SprintGame.styled';

const SprintGame = () => {
  return (
    <SprintGameWrapper>
      <TimerBar percent={100} />
      <GameContent>
        <h3>0</h3>
        <p>+10 points</p>
        <GameLifes>
          <div></div>
          <div></div>
          <div></div>
        </GameLifes>
        <GameCard>
          <EngWord>catch</EngWord>
          <RuWord>ловить</RuWord>
          <ButtonContainer>
            <ButtonRight>Right</ButtonRight>
            <ButtonWrong>Wrong</ButtonWrong>
          </ButtonContainer>
        </GameCard>
      </GameContent>
    </SprintGameWrapper>
  );
};

export default SprintGame;
