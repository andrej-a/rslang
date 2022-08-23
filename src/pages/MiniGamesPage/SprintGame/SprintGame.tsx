import React from 'react';
import Timer from '../../../components/Timer/Timer';

import { ButtonRight, ButtonWrong, EngWord, GameCard, GameContent, GameLifes, RuWord, SprintGameWrapper, ButtonContainer } from './SprintGame.styled';

const SprintGame = () => {
  return (
    <SprintGameWrapper>
      <GameContent>
        <h3>0</h3>
        <p>+10 points</p>
        <GameLifes>
          <div id="circle1" className="active"></div>
          <div id="circle2"></div>
          <div id="circle3"></div>
        </GameLifes>
        <GameCard>
          <EngWord>catch</EngWord>
          <RuWord>ловить</RuWord>
          <ButtonContainer>
            <ButtonRight variant="contained">Right</ButtonRight>
            <ButtonWrong variant="contained">Wrong</ButtonWrong>
          </ButtonContainer>
        </GameCard>
      </GameContent>
      <Timer />
    </SprintGameWrapper>
  );
};

export default SprintGame;
