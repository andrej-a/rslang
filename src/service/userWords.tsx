import { IWord } from '../models/IWord';
import {
  Errors,
  IUserWord,
  ResponseCode,
  IWordsSetter,
  IUserWordCreateResponse,
  HttpMetod,
} from './constants';
import { getWordById } from './getWords';
import { path } from './url';

const { POST, GET, PUT, DELETE, CONTENT_TYPE } = HttpMetod;

//Получение списка сложных слов для конкретного пользователя
export const getUserWords = async (): Promise<IUserWord[]> => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}/words`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
    },
  });

  if (rawResponse.status === Errors.INVALID_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();
  console.log('getUserWords', content);
  return content;
};
export const getUserWordsArray = async (): Promise<{
  dictionary: Promise<IWord[]>;
  learned: Promise<IWord[]>;
  study: Promise<IWord[]>;
}> => {
  const userWords = await getUserWords();
  const dictionaryWords: Promise<IWord>[] = userWords
    .filter((word) => word.difficulty === 'hard')
    .map((word) => getWordById(word.wordId));

  const learnedWords: Promise<IWord>[] = userWords
    .filter((word) => word.difficulty === 'learned')
    .map((word) => getWordById(word.wordId));
  const sudyWords: Promise<IWord>[] = userWords
    .filter((word) => word.difficulty === 'study')
    .map((word) => getWordById(word.wordId));
  return {
    dictionary: Promise.all(dictionaryWords),
    learned: Promise.all(learnedWords),
    study: Promise.all(sudyWords),
  };
};
export const getUserWordByCommonWordId = async (wordId: string): Promise<IUserWord | undefined> => {
  const userWords = await getUserWords();
  return userWords.find((word) => word.wordId === wordId);
};

//Получить слово из списка сложных слов конкретного пользователя
export const getUserWordsById = async (userId: string, wordId: string): Promise<IUserWord> => {
  const rawResponse = await fetch(`${path.users}/${userId}/words/${wordId}`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
    },
  });

  if (rawResponse.status === Errors.INVALID_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (rawResponse.status === Errors.NOT_FOUND_USER) {
    throw new Error('User word not found');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();
  console.log('getUserWordById', content);
  return content;
};

//Добавить слово в список сложных слов конкретного пользователя
export const createUserWord = async ({
  userId,
  wordId,
  word,
}: IWordsSetter): Promise<IUserWord> => {
  const rawResponse = await fetch(`${path.users}/${userId}/words/${wordId}`, {
    method: POST,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
      'Content-Type': CONTENT_TYPE,
    },
    body: JSON.stringify(word),
  });

  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (rawResponse.status === Errors.BAD_REQUEST) {
    throw new Error('Bad request');
  }
  if (rawResponse.status === ResponseCode.WORD_CREATE_SUCCESS) {
    console.log('The user word has been created');
  }

  const content = await rawResponse.json();
  console.log('createUserWords', content);
  return content;
};

//Обновить слово в список сложных слов конкретного пользователя
export const updateUserWord = async ({
  userId,
  wordId,
  word,
}: IWordsSetter): Promise<IUserWord> => {
  const rawResponse = await fetch(`${path.users}/${userId}/words/${wordId}`, {
    method: PUT,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
      'Content-Type': CONTENT_TYPE,
    },
    body: JSON.stringify(word),
  });

  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (rawResponse.status === Errors.BAD_REQUEST) {
    throw new Error('Bad request');
  }
  if (rawResponse.status === ResponseCode.WORD_CREATE_SUCCESS) {
    console.log('The user word has been updated');
  }

  const content = await rawResponse.json();
  console.log('updateUserWords', content);
  return content;
};

//Удалить слово из списка сложных слов конкретного пользователя
export const deleteUserWord = async (userId: string, wordId: string): Promise<void> => {
  const rawResponse = await fetch(`${path.users}/${userId}/words/${wordId}`, {
    method: DELETE,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });

  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (rawResponse.status === ResponseCode.DELETED_SUCCESS) {
    console.log('The user word has been created');
  }
};
