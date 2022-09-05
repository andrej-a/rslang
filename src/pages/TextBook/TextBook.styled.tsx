import styled from 'styled-components';
import { Colors, WindowSizes } from '../../styles/constansts';
import audio_play from '../../assets/audio_play.svg';
import LevelHint from '../../assets/levelHint.svg';

import BookBlack from '../../assets/return_book_black.svg';
import DoneBlack from '../../assets/done_black.svg';
import BookWhite from '../../assets/return_book_white.png';
import DoneWhite from '../../assets/done_white.png';

const { textBookSize } = WindowSizes;

export const TextBookWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;
  margin: 100px auto;
  grid-gap: 29px 97px;

  @media (max-width: ${textBookSize}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const GameBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 29px;
`;
export const LevelButtonsWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;
export const LevelButtonStyled = styled.button.attrs(
  (props: { levelColor: string; title: string; state: boolean }) => props,
)`
  height: 52px;
  width: 52px;
  border-radius: 4px;
  position: relative;
  background-color: ${(props) => (props.state ? props.levelColor : Colors.WHITE)};
  color: ${(props) => (props.state ? Colors.WHITE : Colors.BLACK)};
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  &:before {
    display: block;
    position: absolute;
    top: 4px;
    right: 4px;
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${(props) => props.levelColor};
  }
  &:after {
    background: url('${LevelHint}') no-repeat;
    padding: 5px 0;
    position: absolute;
    top: -37px;
    left: -7px;
    text-align: center;
    width: 122px;
    height: 37px;
    z-index: 1;
    visibility: hidden;
    font-size: 14px;
    line-height: 16px;
    content: '${(props) => props.title}';
    color: ${Colors.BLACK};
  }
  &:hover:after {
    visibility: visible;
  }
`;
export const WordButtonStyled = styled.button.attrs((props: { state: boolean }) => props)`
  width: 220px;
  height: 50px;
  font-weight: ${(props) => (props.state ? '600' : '400')};
  font-size: 22px;
  line-height: 35px;
  letter-spacing: 0.015em;
  border: 3px solid ${Colors.WHITE};
  border-radius: 4px;
  background-color: ${(props) => (props.state ? 'transparent' : Colors.WHITE)};
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: ${Colors.WHITE};
  }
  color: ${(props) => (props.state ? Colors.WHITE : Colors.BLACK)};
  &.study:before,
  &.dictionary:before {
    display: block;
    position: absolute;
    top: 4px;
    right: 4px;
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
  &.study:before {
    background-color: ${Colors.BOOK_GRREN};
  }
  &.dictionary:before {
    background-color: ${Colors.BOOK_PURPLE};
  }
  &.all__learned {
    background-color: transparent;
    color: ${Colors.WHITE};
  }
`;
export const WordButtonsWrapper = styled.div`
  flex-wrap: wrap;
  max-width: 455px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const WordCardWrapper = styled.div`
  width: 455px;
  position: relative;
  min-height: 586px;
  height: fit-content;
  border-radius: 9px;
  padding-bottom: 23px;
  background-color: ${Colors.WHITE};
  transition: all 0.3s ease-in-out;

  @media (max-width: ${textBookSize}px) {
    &.card {
      display: none;
    }
  }
`;
export const WordCardImage = styled.div.attrs((props: { imgPath: string }) => props)`
  width: 100%;
  height: 278px;
  position: relative;
  border-radius: 9px 9px 0 0;
  background: url('${(props) => props.imgPath}');
  background-size: 100%;
`;
export const AudioButton = styled.button`
  margin-top: 30px;
  width: 38px;
  height: 38px;
  background: url('${audio_play}');
  cursor: pointer;
  &:disabled {
    cursor: none;
  }
`;
export const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 96px;
  padding: 0 39px 0;
`;
export const WordCardButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 42px;
`;
export const WordTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.015em;
  color: ${Colors.MIDDLE_BLACK};
  display: inline;
`;
export const WordTranscription = styled.h4`
  font-weight: 400;
  font-size: 22px;
  line-height: 17px;
  letter-spacing: 0.015em;
  color: ${Colors.MIDDLE_BLACK};
  display: inline;
  padding: 27px 0 0 12px;
`;
export const WordTranslation = styled.h4`
  font-weight: 400;
  font-size: 24px;
  line-height: 22px;
  letter-spacing: 0.015em;
  color: ${Colors.DARK_GRAY};
  display: inline;
`;
export const Line = styled.hr.attrs((props: { color: string }) => props)`
  width: 360px;
  height: 3px;
  margin: 0 47px 0 32px;
  padding-left: 15px;
  color: ${(props) => props.color};
`;
export const WordDescritionBlock = styled.div`
  margin: 19px 37px;
`;
export const WordDescritionBlockTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
`;
export const WordDescritionBlockExample = styled.h3`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.015em;
  color: ${Colors.MIDDLE_BLACK};
  padding: 10px 0 4px;
`;
export const WordDescritionBlockTranslation = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.015em;
  color: ${Colors.MIDDLE_BLACK};
`;
export const ProceedToGameButtonsWrapper = styled.div`
  display: flex;
  gap: 13px;

  @media (max-width: ${textBookSize}px) {
    justify-content: center;
  }
`;
export const ProceedToGameButton = styled.button.attrs(
  (props: { imagePath: string; iconColor: string }) => props,
)`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 0 18px;
  height: 60px;
  white-space: nowrap;
  border-radius: 4px;
  border: 3px solid ${Colors.WHITE};
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 0.015em;
  cursor: pointer;

  & .button__icon {
    border-radius: 50%;
    background-image: url('${(props) => props.imagePath}');
    background-color: ${Colors.WHITE};
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    box-sizing: border-box;
    width: 38px;
    height: 38px;
  }

  &:hover {
    background-color: ${Colors.WHITE};
  }
  &:disabled {
    background-color: rgba(255, 255, 255, 0.46);
    border: 3px solid transparent;
  }
  &:hover .button__icon,
  &:disabled .button__icon {
    background-color: ${(props) => props.iconColor};
  }
`;
export const AddToUserWordsWrapper = styled.div`
  position: absolute;
  top: 19px;
  right: 25px;
  width: fit-content;
  display: flex;
  gap: 21px;
`;
export const AddToUserWords = styled.button.attrs(
  (props: { color: string; state: string }) => props,
)`
  background-color: transparent;
  background-image: url('${(props) => (props.state === 'book' ? BookWhite : DoneWhite)}');
  background-repeat: no-repeat;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: 2px solid ${Colors.WHITE};
  background-size: contain;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &.active,
  &:hover {
    background-image: url('${(props) => (props.state === 'book' ? BookBlack : DoneBlack)}');
    background-color: ${(props) => props.color};
    border: 2px solid ${(props) => props.color};
  }
`;
export const ShowProgressBtn = styled.button`
  position: absolute;
  right: 17px;
  bottom: 12px;
  width: 131px;
  height: 30px;
  border-radius: 95px;
  background-color: transparent;
  border: 2px solid ${Colors.WHITE};
  color: ${Colors.WHITE};
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.015em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 7;
  &:hover {
    color: ${Colors.BLACK};
    background-color: ${Colors.WHITE};
  }
`;
export const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  color: ${Colors.WHITE};
  transition: all 0.3s ease-in-out;
`;
export const StatTable = styled.table.attrs(
  (props: { imagePath: string; iconColor: string }) => props,
)`
  margin: 23px 0 43px 37px;
  .td__icon {
    border-radius: 50%;
    background-image: url('${(props) => props.imagePath}');
    background-color: ${(props) => props.iconColor};
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    box-sizing: border-box;
    width: 38px;
    height: 38px;
    margin-right: 16px;
  }
  th {
    font-size: 22px;
    line-height: 40px;
    letter-spacing: 0.015em;
  }
  td {
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.015em;
    padding: 9px 10px;
    &.right {
      border-bottom: 3px solid ${Colors.LIGHT_GREEN};
    }
    &.wrong {
      border-bottom: 3px solid ${Colors.RED};
    }
  }
`;
