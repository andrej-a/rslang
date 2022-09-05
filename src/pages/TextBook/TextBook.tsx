/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FadeLoader from 'react-spinners/FadeLoader';

import { IWord } from '../../models/IWord';
import { Colors, levels, WindowSizes, wPerPage } from '../../styles/constansts';
import { Capitalize } from '../../utils/utils';
import { emptyWord, totalCountPages } from './ExampleData';

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
import {
  createUserWord,
  getUserWordByCommonWordId,
  getUserWordsArray,
  updateUserWord,
} from '../../service/userWords';
import { emptyOtional, IUserWord } from '../../service/constants';

function getLevel(currGroup: number) {
  for (const [level, { group }] of levels) {
    if (currGroup === group) return level;
  }
  return 'A1';
}

const TextBook = () => {
  const {
    isAuthorized,
    userInformation,
    userDictionary,
    onSetUserDictionary,
    userLearnedWords,
    onSetUserLearnedWords,
    currentPage,
    setCurrentPage,
    onSetIsTextBookInitGame,
    onSetIsDifficultWord,
    wordsGroup,
    onSetGroup,
  } = useContext(ApplicationContext);

  const [words, setWords] = useState<IWord[]>([]);
  const [activeLevel, setActiveLevel] = useState<string>(getLevel(wordsGroup));
  const [activeWord, setActiveWord] = useState<IWord>(emptyWord);
  const [open, setOpen] = useState<boolean>(false);
  const [updateArrays, setUpdateArrays] = useState<boolean>(false);
  const [showStat, setShowStat] = useState<boolean>(false);

  const updateInfo = () => {
    async function setData() {
      const data =
        wordsGroup === levels.get('D')!.group
          ? userDictionary.slice(currentPage * wPerPage - wPerPage, currentPage * wPerPage)
          : await getWords(wordsGroup, currentPage - 1);
      setWords(data);
      return data;
    }
    setData().then((data) =>
      setActiveWord(
        data.find((word) => activeWord.id === word.id) ? activeWord : data[0] ?? emptyWord,
      ),
    );
  };
  useEffect(() => {
    setWords([]);
  }, [wordsGroup, currentPage]);
  useEffect(() => {
    updateInfo();
  }, [wordsGroup, currentPage, updateArrays, activeLevel === 'D' ? userDictionary : null]);

  useEffect(() => {
    getUserWordsArray().then(async (data) => {
      onSetUserDictionary(await data.dictionary);
      onSetUserLearnedWords(await data.learned);
    });
  }, []);

  useEffect(() => {
    onSetIsTextBookInitGame(true);
  }, []);

  const onShowStat = () => {
    setShowStat(() => !showStat);
  };

  const handleOpen = () => setOpen(() => true);
  const handleClose = () => {
    setOpen(() => false);
    setActiveWord(() => emptyWord);
  };

  useEffect(() => {
    onSetIsTextBookInitGame(true);
  }, []);

  const changeLevel = (level: string, group: number) => {
    setActiveLevel(() => level);
    onSetIsDifficultWord(group < levels.get('D')!.group ? false : true);
    onSetGroup(group);
    setShowStat(false);
  };

  const selectWord = (wordId: string) => {
    setActiveWord(() => words.find((word) => word.id === wordId) as IWord);
    setShowStat(false);
  };

  const paginate = (direction: number, numButt = false) => {
    if (typeof direction !== 'number') return;
    if (numButt) setCurrentPage(() => direction);
    else setCurrentPage((page) => page + direction);
  };

  const getWordBtnClassName = (word: IWord) => {
    if (userLearnedWords.find((learnedWord) => learnedWord.id === word.id)) return 'study';
    else if (userDictionary.find((dictionaryWord) => dictionaryWord.id === word.id))
      return 'dictionary';
    else return '';
  };

  const updateCreateUserWord = async (word: IWord, difficulty: 'learned' | 'study' | 'hard') => {
    getUserWordByCommonWordId(word.id).then((userWord) => {
      if (!userWord)
        createUserWord({
          userId: userInformation.userID,
          wordId: word.id,
          word: {
            difficulty: difficulty,
            optional: emptyOtional,
          },
        }).then(() => {
          switch (difficulty) {
            case 'hard':
              onSetUserDictionary([...userDictionary, word]);
              break;
            case 'study':
              onSetUserLearnedWords([...userLearnedWords, word]);
              break;
          }
          setUpdateArrays(() => !updateArrays);
        });
      else
        updateUserWord({
          userId: userInformation.userID,
          wordId: userWord.wordId,
          word: {
            difficulty: difficulty === userWord.difficulty ? 'learned' : difficulty,
            optional: userWord.optional,
          },
        }).then(() => {
          const findInDictionary = userDictionary.find(
            (dictionaryWord) => dictionaryWord.id === word.id,
          );
          const findInLearned = userLearnedWords.find((learndWord) => learndWord.id === word.id);
          if (findInDictionary) {
            userDictionary.splice(userDictionary.indexOf(findInDictionary), 1);
            onSetUserDictionary(userDictionary);
            if (difficulty === 'study') onSetUserLearnedWords([...userLearnedWords, word]);
          } else if (findInLearned) {
            userLearnedWords.splice(userLearnedWords.indexOf(findInLearned), 1);
            onSetUserLearnedWords(userLearnedWords);
            if (difficulty === 'hard') onSetUserDictionary([...userDictionary, word]);
          } else if (!findInDictionary && !findInLearned) {
            if (difficulty === 'hard') onSetUserDictionary([...userDictionary, word]);
            else if (difficulty === 'study') onSetUserLearnedWords([...userLearnedWords, word]);
          }
          setUpdateArrays(() => !updateArrays);
        });
    });
  };

  const levelsButtons = [];

  for (const [level, { color, fullname, group }] of levels) {
    if ((group < levels.get('D')!.group && !isAuthorized) || isAuthorized)
      levelsButtons.push(
        <LevelButton
          name={level}
          color={color}
          fullname={fullname}
          activeLevel={activeLevel}
          changeLevel={changeLevel}
          group={group}
          key={`levelButton${color}`}
        />,
      );
  }

  return (
    <TextBookWrapper>
      <GameBlock>
        <LevelButtonsWrapper>{levelsButtons}</LevelButtonsWrapper>
        <WordButtonsWrapper>
          {(words.length && userLearnedWords.length && userDictionary.length && isAuthorized) ||
          (words.length && !isAuthorized) ? (
              words.map((word, index) => (
              <WordButton
                word={Capitalize(word.word)}
                wordTranslate={Capitalize(word.wordTranslate)}
                id={word.id}
                key={word.id + index}
                activeWord={activeWord.id}
                selectWord={selectWord}
                handleClick={handleOpen}
                className={getWordBtnClassName(word)}
              />
              ))
            ) : (
            <FadeLoader className="spinner" color={Colors.WHITE} />
            )}
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
              updateCreateUserWord={updateCreateUserWord}
              onShowStat={onShowStat}
              showStat={showStat}
            />
          </Box>
        </Modal>
      ) : (
        <WordCard
          word={activeWord}
          color={levels.get(activeLevel)?.color ?? ''}
          updateCreateUserWord={updateCreateUserWord}
          onShowStat={onShowStat}
          showStat={showStat}
        />
      )}

      <Pagination
        currentPage={currentPage}
        pagination={paginate}
        totalCount={
          wordsGroup === levels.get('D')!.group
            ? Math.ceil(userDictionary.length / wPerPage)
            : totalCountPages
        }
      />

      <ProceedToGameButtonsWrapper>
        <Link to={'../games/sprint/start'}>
          <ProceedToGameButton imagePath={Sprint} iconColor={Colors.GREEN}>
            <div className="button__icon"></div>
            Sprint
          </ProceedToGameButton>
        </Link>
        <Link to={'../games/audiochallenge/start'}>
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
