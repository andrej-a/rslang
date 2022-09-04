import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApplicationContext } from '../../../components/Context/ApplicationContext';

import { IWord } from '../../../models/IWord';
import getGameInformation from '../../../utils/getGameInformation';
import { getNoStudiedWordsFromServer } from '../SprintGame/getNotStudiedWord';
import { UpdateOrCreateUserWord } from '../SprintGame/UpdateOrCreateUserWord';
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
  //изменение точно касается еня не уверена на счет применяемости в других играх
  if (isResultOpen.length === 0) {
    const userId = localStorage.getItem('userId');
    console.log(userId);

    correctAnswers.map((word) => {
      const obj = {
        difficulty: 'learned',
        optional: {
          rightAnswers: 0,
          rightAudio: 0,
          wrongAudio: 0,
          rightSprint: 1,
          wrongSprint: 0,
        },
      };
      UpdateOrCreateUserWord(userId, word.id, obj, 1, 0, 0, 1, 0);
    });
    wrongAnswers.map((word) => {
      const obj = {
        difficulty: 'learned',
        optional: {
          rightAnswers: 0,
          rightAudio: 0,
          wrongAudio: 0,
          rightSprint: 0,
          wrongSprint: 1,
        },
      };
      UpdateOrCreateUserWord(userId, word.id, obj, 0, 0, 0, 0, 1);
    });
  }
  //--------------------------------------------------------------------

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
