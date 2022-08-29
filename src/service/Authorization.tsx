import { Errors, ISignInInfo, IUserAllInfo, HttpMetod } from './constants';
import { path } from './url';
const { POST, CONTENT_TYPE } = HttpMetod;

//Вход в систему
export const signIn = async (info: ISignInInfo): Promise<IUserAllInfo> => {
  const rawResponse = await fetch(`${path.signIn}`, {
    method: POST,
    headers: {
      Accept: CONTENT_TYPE,
      'Content-Type': CONTENT_TYPE,
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
  console.log('signIn', content);
  return content;
};
