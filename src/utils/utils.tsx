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
    ['/games', 'MiniGames'],
    ['/games/audiochallenge/start', 'MiniGames']]);
  return titles.get(path) ?? 'Easy English';
}
