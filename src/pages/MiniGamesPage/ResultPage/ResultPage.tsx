import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IWordResult } from '../../../components/Interfaces';
import { IWord } from '../../../models/IWord';
import {
  ButtonContainer,
  HeaderButtonContainer,
  PlayAgainButton,
  ResultWrapper,
  SeeResultButton,
  SeeWordButton,
  ToTextbookButton,
} from './ResultPage.styled';
import ResultViewWindow from './ResultViewWindow';
import WordViewWindow from './WordViewWindow';

type Props = {
  correctAnswers: IWord[];
  wrongAnswers: IWord[];
};

const ResultPage = ({ correctAnswers, wrongAnswers }: Props) => {
  const [resultToggler, setResultToggler] = useState(false);
  const [isActiveResult, setActiveResult] = useState(true);
  const [isActiveWord, setActiveWord] = useState(false);

  const onActive = () => {
    setResultToggler(!resultToggler);
    setActiveResult(!isActiveResult);
    setActiveWord(!isActiveWord);
  };

  return (
    <ResultWrapper>
      <HeaderButtonContainer>
        <SeeResultButton
          onClick={() => onActive()}
          className={isActiveResult ? 'active' : ''}
          disabled={isActiveResult}
        >
          Results
        </SeeResultButton>
        <SeeWordButton
          onClick={() => onActive()}
          className={isActiveWord ? 'active' : ''}
          disabled={!isActiveResult}
        >
          View words
        </SeeWordButton>
      </HeaderButtonContainer>
      {resultToggler === false ? (
        <ResultViewWindow rightAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
      ) : (
        <WordViewWindow rightAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
      )}
      <ButtonContainer>
        <Link to={'/sprint'}>
          <PlayAgainButton>Play again</PlayAgainButton>
        </Link>
        <Link to={'/textbook'}>
          <ToTextbookButton>To textbook</ToTextbookButton>
        </Link>
      </ButtonContainer>
    </ResultWrapper>
  );
};

export default ResultPage;
