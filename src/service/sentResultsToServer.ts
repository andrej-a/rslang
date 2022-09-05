import { IWord } from '../models/IWord';
import { UpdateOrCreateUserWord } from './userWords';

interface IPrimaryObject {
  rightAnswers: number;
  rightAudio: number;
  wrongAudio: number;
  rightSprint: number;
  wrongSprint: number;
}
export const primaryCorrectObject: IPrimaryObject = {
  rightAnswers: 1,
  rightAudio: 1,
  wrongAudio: 0,
  rightSprint: 0,
  wrongSprint: 0,
};
export const primaryWrongObject: IPrimaryObject = {
  rightAnswers: 0,
  rightAudio: 0,
  wrongAudio: 1,
  rightSprint: 0,
  wrongSprint: 0,
};
export const primaryCorrectObjectSprint: IPrimaryObject = {
  rightAnswers: 1,
  rightAudio: 0,
  wrongAudio: 0,
  rightSprint: 1,
  wrongSprint: 0,
};
export const primaryWrongObjectSprint: IPrimaryObject = {
  rightAnswers: 0,
  rightAudio: 0,
  wrongAudio: 0,
  rightSprint: 0,
  wrongSprint: 1,
};
export const sentResultsToServer = (
  answers: IWord[],
  primaryOptionalObject: IPrimaryObject,
  value: number,
  rightAudioPoints: number,
  wrongAudioPoints: number,
  rightSprintPoints?: number,
  wrongSprintPoints?: number,
) => {
  const userID = localStorage.getItem('userId') as string;
  answers.forEach((word) => {
    UpdateOrCreateUserWord(
      userID,
      word.id,
      {
        difficulty: 'learned',
        optional: primaryOptionalObject,
      },
      value,
      rightAudioPoints,
      wrongAudioPoints,
      rightSprintPoints,
      wrongSprintPoints,
    );
  });
};
