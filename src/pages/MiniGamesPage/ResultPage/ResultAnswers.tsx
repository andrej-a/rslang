import React from 'react';

import { IWordResult } from '../../../components/Interfaces';
import {
  AudioButton,
  RightAnswersContainer,
  Word,
  WordEng,
  WordRu,
  WrongAnswersContainer,
} from './ResultPage.styled';
import ListenIcon from '../../../assets/listen.svg';
import { IWord } from '../../../models/IWord';

type Props = {
  answers: IWord[];
};

export const WordItem = ({ word, wordTranslate, audio }: IWord) => {
  const startSong = (url: string | undefined) => {
    const audioExample = new Audio(`//https://react-rslang-back.herokuapp.com/${url}`);
    audioExample.play();
  };

  return (
    <Word>
      <AudioButton onClick={() => startSong(audio)}>
        <img src={ListenIcon} alt="icon" />
      </AudioButton>
      <WordEng>{word} - </WordEng>
      <WordRu> {wordTranslate}</WordRu>
    </Word>
  );
};

export const RightAnswers = ({ answers }: Props) => {
  const data = answers;
  const items = data.map(({...itemProps }, id) => {
    return <WordItem key={id} {...itemProps} />;
  });
  return <RightAnswersContainer>{items}</RightAnswersContainer>;
};

export const WrongAnswers = ({ answers }: Props) => {
  const data = answers;
  const items = data.map(({...itemProps }, id) => {
    return <WordItem key={id} {...itemProps} />;
  });
  return <WrongAnswersContainer>{items}</WrongAnswersContainer>;
};
