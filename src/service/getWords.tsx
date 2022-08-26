import { IWord } from '../models/IWord';
import { path } from './url';

export const getWords = async (group: number, page: number): Promise<{ items: IWord[] }> => {
  const response = await fetch(`${path.words}?group=${group}&page=${page}`);
  return {
    items: await response.json(),
  };
};

export const getWord = async (id: string): Promise<IWord> => {
  return (await fetch(`${path.words}/${id}`)).json();
};
