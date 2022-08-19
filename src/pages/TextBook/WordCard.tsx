import React from 'react';
import { Capitalize } from '../../utils/utils';
import { IWord } from '../../models/IWord';
import { WordCardWrapper, WordCardImage, AudioButton, WordTitle, WordTranscription, WordTranslation, CardTitleWrapper, Line } from './TextBook.styled';

const WordCard = ({ word, color }: { word: IWord, color: string }) => {
  return (
        <WordCardWrapper>
            <WordCardImage imgPath={`https://react-rslang-back.herokuapp.com/${word.image}`} />
            <CardTitleWrapper >
                <AudioButton />
                <div style={{ display: 'flex', flexDirection: 'column', padding: '15px 0 0 42px' }}>
                    <WordTitle>{Capitalize(word.word)}</WordTitle>
                    <WordTranslation>{word.wordTranslate}</WordTranslation>
                </div>
                <WordTranscription>{word.transcription}</WordTranscription>
            </CardTitleWrapper>
            <Line color={color} />
        </WordCardWrapper>
  );
};

export default WordCard;