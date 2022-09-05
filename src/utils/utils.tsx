import { IWord } from '../models/IWord';

/***
 * Capitalize first symbol
 */
export function Capitalize(str: string) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

export function GetTitle(path: string) {
  const titles = new Map([
    ['/', 'Easy English'],
    ['/registration', 'Easy English'],
    ['/textbook', 'Text Book'],
    ['/statistics', 'Statistics'],
    ['/games', 'MiniGames'],
    ['/games/audiochallenge/start', 'MiniGames'],
    ['/games/sprint/start', 'MiniGames'],
  ]);
  return titles.get(path) ?? 'Easy English';
}

export const compare = (dictionary: IWord[], learned: IWord[], words: IWord[]) => {
  const common = words.map((word) => word.id).sort();
  const users = [...dictionary, ...learned].map((word) => word.id).sort();
  for (let i = 0; i < common.length; i++) {
    if (!users.includes(common[i])) return false;
  }
  return true;
};
