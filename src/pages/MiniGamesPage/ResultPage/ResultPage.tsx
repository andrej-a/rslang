import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

import { IWord } from '../../../models/IWord';
import getGameInformation from '../../../utils/getGameInformation';
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
  isResultOpen: string;
  countAnswers: number;
};

const ResultPage = ({ correctAnswers, wrongAnswers, isResultOpen, countAnswers }: Props) => {
  const [resultToggler, setResultToggler] = useState(false);
  const [isActiveResult, setActiveResult] = useState(true);
  const [isActiveWord, setActiveWord] = useState(false);
  const { game } = useParams();
  const onActive = () => {
    setResultToggler(!resultToggler);
    setActiveResult(!isActiveResult);
    setActiveWord(!isActiveWord);
  };

  return (
    <ResultWrapper className={isResultOpen}>
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
        <ResultViewWindow
          rightAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          allWordNumber={countAnswers}
        />
      ) : (
        <WordViewWindow rightAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
      )}
      <ButtonContainer>
        <Link to={`/games/${game}/start`}>
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
