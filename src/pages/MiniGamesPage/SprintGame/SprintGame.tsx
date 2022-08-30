import React, { useContext, useEffect } from 'react';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';
import Timer from '../../../components/Timer/Timer';

import {
  EngWord,
  GameCard,
  GameContent,
  GameLifes,
  RuWord,
  SprintGameWrapper,
  ButtonContainer,
  ButtonAnswer,
} from './SprintGame.styled';


const SprintGame = () => {
  const { onSetFooterVisibility } = useContext(ApplicationContext);
  useEffect(() => {
    onSetFooterVisibility(false);
  }, []);
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
            <ButtonAnswer variant="contained" color="success" size="large">
              Right
            </ButtonAnswer>
            <ButtonAnswer variant="contained" color="warning" size="large">
              Wrong
            </ButtonAnswer>
          </ButtonContainer>
        </GameCard>
      </GameContent>
      <Timer />
    </SprintGameWrapper>
  );
};

export default SprintGame;
