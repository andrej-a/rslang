import React from 'react';
import { GameCard, EngWord, RuWord, ButtonContainer, ButtonAnswer } from './SprintGame.styled';

export const Card = () => {
  return (
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
  );
};
