import { Errors, ISignInInfo } from './constants';
import { path } from './url';

//Вход в систему
export const signIn = async (info: ISignInInfo): Promise<void> => {
  const rawResponse = await fetch(`${path.signIn}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  });

  if (rawResponse.status === Errors.WRONG_INPUT_LOGIN) {
    throw new Error('Incorrect e-mail or password');
  }
  if (!rawResponse.ok) {
    throw new Error('Something wrong!');
  }

  const content = await rawResponse.json();

  localStorage.setItem('userId', content.userId);
  localStorage.setItem('userToken', content.token);

  return content;
};
