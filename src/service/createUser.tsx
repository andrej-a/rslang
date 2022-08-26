import { path } from './url';

export const createUser = async (user: { email: string; password: string }): Promise<void> => {
  const rawResponse = await fetch(path.users, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();
  console.log(content);
};
