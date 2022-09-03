import { IWord } from '../../../models/IWord';

interface ISetStatistic {
  wrongList: IWord[];
  correctList: IWord[];
  maxLineRightAnswers?: number;
}
export const setStatisticGame = ({
  wrongList,
  correctList,
  maxLineRightAnswers,
}: ISetStatistic): void => {};

export const setStatisticWord = async ({ wrongList, correctList }: ISetStatistic): void => {
  const userWords = await getUserWord

};
