import { IWord } from '../models/IWord';
import { path } from './url';

//Получение слов из определенной группы и страницы
export const getWords = async (group?: number, page?: number): Promise<{ items: IWord[] }> => {
  const response = await fetch(
    `${path.words}?group=${group || undefined}&page=${page || undefined}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  );

  const content = await response.json();
  return content;
};

// Получение слова по id
export const getWordById = async (id: string): Promise<IWord> => {
  const response = await fetch(`${path}/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const content = await response.json();
  return content;
};
