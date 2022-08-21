import React from 'react';

import { IWord } from '../../../components/Interfaces';
import { AudioButton, RightAnswersContainer, Word, WordEng, WordRu, WrongAnswersContainer } from './ResultPage.styled';
import ListenIcon from '../../../assets/listen.svg';

type Props = {
  answers: IWord[];
};

export const WordItem = ({ wordEng, wordRu, audio }: IWord) => {
  return (
    <Word>
      <AudioButton>
        <img src={ListenIcon} alt="icon" />
      </AudioButton>
      <WordEng>{wordEng} - </WordEng>
      <WordRu> {wordRu}</WordRu>
    </Word>
  );
};

export const RightAnswers = ({ answers }: Props) => {
  const data = answers;
  const items = data.map(({ key, ...itemProps }) => {
    return <WordItem key={key} {...itemProps} />;
  });
  return <RightAnswersContainer>{items}</RightAnswersContainer>;
};

export const WrongAnswers = ({ answers }: Props) => {
  const data = answers;
  const items = data.map(({ key, ...itemProps }) => {
    return <WordItem key={key} {...itemProps} />;
  });
  return <WrongAnswersContainer>{items}</WrongAnswersContainer>;
};
