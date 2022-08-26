
import { string } from 'prop-types';
import { SignInInfo } from './Authorization';
import { Errors, ResponseCode } from './constants';
import { path } from './url';

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IUserAllInfo {
  message: string,
  token: string,
  refreshToken: string,
  userId: string,
  name: string,
}

//Создание пользователя
export const createUser = async (user: IUser): Promise<void> => {
  const rawResponse = await fetch(path.users, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (rawResponse.status === Errors.WRONG_INPUT_CREATE_USER) {
    throw new Error('Incorrect e-mail or password');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  localStorage.setItem('userId', content.userId);

  return content;
};

//Получить информацию о пользователе по ID
export const getUser = async (): Promise<IUser> => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
  });

  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (rawResponse.status === Errors.NOT_FOUND_USER) {
    throw new Error('User not found');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  return content;
};

//Изменить информацию о пользователе
export const editUser = async (user: SignInInfo): Promise<IUser> => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: 'application/json',
    },
    body: JSON.stringify(user),
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

  return content;
};

//Удалить пользователя 
export const deleteUser = async (id: string, token: string): Promise<void> => {
  const rawResponse = await fetch(`${path.users}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (rawResponse.status === ResponseCode.USER_DELETED_SUCCESS) {
    console.log('The user has been deleted');
  }
};

//Получить новый токен 
export const getNewUserToken = async (id: string, refreshtoken: string): Promise<IUserAllInfo> => {
  const rawResponse = await fetch(`${path.users}/${id}/tokens`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${refreshtoken}`,
      Accept: 'application/json',
    },
  });


  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  return content;
};
