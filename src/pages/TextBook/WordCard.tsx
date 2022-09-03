import React, { useContext, useState } from 'react';
import { Capitalize } from '../../utils/utils';
import { IWord } from '../../models/IWord';
import {
  WordCardWrapper,
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
  WordCardButtonsWrapper,
  AddToUserWords,
  AddToUserWordsWrapper,
} from './TextBook.styled';
import { Colors } from '../../styles/constansts';
import { ApplicationContext } from '../../components/Context/ApplicationContext';

interface IWordCard {
  word: IWord;
  color: string;
  isModal?: boolean;
}

const WordCard = ({
  word,
  color,
  updateCreateUserWord,
  isModal = false,
}: IWordCard & {
  updateCreateUserWord: (word: IWord, difficulty: 'learned' | 'study' | 'hard') => Promise<void>;
}) => {
  const { isAuthorized, userInformation } = useContext(ApplicationContext);
  const { userDictionary, onSetUserDictionary } = useContext(ApplicationContext);
  const { userLearnedWords, onSetUserLearnedWords } = useContext(ApplicationContext);

  const [disableAudioBtn, setDisableAudioBtn] = useState<boolean>(false);

  return (
    <WordCardWrapper className={isModal ? '' : 'card'}>
      {isAuthorized ? (
        <AddToUserWordsWrapper>
          <AddToUserWords
            className={
              userLearnedWords.find((learnedWord) => learnedWord.id === word.id) ? 'active' : ''
            }
            state={'done'}
            color={Colors.BOOK_GRREN}
            onClick={() => updateCreateUserWord(word, 'learned')}
          />
          <AddToUserWords
            className={
              userDictionary.find((dictionaryWord) => dictionaryWord.id === word.id) ? 'active' : ''
            }
            state={'book'}
            color={Colors.BOOK_PURPLE}
            onClick={() => updateCreateUserWord(word, 'hard')}
          />
        </AddToUserWordsWrapper>
      ) : (
        <></>
      )}

      <WordCardImage imgPath={`https://react-rslang-back.herokuapp.com/${word.image}`} />

      <CardTitleWrapper>
        <AudioButton
          disabled={disableAudioBtn}
          onClick={() => {
            setDisableAudioBtn(true);
            const audioMeaning = new Audio(
              `https://react-rslang-back.herokuapp.com/${word.audioMeaning}`,
            );
            const audioExample = new Audio(
              `https://react-rslang-back.herokuapp.com/${word.audioExample}`,
            );
            audioMeaning.addEventListener('ended', () => audioExample.play());
            audioExample.addEventListener('ended', () => setDisableAudioBtn(false));
            audioMeaning.play();
          }}
        />

        <WordCardButtonsWrapper>
          <WordTitle>{Capitalize(word.word)}</WordTitle>
          <WordTranslation>{word.wordTranslate}</WordTranslation>
        </WordCardButtonsWrapper>

        <WordTranscription>{word.transcription}</WordTranscription>
      </CardTitleWrapper>

      <Line color={color} />

      <WordDescritionBlock>
        <WordDescritionBlockTitle>What it mean?</WordDescritionBlockTitle>
        <WordDescritionBlockExample
          dangerouslySetInnerHTML={{ __html: word.textMeaning }}
        ></WordDescritionBlockExample>
        <WordDescritionBlockTranslation
          dangerouslySetInnerHTML={{ __html: word.textMeaningTranslate }}
        ></WordDescritionBlockTranslation>
      </WordDescritionBlock>

      <WordDescritionBlock>
        <WordDescritionBlockTitle>Example</WordDescritionBlockTitle>
        <WordDescritionBlockExample
          dangerouslySetInnerHTML={{ __html: word.textExample }}
        ></WordDescritionBlockExample>
        <WordDescritionBlockTranslation
          dangerouslySetInnerHTML={{ __html: word.textExampleTranslate }}
        ></WordDescritionBlockTranslation>
      </WordDescritionBlock>
    </WordCardWrapper>
  );
};

export default WordCard;
