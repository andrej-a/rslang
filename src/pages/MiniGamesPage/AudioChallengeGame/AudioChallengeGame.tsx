import React from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { AnswerButton, AudioChallengeWrapper, ButtonBlock, InnerBlock, MainBlock, PictureBlock, SkipQuestion } from './AudioChallengeGame.styled';

const AudioChallengeGame = () => {
  return (
        <AudioChallengeWrapper>
            <MainBlock>
            <ProgressBar percent={10}/>
            <InnerBlock>
                <ButtonBlock>
                <AnswerButton>Variant</AnswerButton>
                <AnswerButton>Variant</AnswerButton>
                <AnswerButton>Variant</AnswerButton>
                <AnswerButton>Variant</AnswerButton>
                <AnswerButton>Variant</AnswerButton>
                <SkipQuestion>I don`t know</SkipQuestion>
                </ButtonBlock>
                <PictureBlock></PictureBlock>
            </InnerBlock>
            </MainBlock>
        </AudioChallengeWrapper>
  );
};

export default AudioChallengeGame;