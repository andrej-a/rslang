import { IUserStatistic, Errors, HttpMetod } from './constants';
import { path } from './url';

const { GET, PUT, CONTENT_TYPE } = HttpMetod;

//Обновить данные в статистике
export const updateStatistic = async ({ learnedWords, optional }: IUserStatistic): Promise<IUserStatistic> => {

  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}/statistics`, {
    method: PUT,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
      'Content-Type': CONTENT_TYPE,
    },
    body: JSON.stringify({ learnedWords: learnedWords, optional: optional }),
  });
  if (rawResponse.status === Errors.BAD_REQUEST) {
    throw new Error('Bad request');
  }
  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();
  console.log('new statistic', content);
  return content;
};

//Получить данные из статистики
export const getStatistic = async () => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}/statistics`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
    },
  });
  if (rawResponse.status === Errors.BAD_REQUEST) {
    throw new Error('Bad request');
  }
  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();
  console.log('get statistic', content);
  return content;
};
