import {
  Errors,
  IUser,
  IUserAllInfo,
  ResponseCode,
  ISignInInfo,
  IInfoRequestUser,
  HttpMetod,
} from './constants';
import { path } from './url';

const { POST, GET, PUT, DELETE, CONTENT_TYPE } = HttpMetod;

//Создание пользователя
export const createUser = async (user: IUser): Promise<IInfoRequestUser> => {
  const rawResponse = await fetch(path.users, {
    method: POST,
    headers: {
      Accept: CONTENT_TYPE,
      'Content-Type': CONTENT_TYPE,
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
  console.log('createUser', content);
  return content;
};

//Получить информацию о пользователе по ID
export const getUser = async (): Promise<IInfoRequestUser> => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
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
  console.log('getUser', content);
  return content;
};

//Изменить информацию о пользователе
export const editUser = async (user: ISignInInfo): Promise<IInfoRequestUser> => {
  const rawResponse = await fetch(`${path.users}/${localStorage.getItem('userId')}`, {
    method: PUT,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
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
  console.log('editUser', content);
  return content;
};

//Удалить пользователя
export const deleteUser = async (id: string): Promise<void> => {
  const rawResponse = await fetch(`${path.users}/${id}`, {
    method: DELETE,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });

  if (rawResponse.status === Errors.MISSING_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  if (rawResponse.status === ResponseCode.DELETED_SUCCESS) {
    console.log('The user has been deleted');
  }
};

//Получить новый токен
export const getNewUserToken = async (id: string, refreshtoken: string): Promise<IUserAllInfo> => {
  const rawResponse = await fetch(`${path.users}/${id}/tokens`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${refreshtoken}`,
      Accept: CONTENT_TYPE,
    },
  });

  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  return content;
};
