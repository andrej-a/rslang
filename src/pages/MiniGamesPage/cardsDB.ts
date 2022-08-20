import { Colors } from '../../styles/constansts';
import SPRINT from '../../assets/sprintImage.svg';
import AUDIO from '../../assets/audioImage.svg';

const { GREEN, LIGHT_GREEN } = Colors;

interface ICard {
  id: number;
  TITLE: string;
  inputColor: Colors;
  src: string;
}

type TCardsArray = ICard[];

export const cards: TCardsArray = [
  { id: 1, TITLE: 'Sprint', inputColor: GREEN, src: SPRINT },
  { id: 2, TITLE: 'Audio challenge', inputColor: LIGHT_GREEN, src: AUDIO },
];