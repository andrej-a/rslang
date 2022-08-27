import SprintIcon from '../../../assets/sprint.svg';
import AudioIcon from '../../../assets/audio.svg';

export interface IGame {
  id: string,
  title: string,
  img: string,
}
export type TGame = IGame[];

export const GamesData: TGame = [
  {
    id: 'sprint',
    title: 'Sprint',
    img: `${SprintIcon}`,
  },
  {
    id: 'audiochallenge',
    title: 'Audio challenge',
    img: `${AudioIcon}`,
  },
];
