import { Errors, ISignInInfo, IUserAllInfo, HttpMetod } from './constants';
import { path } from './url';

const { POST, CONTENT_TYPE } = HttpMetod;

//Вход в систему
export const signIn = async (
  info: ISignInInfo,
  showSpinner: (value: boolean) => void,
): Promise<IUserAllInfo> => {
  showSpinner(true);
  const rawResponse = await fetch(`${path.signIn}`, {
    method: POST,
    headers: {
      Accept: CONTENT_TYPE,
      'Content-Type': CONTENT_TYPE,
    },
    body: JSON.stringify(info),
  });

  if (rawResponse.status === Errors.WRONG_INPUT_LOGIN) {
    showSpinner(false);
    throw new Error('Incorrect e-mail or password');
  }

  if (!rawResponse.ok) {
    showSpinner(false);
    throw new Error('Something wrong!');
  }

  const content: IUserAllInfo = await rawResponse.json();

  localStorage.setItem('userId', content.userId);
  localStorage.setItem('userToken', content.token);
  console.log('signIn', content);
  showSpinner(false);
  return content;
};
