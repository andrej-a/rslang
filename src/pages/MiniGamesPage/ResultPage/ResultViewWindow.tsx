import React from 'react';

import { ResultStatistic, ResultTextInfo, ResultViewWindowContainer } from './ResultPage.styled';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { IWordResult } from '../../../components/Interfaces';
import { Colors, GameResultInfo, TextMessageResult } from '../../../styles/constansts';

type Props = {
  rightAnswers: IWordResult[];
  wrongAnswers: IWordResult[];
};
const ResultViewWindow = ({ rightAnswers, wrongAnswers }: Props) => {
  const allWordNumber = GameResultInfo.WORD_COUNT;
  const textMessage =
    rightAnswers.length === allWordNumber
      ? TextMessageResult.GOOD
      : rightAnswers.length > GameResultInfo.HALF_WORD_COUNT
        ? TextMessageResult.NORMAL
        : TextMessageResult.BAD;
  return (
    <ResultViewWindowContainer>
      <h4> {textMessage}</h4>
      <ResultTextInfo>
        <span>{rightAnswers.length}</span> words studied, <span>{wrongAnswers.length}</span> words to learn
      </ResultTextInfo>
      <ResultStatistic>
        <ProgressBar
          percent={(rightAnswers.length * GameResultInfo.PERSENT) / allWordNumber}
          color={Colors.LIGHT_GRAY}
        />
        <p>Accurancy</p>
      </ResultStatistic>
    </ResultViewWindowContainer>
  );
};

export default ResultViewWindow;
