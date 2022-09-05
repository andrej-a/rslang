import { IWord } from '../models/IWord';

export function shuffle(array: IWord[]) {
  array.sort(() => Math.random() - 0.5);
  return array;
}
