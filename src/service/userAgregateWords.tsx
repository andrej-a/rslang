import { IWord } from '../models/IWord';
import { Errors, HttpMetod } from './constants';
import { path } from './url';
const { GET, CONTENT_TYPE } = HttpMetod;

///Получить слова определенной группы, определенной страницы c возможностью фильтрации
export const getAggregatedWordsList = async (options: {
  userId: string;
  group?: string;
  page?: string;
  wordsPerPage?: string;
  filter?: string;
}): Promise<IWord[]> => {
  const filterGroup: string = '' ?? `&group=${options.group}`;
  const filterPage: string = '' ?? `&page=${options.page}`;
  const filterWordsPerPage: string = '' ?? `&wordsPerPage=${options.wordsPerPage}`;
  const filterFilter: string = '' ?? `&filter=${options.filter}`;
  const sumFilter: string = filterGroup + filterPage + filterWordsPerPage + filterFilter;
  const finalFilter = `?${sumFilter.slice(1)}`;

  const rawResponse = await fetch(
    `${path.users}/${options.userId}/aggregatedWords?${finalFilter}`,
    {
      method: GET,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        Accept: CONTENT_TYPE,
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
  console.log('getAggregatedWordsList', content);
  return content;
};
