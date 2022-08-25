import React from 'react';
import FormTitle from '../../components/FormTitle/FormTitle';
import { cards } from './cardsDB';
import { Card, Description, ImageWrapper, MiniGamesWrapper, StyledPlayButton } from './MiniGames.styled';
const MiniGames = () => {
  const items = cards.map((card) => {
    const { id, TITLE, inputColor, src } = card;
    return (
      <Card key={id}>
        <FormTitle TITLE={TITLE} />
        <ImageWrapper inputColor={inputColor}>
          <img src={src} alt="game_image" />
        </ImageWrapper>
        <Description>
          <p>
            Check how much points you can get in one minute, making educated guesses about what is right and what is
            wrong
          </p>
        </Description>
        <StyledPlayButton variant="contained">Play</StyledPlayButton>
      </Card>
    );
  });

  return <MiniGamesWrapper>{items}</MiniGamesWrapper>;
};

export default MiniGames;
