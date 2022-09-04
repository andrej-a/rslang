import { number } from 'prop-types';
import { IWord } from '../../../models/IWord';
import { getStatistic, updateStatistic } from '../../../service/statistics';
import { IUserStatistic } from '../../../service/constants';
interface ISetStatistic {
  wrongList: IWord[];
  correctList: IWord[];
  maxLineRightAnswers?: number;
  // game: string; // audioChallenge || sprint
}
export const setStatisticGame = async ({
  wrongList,
  correctList,
  maxLineRightAnswers,
}: ISetStatistic): Promise<void> => {
  const oldStatistic = await getStatistic();
  const allWordsGame = wrongList.length + correctList.length;
  console.log('old stat', oldStatistic);
  const gameAccurancy = Math.round((correctList.length * 100) / allWordsGame);
  oldStatistic.optional.common.wordsToday += allWordsGame;
  oldStatistic.optional.common.errors += wrongList.length;
  oldStatistic.optional.common.correct += correctList.length;
  oldStatistic.optional.games.sprint.words = wrongList.length + correctList.length;
  oldStatistic.optional.games.sprint.inRow = maxLineRightAnswers;
  oldStatistic.optional.games.sprint.accurancy = gameAccurancy;
  const newStatistic = await updateStatistic(oldStatistic);
};

export const setStatisticWord = async ({
  wrongList,
  correctList,
}: ISetStatistic): Promise<void> => {};
