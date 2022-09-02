import { IWord } from '../models/IWord';
import { HttpMetod, DefaultNumber } from './constants';
import { path } from './url';

const { GET, CONTENT_TYPE } = HttpMetod;

//Получение слов из определенной группы и страницы
export const getWords = async (
  group?: number | string,
  page?: number | string,
): Promise<IWord[]> => {
  const response = await fetch(
    `${path.words}?group=${group || DefaultNumber.NULL}&page=${page || DefaultNumber.NULL}`,
    {
      method: GET,
      headers: {
        Accept: CONTENT_TYPE,
      },
    },
  );

  const content = await response.json();
  console.log('getWords', content);
  return content;
};

// Получение слова по id
export const getWordById = async (id: string): Promise<IWord> => {
  const response = await fetch(`${path.words}/${id}`, {
    method: GET,
    headers: {
      Accept: CONTENT_TYPE,
    },
  });
  const content = await response.json();
  console.log('getWordById', content);
  return content;
};
