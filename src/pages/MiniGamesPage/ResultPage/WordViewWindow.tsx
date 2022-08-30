import React from 'react';
import { IWordResult } from '../../../components/Interfaces';

import { RightAnswers, WrongAnswers } from './ResultAnswers';
import {
  WorldViewWindowContainer,
  RightAnswersTitle,
  WrongAnswersTitle,
} from './ResultPage.styled';

type Props = {
  rightAnswers: IWordResult[];
  wrongAnswers: IWordResult[];
};

const WorldViewWindow = ({ rightAnswers, wrongAnswers }: Props) => {
  return (
    <WorldViewWindowContainer>
      <RightAnswersTitle>Right:{rightAnswers.length} </RightAnswersTitle>
      <RightAnswers answers={rightAnswers} />
      <WrongAnswersTitle>Wrong: {wrongAnswers.length}</WrongAnswersTitle>
      <WrongAnswers answers={wrongAnswers} />
    </WorldViewWindowContainer>
  );
};

export default WorldViewWindow;
