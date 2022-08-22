import React, { useState } from 'react';
import { TextBookWrapper, LevelButtonsWrapper, WordButtonsWrapper, GameBlock, ProceedToGameButton, ProceedToGameButtonsWrapper } from './TextBook.styled';
import LevelButton from './LevelButton';
import WordButton from './WordButton';
import { Colors } from '../../styles/constansts';
import { Capitalize } from '../../utils/utils';
import { emptyWord, totalCountPages, words } from './ExampleData';
import Pagination from './Pagination';
import WordCard from './WordCard';
import { IWord } from '../../models/IWord';
import Sprint from '../../assets/TrackField.svg';
import AudioChallenge from '../../assets/ListenMusic.svg';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const TextBookContent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeLevel, setActiveLevel] = useState<string>('A1');
  const [activeWord, setActiveWord] = useState<IWord>(emptyWord);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(() => true);
  const handleClose = () => { setOpen(() => false); setActiveWord(() => emptyWord); };

  const changeLevel = (level: string) => {
    setActiveLevel(() => level);
  };
  const selectWord = (wordId: string) => {
    setActiveWord(() => (words.find(word => word.id === wordId) as IWord));
  };
  const paginate = (direction: number, numButt = false) => {
    if (typeof direction !== 'number') return;
    if (numButt) setCurrentPage(() => direction);
    else setCurrentPage(page => page + direction);
  };

  const levels = new Map([
    ['A1', { color: Colors.BOOK_GRREN, fullname: 'Elementary 1' }],
    ['A2', { color: Colors.BOOK_YELLOW, fullname: 'Elementary 2' }],
    ['B1', { color: Colors.BOOK_AZURE_BLUE, fullname: 'Elementary 1' }],
    ['B2', { color: Colors.BOOK_BLUE, fullname: 'Elementary 2' }],
    ['C1', { color: Colors.BOOK_ORANGE, fullname: 'Elementary 1' }],
    ['C2', { color: Colors.BOOK_RED, fullname: 'Elementary 4' }]]);

  const levelsButtons = [];
  for (const [level, { color, fullname }] of levels) {
    levelsButtons.push((<LevelButton name={level} color={color} fullname={fullname} activeLevel={activeLevel} changeLevel={changeLevel} key={`levelButton${color}`} />));
  }

  return (
        <TextBookWrapper className='TEST'>
            <GameBlock>
                <LevelButtonsWrapper>
                    {levelsButtons}
                </LevelButtonsWrapper>
                <WordButtonsWrapper>
                    {words.map((word, index) =>
                      (<WordButton
                        word={Capitalize(word.word)}
                        wordTranslate={Capitalize(word.wordTranslate)}
                        id={word.id}
                        key={word.id + index}
                        activeWord={activeWord.id}
                        selectWord={selectWord}
                        handleClick={handleOpen} />))}
                </WordButtonsWrapper>
            </GameBlock>
            <WordCard
                word={activeWord}
                color={levels.get(activeLevel)?.color ?? ''}
            />
            {global.innerWidth < 1230 ?
              (<Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                      p: 4,
                      width: 'fit-content',
                      margin: '0 auto',
                    }}>
                        <WordCard
                            word={activeWord}
                            color={levels.get(activeLevel)?.color ?? ''}
                            isModal={true}
                        />
                    </Box>
                </Modal>) : (<></>)

            }

            <Pagination currentPage={currentPage} pagination={paginate} totalCount={totalCountPages} />
            <ProceedToGameButtonsWrapper>
                <ProceedToGameButton imagePath={Sprint} iconColor='#07D6A0'>
                    <div className="button__icon"></div>
                    Sprint
                </ProceedToGameButton>
                <ProceedToGameButton imagePath={AudioChallenge} iconColor='#4EE57E'>
                    <div className="button__icon"></div>
                    Audio challenge
                </ProceedToGameButton>
            </ProceedToGameButtonsWrapper>
        </TextBookWrapper>
  );
};

export default TextBookContent;