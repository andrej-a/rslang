import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IWord } from '../../../components/Interfaces';
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
  result: IWord[];
};

const ResultPage = ({ result }: Props) => {
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
          disabled={isActiveResult ? true : false}
        >
          Results
        </SeeResultButton>
        <SeeWordButton
          onClick={() => onActive()}
          className={isActiveWord ? 'active' : ''}
          disabled={isActiveResult ? false : true}
        >
          View words
        </SeeWordButton>
      </HeaderButtonContainer>
      {resultToggler === false ? (
        <ResultViewWindow rightAnswers={result} wrongAnswers={result} />
      ) : (
        <WordViewWindow rightAnswers={result} wrongAnswers={result} />
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
