import { IUserWord, Errors, IUserWordCreateResponse, HttpMetod } from '../../../service/constants';
import { path } from '../../../service/url';
import { createUserWord, updateUserWord } from '../../../service/userWords';

const { GET, CONTENT_TYPE } = HttpMetod;

export const UpdateOrCreateUserWord = async (
  userId: string | null,
  wordId: string,
  primaryData: IUserWord,
  //это значение добавляется только к rightAnswerrs
  // для блока с правильными ответами оно всегда 1, для неправильных -- 0
  value = 0,
  // тут ниже понятно. у себя будешь передавать только поинты спринтов
  rightAudioPoints = 0,
  wrongAudioPoints = 0,
  rightSprintPoints = 0,
  wrongSprintPoints = 0,
) => {
  const rawResponse = await fetch(`${path.users}/${userId}/words/${wordId}`, {
    method: GET,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      Accept: CONTENT_TYPE,
    },
  });

  if (rawResponse.status === Errors.INVALID_TOKEN) {
    throw new Error('Access token is missing or invalid');
  }
  // если слово не найдено -- создаем с primary данными
  if (rawResponse.status === Errors.NOT_FOUND_USER) {
    createUserWord({
      userId: userId,
      wordId: wordId,
      word: primaryData,
    });
  } else {
    //если слово найдено, то тут получаем данные слова и деструктуризируем
    const content: IUserWordCreateResponse = await rawResponse.json();
    let { difficulty } = content;
    const { rightSprint, wrongSprint, rightAudio, wrongAudio } = content.optional;
    let { rightAnswers } = content.optional;
    // для обычного слова максимум rightAnswers будет 5
    if (difficulty === 'learned') {
      rightAnswers = rightAnswers < 5 ? rightAnswers + value : rightAnswers;
      difficulty = rightAnswers < 5 ? difficulty : 'study';
    }
    //у сложного 7
    if (difficulty === 'hard') {
      rightAnswers = rightAnswers < 7 ? rightAnswers + value : rightAnswers;
      difficulty = rightAnswers < 7 ? difficulty : 'study';
    }
    //если изученное слово не отвечено (то есть какой-то из поинтов не равен нулю, что вернет true),
    //то откатываем сразу до 3
    if (
      (difficulty === 'study' && wrongAudioPoints) ||
      (difficulty === 'study' && wrongSprintPoints)
    ) {
      rightAnswers = 3;
      difficulty = 'learned';
    }
    updateUserWord({
      //записываем данные
      userId: userId,
      wordId: wordId,
      word: {
        difficulty: difficulty,
        optional: {
          rightAnswers: rightAnswers,
          rightAudio: rightAudio + rightAudioPoints,
          wrongAudio: wrongAudio + wrongAudioPoints,
          rightSprint: rightSprint + rightSprintPoints,
          wrongSprint: wrongSprint + wrongSprintPoints,
        },
      },
    });
  }
};
