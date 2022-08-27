import { IGame, GamesData } from '../pages/MiniGamesPage/InitialPage/GamesData';

const getGameInformation = (game: string) => {
  let data: IGame = {} as IGame;
  GamesData.forEach(gameInfo => {
    const { id } = gameInfo;
    if (game === id) {
      data = gameInfo;
    }
  });
  return data; 
};

export default getGameInformation;