import React, { useContext, useState, useEffect } from 'react';
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
  ShowProgressBtn,
  Mask,
  StatTable,
} from './TextBook.styled';
import { Colors, ProgressBarInfo } from '../../styles/constansts';
import { ApplicationContext } from '../../components/Context/ApplicationContext';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Sprint from '../../assets/TrackField.svg';
import AudioChallenge from '../../assets/ListenMusic.svg';
import { IUserWord } from '../../service/constants';
import { getUserWordByCommonWordId, getUserWordsById } from '../../service/userWords';

interface IWordCard {
  word: IWord;
  color: string;
  isModal?: boolean;
}

const WordCard = ({
  word,
  color,
  updateCreateUserWord,
  showStat,
  onShowStat,
  isModal = false,
}: IWordCard & {
  updateCreateUserWord: (word: IWord, difficulty: 'learned' | 'study' | 'hard') => Promise<void>;
  showStat: boolean;
  onShowStat: () => void;
}) => {
  const { isAuthorized, userDictionary, userLearnedWords, userInformation } =
    useContext(ApplicationContext);
  const [disableAudioBtn, setDisableAudioBtn] = useState<boolean>(false);
  const [userWord, setUserWord] = useState<IUserWord>();
  useEffect(() => {
    getUserWordByCommonWordId(word.id).then((data: IUserWord | undefined) => {
      setUserWord(data);
    });
  }, [showStat]);
  return (
    <WordCardWrapper className={isModal ? '' : 'card'}>
      <WordCardImage imgPath={`https://react-rslang-back.herokuapp.com/${word.image}`}>
        {isAuthorized && !showStat ? (
          <AddToUserWordsWrapper>
            <AddToUserWords
              className={
                userLearnedWords.find((learnedWord) => learnedWord.id === word.id) ? 'active' : ''
              }
              state={'done'}
              color={Colors.BOOK_GRREN}
              onClick={() => updateCreateUserWord(word, 'study')}
            />
            <AddToUserWords
              className={
                userDictionary.find((dictionaryWord) => dictionaryWord.id === word.id)
                  ? 'active'
                  : ''
              }
              state={'book'}
              color={Colors.BOOK_PURPLE}
              onClick={() => updateCreateUserWord(word, 'hard')}
            />
          </AddToUserWordsWrapper>
        ) : (
          <></>
        )}
        {isAuthorized ? (
          <ShowProgressBtn onClick={() => onShowStat()}>
            {showStat ? 'to word' : 'progress'}
          </ShowProgressBtn>
        ) : (
          <></>
        )}
        {showStat ? (
          <Mask>
            <ProgressBar
              percent={
                Math.round(
                  ((Number(userWord?.optional.rightAudio) +
                    Number(userWord?.optional.rightSprint)) *
                    100) /
                    (Number(userWord?.optional.rightAudio) +
                      Number(userWord?.optional.rightSprint) +
                      Number(userWord?.optional.wrongAudio) +
                      Number(userWord?.optional.wrongSprint) || 1),
                ) || 0
              }
              color={Colors.WHITE}
              diametr={ProgressBarInfo.SIZE_LARGE}
              strokeWidth={8}
            />
          </Mask>
        ) : (
          <></>
        )}
      </WordCardImage>
      {!showStat ? (
        <>
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
        </>
      ) : (
        <>
          <StatTable imagePath={Sprint} iconColor={Colors.GREEN}>
            <tbody>
              <tr>
                <th className="td__icon"></th>
                <th>Sprint</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td className="right">Right: </td>
                <td className="right">{userWord?.optional.rightSprint ?? 0}</td>
              </tr>
              <tr className="wrong">
                <td></td>
                <td className="wrong">Wrong: </td>
                <td className="wrong">{userWord?.optional.wrongSprint ?? 0}</td>
              </tr>
            </tbody>
          </StatTable>
          <StatTable imagePath={AudioChallenge} iconColor={Colors.LIGHT_GREEN}>
            <tbody>
              <tr>
                <th className="td__icon"></th>
                <th>Audio challenge</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td className="right">Right: </td>
                <td className="right">{userWord?.optional.rightAudio ?? 0}</td>
              </tr>
              <tr>
                <td></td>
                <td className="wrong">Wrong: </td>
                <td className="wrong">{userWord?.optional.wrongAudio ?? 0}</td>
              </tr>
            </tbody>
          </StatTable>
        </>
      )}
    </WordCardWrapper>
  );
};

export default WordCard;
