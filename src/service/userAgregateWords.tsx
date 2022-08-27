import { IWord } from '../models/IWord';
import { Errors } from './constants';
import { path } from './url';

///Получить слова определенной группы, определенной страницы c возможностью фильтрации
export const getAggregatedWordsList = async (options: {
  userId: string;
  group?: string;
  page?: string;
  wordsPerPage?: string;
  filter?: string;
}): Promise<IWord[]> => {
  const filterGroup: string = filterGroup ? `&group=${options.group}` : '';
  const filterPage: string = filterPage ? `&page=${options.page}` : '';
  const filterWordsPerPage: string = filterWordsPerPage
    ? `&wordsPerPage=${options.wordsPerPage}`
    : '';
  const filterFilter: string = filterFilter ? `&filter=${options.filter}` : '';
  const sumFilter: string = filterGroup + filterPage + filterWordsPerPage + filterFilter;
  const finalFilter = sumFilter ? `?${sumFilter.slice(1)}` : '';

  const rawResponse = await fetch(
    `${path.users}/${options.userId}/aggregatedWords?${finalFilter}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: 'application/json',
      },
    },
  );

  if (rawResponse.status === Errors.INVALID_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  return content;
};
