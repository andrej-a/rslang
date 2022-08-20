import React from 'react';
import FormTitle from '../../components/FormTitle/FormTitle';
import { Colors } from '../../styles/constansts';
import { Card, Description, ImageWrapper, MiniGamesWrapper, StyledPlayButton } from './MiniGames.styled';
import SPRINT from '../../assets/sprintImage.svg';
import AUDIO from '../../assets/audioImage.svg';
const MiniGames = () => {
  const { GREEN, LIGHT_GREEN } = Colors;
  return (
        <MiniGamesWrapper>
            <Card>
                <FormTitle TITLE={'Sprint'}/>
                <ImageWrapper
                inputColor={GREEN}
                >
                    <img src={SPRINT} alt="game_image" />
                </ImageWrapper>
                <Description>
                    <p>Check how much points you can get in one minute, making educated guesses about what is right and what is wrong</p>
                </Description>
                <StyledPlayButton variant="contained">Play</StyledPlayButton>
            </Card>
            <Card>
                <FormTitle TITLE={'Audio challenge'}/>
                <ImageWrapper
                inputColor={LIGHT_GREEN}
                >
                    <img src={AUDIO} alt="game_image" />
                </ImageWrapper>
                <Description>
                    <p>Check how much points you can get in one minute, making educated guesses about what is right and what is wrong</p>
                </Description>
                <StyledPlayButton variant="contained">Play</StyledPlayButton>
            </Card>
        </MiniGamesWrapper>
  );
};

export default MiniGames;