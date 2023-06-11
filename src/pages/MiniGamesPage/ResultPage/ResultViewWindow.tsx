/* eslint-disable prettier/prettier */
import React from 'react';

import { ResultStatistic, ResultTextInfo, ResultViewWindowContainer } from './ResultPage.styled';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { Colors, GameResultInfo, TextMessageResult } from '../../../styles/constansts';
import { IWord } from '../../../models/IWord';

type Props = {
  rightAnswers: IWord[];
  wrongAnswers: IWord[];
};
const ResultViewWindow = ({ rightAnswers, wrongAnswers }: Props) => {
  const textMessage =
    rightAnswers.length === 0 && wrongAnswers.length === 0
      ? ''
      : rightAnswers.length === rightAnswers.length + wrongAnswers.length
      ? TextMessageResult.GOOD
      : rightAnswers.length > (rightAnswers.length + wrongAnswers.length) / 2
      ? TextMessageResult.NORMAL
      : TextMessageResult.BAD;
  return (
    <ResultViewWindowContainer>
      <h4> {textMessage}</h4>
      <ResultTextInfo>
        <span>{rightAnswers.length}</span> words studied, <span>{wrongAnswers.length}</span> words
        to learn
      </ResultTextInfo>
      <ResultStatistic>
        <ProgressBar
          percent={
            rightAnswers.length + wrongAnswers.length > 0
              ? Math.floor(
                  (rightAnswers.length / (rightAnswers.length + wrongAnswers.length)) * 100,
                )
              : 0
          }
          color={Colors.LIGHT_GRAY}
        />
        <p>Accurancy</p>
      </ResultStatistic>
    </ResultViewWindowContainer>
  );
};

export default ResultViewWindow;
