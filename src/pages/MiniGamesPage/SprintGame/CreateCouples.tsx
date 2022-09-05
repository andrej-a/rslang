import { IWord } from '../../../models/IWord';

export interface IWordsForPlay {
  yes?: number;
  word: string;
  translate: string;
}

const randomNumber = (min = 1, max = 59): number => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const createCouples = (words: IWord[]): IWordsForPlay[] => {
  console.log('create', words);
  const firstWordsArray: IWordsForPlay[] = [];
  const wordsForPlay: IWordsForPlay[] = [];

  words.map((word) => {
    firstWordsArray.push({ word: word.word, translate: word.wordTranslate });
  });

  for (let i = 0; i < words.length; i++) {
    if (Math.round(Math.random())) {
      wordsForPlay.push({
        yes: 1,
        word: firstWordsArray[i].word,
        translate: firstWordsArray[i].translate,
      });
    } else {
      wordsForPlay.push({
        yes: 0,
        word: firstWordsArray[i].word,
        translate: firstWordsArray[(i + randomNumber()) % 60].translate,
      });
    }
  }

  return wordsForPlay;
};
