import { Errors } from './constants';
import { path } from './url';

interface IUser {
  name: string;
  email: string;
  password: string;
}

export const getUserWords = async (): Promise<void> => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}/words`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });

  if (rawResponse.status === Errors.INVALID_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  return content;
};

export const getUserWordsById = async (id: string): Promise<void> => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}/words/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
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

  return content;
};