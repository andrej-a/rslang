import React from 'react';

import { ResultStatistic, ResultTextInfo, ResultViewWindowContainer } from './ResultPage.styled';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { IWord } from '../../../components/Interfaces';
import { TextMessageResult } from '../../../styles/constansts';

type Props = {
  rightAnswers: IWord[];
  wrongAnswers: IWord[];
};
const ResultViewWindow = ({ rightAnswers, wrongAnswers }: Props) => {
  const allWordNumber = 10;
  const textMessage =
    rightAnswers.length === 10
      ? TextMessageResult.GOOD
      : rightAnswers.length > 5
        ? TextMessageResult.NORMAL
        : TextMessageResult.BAD;
  return (
    <ResultViewWindowContainer>
      <h4> {textMessage}</h4>
      <ResultTextInfo>
        <span>{rightAnswers.length}</span> words studied, <span>{wrongAnswers.length}</span> words to learn
      </ResultTextInfo>
      <ResultStatistic>
        <ProgressBar percent={(rightAnswers.length * 100) / allWordNumber } />
        <p>Accurancy</p>
      </ResultStatistic>
    </ResultViewWindowContainer>
  );
};

export default ResultViewWindow;
