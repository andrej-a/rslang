import React from 'react';
import { Capitalize } from '../../utils/utils';
import { IWord } from '../../models/IWord';
import { WordCardWrapper, 
  WordCardImage, 
  AudioButton, 
  WordTitle, 
  WordTranscription, 
  WordTranslation, 
  CardTitleWrapper, 
  Line, 
  WordDescritionBlock, 
  WordDescritionBlockTitle,
  WordDescritionBlockExample,
  WordDescritionBlockTranslation,
  WordCardButtonsWrapper } from './TextBook.styled';

interface IWordCard { 
  word: IWord, 
  color: string, 
  isModal?: boolean 
}

const WordCard = ({ word, color, isModal = false }: IWordCard) => {
  return (
        <WordCardWrapper className={ isModal ? '' : 'card' }>

            <WordCardImage imgPath={`https://react-rslang-back.herokuapp.com/${word.image}`} />

            <CardTitleWrapper >
                <AudioButton onClick={ () => {
                  const audioMeaning = new Audio(`https://react-rslang-back.herokuapp.com/${word.audioMeaning}`);
                  const audioExample = new Audio(`https://react-rslang-back.herokuapp.com/${word.audioExample}`);
                  audioMeaning.addEventListener('ended', () => audioExample.play());
                  audioMeaning.play();
                }} />

                <WordCardButtonsWrapper>
                    <WordTitle>{Capitalize(word.word)}</WordTitle>
                    <WordTranslation>{word.wordTranslate}</WordTranslation>
                </WordCardButtonsWrapper>

                <WordTranscription>{word.transcription}</WordTranscription>
            </CardTitleWrapper>

            <Line color={color} />

            <WordDescritionBlock>
                <WordDescritionBlockTitle>What it mean?</WordDescritionBlockTitle>
                <WordDescritionBlockExample dangerouslySetInnerHTML={{ __html: word.textMeaning }}></WordDescritionBlockExample>
                <WordDescritionBlockTranslation dangerouslySetInnerHTML={{ __html: word.textMeaningTranslate }}></WordDescritionBlockTranslation>
            </WordDescritionBlock>

            <WordDescritionBlock>
                <WordDescritionBlockTitle>Example</WordDescritionBlockTitle>
                <WordDescritionBlockExample dangerouslySetInnerHTML={{ __html: word.textExample }}></WordDescritionBlockExample>
                <WordDescritionBlockTranslation dangerouslySetInnerHTML={{ __html: word.textExampleTranslate }}></WordDescritionBlockTranslation>
            </WordDescritionBlock>

        </WordCardWrapper>
  );
};

export default WordCard;