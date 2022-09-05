import { IWord } from '../models/IWord';
import { IUserWord } from '../service/constants';
import { getWords } from '../service/getWords';
import { getUserWords } from '../service/userWords';

function search(a: IWord[], b: IUserWord[], sortedArray: IWord[], maxWordsNumber: number): IWord[] {
  for (const akey in a) {
    let found = false;
    for (const bkey in b) {
      if (a[akey].id === b[bkey].wordId) {
        found = true;
        continue;
      }
    }
    if (!found && sortedArray.length < maxWordsNumber) {
      sortedArray.push(a[akey]);
    }
  }
  return sortedArray;
}
export const getNoStudiedWordsFromServer = async (
  wordsGroup: number, //группа слов, типа А1, В2 и т.п
  currentPage: number, // текущая страница
  sortedArray: IWord[], //массив результата, изначально пустой
  maxWordsNumber: number, //максимальное количество нужных слов
): Promise<{
  items: IWord[];
}> => {
  const userWords = await getUserWords(); //получаем все слова пользователя
  const studiedWords = userWords.filter((word) => word.difficulty === 'study'); //фильтруем
  const textBookWordsResponce = (await getWords(wordsGroup, currentPage - 1)) as unknown as IWord[]; //слова текущей группы и страницы
  const copyData = [...(textBookWordsResponce as unknown as IWord[])] as IWord[]; //делаем итерабельными
  //если после сравнения слов с учебника и слов пользователя слов, в итоге, меньше 20 и мы не на первой странице
  //рекурсивно вызываем эту же функцию
  if (
    search(copyData, studiedWords, sortedArray, maxWordsNumber).length < maxWordsNumber &&
    currentPage !== 0
  ) {
    return getNoStudiedWordsFromServer(wordsGroup, currentPage - 1, sortedArray, maxWordsNumber);
  } else {
    //если слов 20 или мы дошли до первой страницы -- возвращаем промис
    return { items: search(copyData, studiedWords, sortedArray, maxWordsNumber) };
  }
};
