import { IWord } from '../models/IWord';
import { path } from './url';

//Получение слов из определенной группы и страницы
export const getWords = async (group?: number, page?: number): Promise<{ items: IWord[] }> => {
  const response = await fetch(`${path.words}?group=${group || 0}&page=${page || 0}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  const content = await response.json();
  console.log('getWords', content);
  return content;
};

// Получение слова по id
export const getWordById = async (id: string): Promise<IWord> => {
  const response = await fetch(`${path.words}/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const content = await response.json();
  console.log('getWordById', content);
  return content;
};
