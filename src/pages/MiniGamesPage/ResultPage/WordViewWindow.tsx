import React from 'react';

import { IWord } from '../../../models/IWord';
import { RightAnswers, WrongAnswers } from './ResultAnswers';
import {
  WorldViewWindowContainer,
  RightAnswersTitle,
  WrongAnswersTitle,
} from './ResultPage.styled';

type Props = {
  rightAnswers: IWord[];
  wrongAnswers: IWord[];
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
