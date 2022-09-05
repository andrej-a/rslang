import { IWord } from '../models/IWord';

export const getRandomWordsFromArray = (array: IWord[], length: number, currentWord: IWord) => {
  if (!array.length) {
    return array;
  }
  const copy = [...array];
  const result = [];
  for (let i = 0; i < length; i++) {
    const ind = Math.floor(Math.random() * copy.length);
    if (copy[ind].id !== currentWord.id) {
      result.push(copy[ind]);
    } else {
      i--;
    }
    copy.splice(ind, 1);
  }
  return result;
};
