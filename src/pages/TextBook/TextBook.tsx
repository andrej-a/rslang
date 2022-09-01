import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { IWord } from '../../models/IWord';
import { Colors, levels, WindowSizes } from '../../styles/constansts';
import { Capitalize } from '../../utils/utils';
import { emptyWord, totalCountPages, words } from './ExampleData';

import {
  TextBookWrapper,
  LevelButtonsWrapper,
  WordButtonsWrapper,
  GameBlock,
  ProceedToGameButton,
  ProceedToGameButtonsWrapper,
} from './TextBook.styled';

import LevelButton from './LevelButton';
import WordButton from './WordButton';
import Pagination from './Pagination';
import WordCard from './WordCard';
import Sprint from '../../assets/TrackField.svg';
import AudioChallenge from '../../assets/ListenMusic.svg';
import { Link } from 'react-router-dom';
import { getWords } from '../../service/getWords';
import { ApplicationContext } from '../../components/Context/ApplicationContext';

const TextBook = () => {
  const { onSetTextBookWords } = useContext(ApplicationContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeLevel, setActiveLevel] = useState<string>('A1');
  const [activeWord, setActiveWord] = useState<IWord>(words[0] ?? emptyWord);
  const [open, setOpen] = React.useState(false);
  const [wordsGroup, setGroup] = useState(0);
  const handleOpen = () => setOpen(() => true);
  const handleClose = () => {
    setOpen(() => false);
    setActiveWord(() => emptyWord);
  };

  const changeLevel = (level: string) => {
    setActiveLevel(() => level);
  };
  const selectWord = (wordId: string) => {
    setActiveWord(() => words.find((word) => word.id === wordId) as IWord);
  };
  const paginate = (direction: number, numButt = false) => {
    if (typeof direction !== 'number') return;
    if (numButt) setCurrentPage(() => direction);
    else setCurrentPage((page) => page + direction);
  };
  const onSetGroup = (value: number) => {
    setGroup(value);
  };

  const levelsButtons = [];
  for (const [level, { color, fullname, group }] of levels) {
    levelsButtons.push(
      <LevelButton
        name={level}
        group={group}
        color={color}
        fullname={fullname}
        activeLevel={activeLevel}
        changeLevel={changeLevel}
        onSetGroup={onSetGroup}
        key={`levelButton${color}`}
      />,
    );
  }

  return (
    <TextBookWrapper className="TEST">
      <GameBlock>
        <LevelButtonsWrapper>{levelsButtons}</LevelButtonsWrapper>

        <WordButtonsWrapper>
          {words.map((word, index) => (
            <WordButton
              word={Capitalize(word.word)}
              wordTranslate={Capitalize(word.wordTranslate)}
              id={word.id}
              key={word.id + index}
              activeWord={activeWord.id}
              selectWord={selectWord}
              handleClick={handleOpen}
            />
          ))}
        </WordButtonsWrapper>
      </GameBlock>

      {global.innerWidth < Number(WindowSizes.textBookSize) ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              p: 4,
              width: 'fit-content',
              margin: '0 auto',
            }}
          >
            <WordCard
              word={activeWord}
              color={levels.get(activeLevel)?.color ?? ''}
              isModal={true}
            />
          </Box>
        </Modal>
      ) : (
        <WordCard word={activeWord} color={levels.get(activeLevel)?.color ?? ''} />
      )}

      <Pagination currentPage={currentPage} pagination={paginate} totalCount={totalCountPages} />

      <ProceedToGameButtonsWrapper>
        <Link to={'../games/sprint/start'}>
          <ProceedToGameButton imagePath={Sprint} iconColor={Colors.GREEN}>
            <div className="button__icon"></div>
            Sprint
          </ProceedToGameButton>
        </Link>
        <Link
          onClick={() =>
            getWords(wordsGroup, currentPage - 1).then((data) =>
              onSetTextBookWords(data as unknown as IWord[]),
            )
          }
          to={'../games/audiochallenge/start'}
        >
          <ProceedToGameButton imagePath={AudioChallenge} iconColor={Colors.LIGHT_GREEN}>
            <div className="button__icon"></div>
            Audio challenge
          </ProceedToGameButton>
        </Link>
      </ProceedToGameButtonsWrapper>
    </TextBookWrapper>
  );
};

export default TextBook;
